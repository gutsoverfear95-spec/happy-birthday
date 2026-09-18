var cfg={name:'Em Yêu',date:'2024-02-14'};
try{var s=JSON.parse(localStorage.getItem('bdCfg'));if(s)cfg=s;}catch(e){}
document.getElementById('herName').textContent=cfg.name;
function edit(){var n=prompt('Tên người yêu:',cfg.name);if(n)cfg.name=n;var d=prompt('Ngày bắt đầu yêu (YYYY-MM-DD):',cfg.date);if(d)cfg.date=d;localStorage.setItem('bdCfg',JSON.stringify(cfg));document.getElementById('herName').textContent=cfg.name;loveTick();}
function goStep(n){for(var i=1;i<=4;i++)document.getElementById('s'+i).classList.add('hidden');document.getElementById('s'+n).classList.remove('hidden');window.scrollTo(0,0);if(n===3)countdown();if(n===4)party();}
function openEnv(){document.getElementById('env').classList.add('open');burst(innerWidth/2,innerHeight/2);setTimeout(function(){document.getElementById('envBtn').classList.remove('hidden');},1200);}
function countdown(){var el=document.getElementById('cdn'),v=3;el.textContent=v;var t=setInterval(function(){v--;if(v<=0){clearInterval(t);goStep(4);}else{el.textContent=v;}},1000);}
function blow(){document.getElementById('candle').style.filter='grayscale(1)';document.getElementById('candle').style.opacity='.4';document.getElementById('blowBtn').textContent='Ước đi em! Điều ước sẽ thành thật!';bigBoom();}
var msg1='Gửi ';
var msg2='! Hôm nay là ngày đặc biệt nhất - ngày em đến với thế giới này. Cảm ơn em đã xuất hiện, đã cười, đã yêu và cho anh được yêu em. Tuổi mới, anh chúc em: xinh đẹp hơn mỗi ngày, tiền đầy ví, ước gì được nấy, và... yêu anh nhiều hơn hôm qua một chút thôi cũng được. Còn anh sẽ yêu em nhiều hơn hôm qua rất nhiều! Happy Birthday công chúa của anh! ';
function startType(){var b=document.getElementById('typebox');b.innerHTML='';var full=msg1+cfg.name+msg2;var i=0;var t=setInterval(function(){if(i>=full.length){clearInterval(t);return;}i++;b.innerHTML=full.slice(0,i)+'<span style="display:inline-block;width:3px;height:1.1em;background:#ff4d8d">|</span>';},28);}
function loveTick(){var st=new Date(cfg.date||'2024-02-14');var d=Math.max(0,Math.floor((new Date()-st)/86400000));document.getElementById('love').innerHTML='<div><span>'+d+'</span><br>ngày</div><div><span>'+(d*24).toLocaleString()+'</span><br>giờ</div><div><span>vô hạn</span><br>yêu thương</div>';}
setInterval(loveTick,60000);loveTick();
function runNo(){var b=document.getElementById('noBtn');b.style.position='fixed';b.style.left=(Math.random()*80)+'vw';b.style.top=(Math.random()*80)+'vh';}
function yesLove(){var m=document.getElementById('md');m.classList.remove('hidden');bigBoom();}
function closeMd(){document.getElementById('md').classList.add('hidden');bigBoom();}

var sc=document.getElementById('stars'),sx=sc.getContext('2d'),stars=[];
function rs(){sc.width=innerWidth;sc.height=innerHeight;}
rs();addEventListener('resize',rs);
for(var k=0;k<150;k++)stars.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight});
(function loopS(){sx.clearRect(0,0,sc.width,sc.height);for(var i=0;i<stars.length;i++){var o=stars[i];o.y+=.5;if(o.y>innerHeight)o.y=0;sx.beginPath();sx.arc(o.x,o.y,1.4,0,7);sx.fillStyle='#fff';sx.fill();}requestAnimationFrame(loopS);})();
var fc=document.getElementById('fw'),fx=fc.getContext('2d'),ps=[];
function rf(){fc.width=innerWidth;fc.height=innerHeight;}
rf();addEventListener('resize',rf);
function burst(x,y){var c=['#ff4d8d','#ffd166','#a855f7','#7dd3fc'];for(var i=0;i<70;i++){var a=Math.random()*6.28,v=Math.random()*6+2;ps.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,c:c[i%4]});}}
(function loopF(){fx.clearRect(0,0,fc.width,fc.height);ps=ps.filter(function(p){return p.l>0;});for(var i=0;i<ps.length;i++){var p=ps[i];p.x+=p.vx;p.y+=p.vy;p.vy+=.06;p.l-=.012;fx.globalAlpha=p.l;fx.fillStyle=p.c;fx.beginPath();fx.arc(p.x,p.y,3,0,7);fx.fill();}fx.globalAlpha=1;requestAnimationFrame(loopF);})();
setInterval(function(){if(!document.getElementById('s4').classList.contains('hidden'))burst(Math.random()*innerWidth,Math.random()*innerHeight*.6);},2200);
function bigBoom(){for(var j=0;j<5;j++){setTimeout(function(){burst(Math.random()*innerWidth,Math.random()*innerHeight*.7);},j*300);}balloons();}
function party(){bigBoom();startType();}
function balloons(){for(var i=0;i<14;i++){var d=document.createElement('div');d.textContent='🎈';d.className='bl';d.style.left=(Math.random()*95)+'vw';d.style.fontSize='44px';d.style.animationDuration='6s';document.body.appendChild(d);}}
var AC=null,mOn=false;
function tgMusic(){var a=document.getElementById('au');if(a.paused){a.play().catch(function(){melody();});document.getElementById('musicB').textContent='Nhạc: Bật';}else{a.pause();document.getElementById('musicB').textContent='Nhạc: Tắt';mOn=false;}}
function melody(){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();mOn=true;var n=[261.6,261.6,293.7,329.6,329.6,293.7,261.6,392];var i=0;function pl(){if(!mOn)return;var o=AC.createOscillator(),g=AC.createGain();o.connect(g);g.connect(AC.destination);o.frequency.value=n[i%n.length];g.gain.setValueAtTime(.2,AC.currentTime);o.start();o.stop(AC.currentTime+.4);i++;setTimeout(pl,420);}pl();}catch(e){}}
