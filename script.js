var cfg={name:'Em Yêu',date:'2024-02-14'};
try{var s=JSON.parse(localStorage.getItem('bdCfg'));if(s)cfg=s;}catch(e){}
document.getElementById('herName').textContent=cfg.name;
function edit(){var n=prompt('Tên người yêu:',cfg.name);if(n)cfg.name=n;var d=prompt('Ngày bắt đầu yêu (YYYY-MM-DD):',cfg.date);if(d)cfg.date=d;localStorage.setItem('bdCfg',JSON.stringify(cfg));document.getElementById('herName').textContent=cfg.name;loveTick();}
function goStep(n){for(var i=1;i<=4;i++)document.getElementById('s'+i).classList.add('hidden');document.getElementById('s'+n).classList.remove('hidden');window.scrollTo(0,0);ensureAudio();if(n===3)countdown();if(n===4){party();tryPlayFile();}}
function openEnv(){document.getElementById('env').classList.add('open');burst(innerWidth/2,innerHeight/2);setTimeout(function(){document.getElementById('envBtn').classList.remove('hidden');},1200);}
function countdown(){var el=document.getElementById('cdn'),v=3;el.textContent=v;var t=setInterval(function(){v--;if(v<=0){clearInterval(t);goStep(4);}else{el.textContent=v;}},1000);}
function blow(){document.getElementById('candle').style.filter='grayscale(1)';document.getElementById('candle').style.opacity='.4';document.getElementById('blowBtn').textContent='Ước đi em! Điều ước sẽ thành thật!';bigBoom();}
var msg1='Gửi ';
var msg2='! Hôm nay là ngày đặc biệt nhất - ngày em đến với thế giới này. Cảm ơn em đã xuất hiện, đã cười, đã yêu và cho anh được yêu em. Tuổi mới, anh chúc em: xinh đẹp hơn mỗi ngày, tiền đầy ví, ước gì được nấy, và... yêu anh nhiều hơn hôm qua một chút thôi cũng được. Còn anh sẽ yêu em nhiều hơn hôm qua rất nhiều! Happy Birthday công chúa của anh! ';
function startType(){var b=document.getElementById('typebox');b.innerHTML='';var full=msg1+cfg.name+msg2;var i=0;var t=setInterval(function(){if(i>=full.length){clearInterval(t);return;}i++;b.innerHTML=full.slice(0,i)+'<span style="display:inline-block;width:3px;height:1.1em;background:#ff4d8d">|</span>';},28);}
function loveTick(){var st=new Date(cfg.date||'2024-02-14');var d=Math.max(0,Math.floor((new Date()-st)/86400000));document.getElementById('love').innerHTML='<div><span>'+d+'</span><br>ngày</div><div><span>'+(d*24).toLocaleString()+'</span><br>giờ</div><div><span>vô hạn</span><br>yêu thương</div>';}
setInterval(loveTick,60000);loveTick();
function runNo(){var b=document.getElementById('noBtn');b.style.position='fixed';b.style.left=(Math.random()*80)+'vw';b.style.top=(Math.random()*80)+'vh';}
function openGift2(){}
function openGift(){document.getElementById('giftBox').textContent='\uD83D\uDC9D';var g=document.getElementById('giftOpen');g.classList.remove('hidden');bigBoom();setTimeout(bigBoom,600);speakText('Chuc mung sinh nhat '+cfg.name+'. Mo qua di em!');}
function finale(){var ov=document.getElementById('finaleOv');ov.classList.remove('hidden');document.getElementById('finaleTxt').textContent='Anh Yêu '+cfg.name+'!';var words=['ANH','YÊU','EM','💜','HAPPY','BIRTHDAY','🎂','✨'];var i=0;var t=setInterval(function(){if(document.getElementById('finaleOv').classList.contains('hidden')){clearInterval(t);return;}document.getElementById('finaleTxt').textContent=words[i%words.length]==='EM'?('EM - '+cfg.name+'!'):words[i%words.length];burst(Math.random()*innerWidth,Math.random()*innerHeight);i++;},700);for(var k=0;k<40;k++){setTimeout(function(){var h=document.createElement('div');h.textContent=['💜','💖','❤️','✨','🌸'][Math.floor(Math.random()*5)];h.className='heart-fly';h.style.left=(Math.random()*100)+'vw';h.style.fontSize=(20+Math.random()*40)+'px';h.style.animationDuration=(3+Math.random()*3)+'s';document.body.appendChild(h);setTimeout(function(){h.remove();},6500);},k*200);}speakText('Anh yêu em! Chúc mừng sinh nhật '+cfg.name+'!');setTimeout(function(){ov.classList.add('hidden');},12000);ov.onclick=function(){ov.classList.add('hidden');};}
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
var AC=null,songOn=false,songTimer=null,customURL=null;
function ensureAudio(){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();}catch(e){}}
function note(f,t,d,type,vol){try{var o=AC.createOscillator(),g=AC.createGain();o.connect(g);g.connect(AC.destination);o.type=type||'triangle';o.frequency.value=f;var s=AC.currentTime+t;g.gain.setValueAtTime(0.0001,s);g.gain.exponentialRampToValueAtTime(vol||.3,s+.05);g.gain.exponentialRampToValueAtTime(.0001,s+d);o.start(s);o.stop(s+d+.05);}catch(e){}}
function bass(f,t,d){note(f,t,d,'sine',.22);note(f/2,t,d,'triangle',.12);}
function playHappyBirthday(){if(!AC)return;var M=[[392,.0,.45],[392,.5,.45],[440,1.0,.9],[392,2.0,.9],[523.25,3.0,.9],[494,4.0,1.4],[392,.0,.0],[392,6.0,.45],[392,6.5,.45],[440,7.0,.9],[392,8.0,.9],[587.33,9.0,.9],[523.25,10.0,1.4],[392,12.0,.45],[392,12.5,.45],[659.25,13.0,.9],[523.25,14.0,.9],[523.25,15.0,.9],[494,16.0,.9],[440,17.0,1.4],[466.16,19.0,.45],[466.16,19.5,.45],[494,20.0,.9],[523.25,21.0,.9],[523.25,22.0,.9],[587.33,23.0,.9],[523.25,24.0,1.8]];var B=[[131,0,1],[147,2,1],[196,4,2],[131,6,1],[147,8,1],[220,10,2],[131,12,1],[196,14,2],[175,16,1],[165,17,1],[147,19,1],[165,21,1],[196,23,2]];for(var i=0;i<M.length;i++){if(M[i][1]===0&&M[i][2]===0)continue;note(M[i][0],M[i][1],M[i][2],'triangle',.32);note(M[i][0]*2,M[i][1],M[i][2]*.6,'sine',.08);}for(var j=0;j<B.length;j++)bass(B[j][0],B[j][1],B[j][2]);}
function startSong(){ensureAudio();if(!AC)return;stopSong(false);songOn=true;playHappyBirthday();songTimer=setInterval(playHappyBirthday,26000);document.getElementById('musicB').textContent='🎵 Nhạc: Bật';var pb=document.getElementById('playBtn');if(pb)pb.textContent='⏸ Dừng nhạc';document.body.classList.add('playing');}
function stopSong(ui){songOn=false;if(songTimer){clearInterval(songTimer);songTimer=null;}if(ui!==false){document.getElementById('musicB').textContent='🎵 Nhạc: Tắt';var pb=document.getElementById('playBtn');if(pb)pb.textContent='▶ Play nhạc';document.body.classList.remove('playing');}}
function toggleSong(){ensureAudio();var cu=document.getElementById('customAu');if(customURL){if(cu.paused){cu.play();document.getElementById('musicB').textContent='🎵 Nhạc: Bật';document.body.classList.add('playing');}else{cu.pause();document.getElementById('musicB').textContent='🎵 Nhạc: Tắt';document.body.classList.remove('playing');}return;}if(songOn){stopSong(true);}else{var a=document.getElementById('au');try{a.volume=.8;var pr=a.play();if(pr&&pr.catch)pr.catch(function(){startSong();});setTimeout(function(){if(a.paused&&!songOn)startSong();else{document.getElementById('musicB').textContent='🎵 Nhạc: Bật';document.body.classList.add('playing');var pb=document.getElementById('playBtn');if(pb)pb.textContent='⏸ Dừng nhạc';}},900);}catch(e){startSong();}}}
function tryPlayFile(){var a=document.getElementById('au');try{a.volume=.7;a.play().catch(function(){});}catch(e){}}
function uploadSong(inp){var f=inp.files&&inp.files[0];if(!f)return;if(customURL)URL.revokeObjectURL(customURL);customURL=URL.createObjectURL(f);var cu=document.getElementById('customAu');cu.src=customURL;cu.play();stopSong(false);document.getElementById('musicB').textContent='🎵 Nhạc: Bật (bài 2 đứa)';document.body.classList.add('playing');alert('Đã phát bài nhạc của 2 đứa! 💜');}
function tgMusic(){toggleSong();}
function melody(){startSong();}
function speakText(t){try{if(!('speechSynthesis' in window))return;speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang='vi-VN';u.rate=.95;u.pitch=1.1;speechSynthesis.speak(u);}catch(e){}}
function speakLove(){var t='Chúc mừng sinh nhật '+cfg.name+'! Anh yêu em nhiều lắm! Tuổi mới thật xinh đẹp, thật hạnh phúc, và mãi mãi bên anh nhé!';speakText(t);}
