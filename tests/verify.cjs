const vm=require('node:vm'),fs=require('node:fs');const elements=new Map();function el(s){if(!elements.has(s))elements.set(s,{value:s==='#difficulty'?'normal':s==='#stage'?'sunset':'1',style:{setProperty(){}},selectedOptions:[{textContent:'Hoàng hôn'}],classList:{add(){},remove(){},toggle(){}},textContent:'',setAttribute(){},addEventListener(){},querySelector:()=>el('nested'),getContext:()=>({}),getBoundingClientRect:()=>({left:0,top:0,width:100,height:100})});return elements.get(s)}const sandbox={document:{querySelector:el,querySelectorAll:()=>[],documentElement:el('html'),body:el('body'),addEventListener(){}},window:{addEventListener(){}},Image:class{},requestAnimationFrame(){},localStorage:{getItem:()=>null,setItem(){}},matchMedia:()=>({matches:false}),performance:{now:()=>0},devicePixelRatio:1,navigator:{},location:{reload(){}},console};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(__dirname+'/../game.js','utf8'),sandbox);vm.runInContext(`
function check(v,m){if(!v)throw Error(m)}
function ticks(t){for(let i=0;i<Math.ceil(t*120);i++)step(1/120)}
mode='local';beginMatch();phase=0;fighters[0].x=600;fighters[1].x=730;sound=false;
requestAttack(fighters[0],'punch');ticks(.15);check(fighters[1].hp===94,'light damage');
// Both character kits really differ.
selected=1;beginMatch();phase=0;fighters[0].x=600;fighters[1].x=730;requestAttack(fighters[0],'punch');ticks(.15);check(fighters[1].hp===92,'heavy fighter damage');
selected=0;beginMatch();phase=0;fighters[0].x=600;fighters[1].x=730;keys.add('3');ticks(.02);requestAttack(fighters[0],'punch');ticks(.15);check(fighters[1].hp>99&&fighters[1].hp<100,'blocked chip damage');
keys.clear();beginMatch();phase=0;fighters[0].energy=100;requestAttack(fighters[0],'special');ticks(1);check(fighters[1].hp===73,'projectile damage');
beginMatch();phase=0;fighters[0].x=600;fighters[1].x=730;keys.add('j');ticks(1.1);check(stats.combo>=3,'held combo sequence');check(fighters[0].chain===2||fighters[0].chain===0,'combo finisher');
keys.clear();beginMatch();phase=0;keys.add('w');ticks(1.2);check(fighters[0].y===FLOOR,'jump once per press');keys.clear();setGuard(true);keys.add('j');step(.01);check(!guard&&fighters[0].attack,'attack leaves guard');
keys.clear();beginMatch();phase=0;fighters[1].hp=0;step(.01);check(wins[0]===1&&phase===2,'round win');ticks(2.2);check(round===2&&fighters[1].hp===100,'new round resets health');phase=0;fighters[1].hp=0;step(.01);ticks(2.2);check(state==='result'&&wins[0]===2,'match result');check(saved.wins===1,'local win record');
mode='training';beginMatch();phase=0;fighters[1].hp=1;fighters[0].x=600;fighters[1].x=730;requestAttack(fighters[0],'punch');ticks(1.5);check(fighters[1].hp===100&&state==='playing'&&wins[0]===0,'training heals without ending match');check(time===60,'training timer unlimited');
mode='ai';beginMatch();phase=0;ticks(.8);check(fighters[1].x<960,'AI approaches');pause();let old=time;ticks(1);check(time===old,'pause freezes match');steer({clientX:100,clientY:0});check(keys.has('d')&&!keys.has('w'),'horizontal joystick');releaseJoy();check(!keys.has('d'),'release stops movement');

check(characters.length===6,'six fighters configured');
for(let id=0;id<characters.length;id++){selected=id;mode='local';beginMatch();phase=0;check(fighters[0].char===id&&fighters[1].char>=0&&fighters[1].char<6,'valid fighter pairing');fighters[0].x=600;fighters[1].x=730;requestAttack(fighters[0],'punch');ticks(.15);check(fighters[1].hp===100-characters[id].punch,'unique punch damage '+id)}
selected=3;beginMatch();phase=0;fighters[0].energy=100;requestAttack(fighters[0],'special');check(bolts.length===2&&bolts.every(b=>b.damage===14),'shadow double projectile');ticks(1.3);check(fighters[1].hp===72,'both shadow hits');
selected=5;beginMatch();phase=0;fighters[0].hp=60;fighters[0].energy=100;requestAttack(fighters[0],'special');check(fighters[0].hp===68&&bolts[0].damage===23,'lotus heal and damage');
selected=4;beginMatch();phase=0;fighters[0].energy=100;requestAttack(fighters[0],'special');check(bolts[0].speed===1150,'thunder projectile speed');
selected=0;beginMatch();phase=0;fighters[0].x=600;fighters[1].x=730;fighters[1].char=2;keys.add('3');ticks(.02);requestAttack(fighters[0],'punch');ticks(.15);check(Math.abs(fighters[1].hp-99.52)<.0001,'tiger reduces chip damage');keys.clear();
for(let id=0;id<6;id++)assets.base[id]=[{}];$('#opponent').value='random';for(let id=0;id<6;id++){selected=id;for(let j=0;j<30;j++)check(chooseOpponent()!==id,'random avoids mirror')};$('#opponent').value='4';selected=5;check(chooseOpponent()===4,'explicit opponent');
console.log('PASS: six fighter kits, special variants, random/explicit opponents, combat, rounds, records, training, AI, pause, joystick');

`,sandbox);
