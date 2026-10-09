process.chdir(require('node:path').resolve(__dirname,'..'));
const {chromium}=require('./test-runtime.cjs');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
(async()=>{
 const out=path.join(__dirname,'output','qa');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:1440,height:1100}});const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('net::ERR'))errors.push(m.text());});
 const url='http://127.0.0.1:5188/alphabet-racing/solo.html';const state=()=>page.evaluate(()=>JSON.parse(render_game_to_text()));
 await page.goto(url);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:path.join(out,'01-menu.png'),fullPage:true});
 assert.equal(await page.locator('.course:disabled').count(),4);await page.locator('#sound').click();await page.locator('#start').click();
 await page.keyboard.press('ArrowRight');assert.equal((await state()).selectedLane,2);await page.keyboard.press('ArrowLeft');assert.equal((await state()).selectedLane,1);
 await page.locator('#pause').click();let before=await state();await page.evaluate(()=>advanceTime(2500));assert.equal((await state()).player.distance,before.player.distance);assert.equal((await state()).paused,true);await page.locator('#resume').click();
 for(let stage=0;stage<5;stage++){
  if(stage){await page.locator('#home').click();await page.locator('.course').nth(stage).click();await page.locator('#start').click();}
  for(let round=0;round<8;round++){
   let s=await state();assert.equal(s.challenge,round+1);assert.equal(s.answered,false);
   if(round===0){
    if(stage===2){const wrong=[...s.answer].reverse().join('');if(wrong!==s.answer){for(const letter of wrong)await page.locator('.choice:not(:disabled)').filter({hasText:new RegExp('^'+letter+'$')}).first().click();}else throw Error('Palindrome in word bank');assert.equal((await state()).built.length,0);}
    else await page.locator('.choice').nth(s.choices.findIndex(v=>v!==s.answer)).click();
    assert.equal((await state()).answered,false);assert.equal((await state()).player.distance,0);assert.match((await state()).feedback,/try together/);
   }
   if(stage===2){
    if(round===1){await page.locator('.choice').first().click();await page.locator('#undo').click();assert.equal((await state()).built.length,0);}
    for(const letter of s.answer)await page.locator('.choice:not(:disabled)').filter({hasText:new RegExp('^'+letter+'$')}).first().click();
   }else await page.locator('.choice').nth(s.choices.indexOf(s.answer)).click();
   s=await state();assert.equal(s.answered,true);assert.equal(s.player.distance,(round+1)*150);assert.ok(s.player.boost>0);
   if(round===1)await page.screenshot({path:path.join(out,`stage-${stage+1}.png`),fullPage:true});
   await page.locator('#next').click();
  }
  const finished=await state();assert.equal(finished.screen,'finish');assert.equal(finished.rewards.races,stage+1);assert.equal(finished.firstTryAnswers,7);assert.ok(finished.rivals.every(v=>v<1200));await page.screenshot({path:path.join(out,`finish-${stage+1}.png`),fullPage:true});
 }
 await page.locator('#garage').click();assert.equal(await page.locator('.garage-item:disabled').count(),0);await page.getByRole('button',{name:'Grape Rocket'}).click();await page.getByRole('button',{name:'Sunset Valley'}).click();await page.getByRole('button',{name:'Panda'}).click();await page.getByRole('button',{name:'Rainbow'}).click();await page.screenshot({path:path.join(out,'garage.png'),fullPage:true});await page.locator('#close-modal').click();
 await page.reload();assert.equal((await state()).rewards.races,5);assert.equal((await state()).rewards.car,'Grape Rocket');assert.equal((await state()).rewards.track,'Sunset Valley');
 await page.locator('#grownups').click();await page.locator('#case-setting').selectOption('lower');await page.locator('#helper-setting').check();await page.locator('#practice-setting').selectOption('0');await page.locator('#practice').click();assert.match((await state()).answer,/^[a-z]$/);
 await page.locator('#garage').click();assert.equal((await state()).paused,true);await page.locator('#close-modal').click();await page.locator('#resume').click();
 await page.locator('#pause').click();await page.locator('#grownups').click();await page.locator('#practice-setting').selectOption('3');await page.locator('#practice').click();assert.equal(await page.locator('#pause-card').isVisible(),false);assert.equal(await page.locator('#listen').isEnabled(),true);
 await page.locator('#pause').click();await page.locator('#quit').click();await page.locator('#start').click();assert.equal(await page.locator('#meter-fill').evaluate(e=>e.style.width),'0%');
 // A race with every answer learned through a retry still completes and awards a trophy.
 for(let r=0;r<8;r++){const s=await state();await page.locator('.choice').nth(s.choices.findIndex(c=>c!==s.answer)).click();await page.locator('.choice').nth(s.choices.indexOf(s.answer)).click();await page.locator('#next').click();}
 assert.equal((await state()).firstTryAnswers,0);assert.ok((await state()).rivals.every(v=>v>1200));assert.match(await page.locator('#finish-card').innerText(),/3rd place/);
 await page.locator('#home').click();await page.locator('#fullscreen').click();await page.waitForFunction(()=>Boolean(document.fullscreenElement));await page.locator('#fullscreen').click();await page.waitForFunction(()=>!document.fullscreenElement);
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});mobile.on('pageerror',e=>errors.push(String(e)));await mobile.goto(url);await mobile.evaluate(()=>document.fonts.ready);await mobile.screenshot({path:path.join(out,'mobile-menu.png'),fullPage:true});assert.equal(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await mobile.locator('#sound').tap();await mobile.locator('#start').tap();const ms=await mobile.evaluate(()=>JSON.parse(render_game_to_text()));await mobile.locator('.choice').nth(ms.choices.indexOf(ms.answer)).tap();await mobile.screenshot({path:path.join(out,'mobile-race.png'),fullPage:true});await mobile.locator('#next').tap();assert.equal(await mobile.evaluate(()=>JSON.parse(render_game_to_text()).challenge),2);
 // Malformed browser save should recover to a playable default.
 await mobile.evaluate(()=>localStorage.setItem('abc-racing-v1','bad json'));await mobile.reload();await mobile.locator('#start').tap();assert.equal(await mobile.locator('.choice').count(),3);
 assert.deepEqual(errors,[]);fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({passed:true,stages:5,completedChallenges:48,checks:['gentle retry','bridge reset and undo','race rewards','all unlocks','save reload','practice','pause resume','keyboard','fullscreen','mobile touch','malformed save'],errors},null,2));console.log('PASS: five stages, 48 challenges, unlocks, persistence, pause, practice, keyboard, fullscreen, mobile; no JS errors.');await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
