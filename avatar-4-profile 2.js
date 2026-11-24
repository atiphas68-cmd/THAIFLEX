/* ThaiFlex — ธีม หน้าแรก โปรไฟล์ BMI */
const AV=i=>AVC(typeof i==='object'?i:AVP[i||0]);
let cur=+localStorage.getItem('fd_theme')||0,rf=-1;if(!TL[cur])cur=0;
function setTh(i){cur=i;const t=TL[i],h=t.h,r=document.documentElement.style,v=(k,x)=>r.setProperty(k,x);
const hh=Math.round(85+(h%60)),sk=Math.round(190+(h%36)),ac=Math.round(18+(h%30)),P=(a,s,l)=>`hsl(${a},${s}%,${l}%)`;v('--sky',P(Math.min(sk,212),80,58));v('--bg',P(hh,40,96));v('--card','#fff');v('--tx',P(hh,35,14));v('--mut',P(hh,12,42));v('--pri',P(hh,50,26));v('--acc',P(ac,80,56));v('--ln',P(hh,30,88));v('--soft',P(hh,45,92));v('--h1',P(sk,70,86));v('--h2',P(hh,45,60));
localStorage.setItem('fd_theme',i);$('thn').textContent='ธีมตอนนี้: '+t.n+' · '+t.p;$('spS').innerHTML=S(h,t.m,1,t.n);$('hhS').innerHTML=S(h,t.m,1,t.n);$('hpn').textContent=t.n;$('auS').innerHTML=S(h,t.m,1,t.n);$('afS').innerHTML=S(h,t.m,1,t.n);homeR()}
function homeR(){const q=$('hq').value.trim();$('hc').innerHTML=['ทั้งหมด',...RG].map((n,i)=>`<button class="chip${i-1===rf?' a':''}" data-r="${i-1}" style="flex:none">${n==='ทั้งหมด'?n:'ภาค'+n}</button>`).join('');
 $('hl').innerHTML=RG.map((g,ri)=>{if(rf>=0&&rf!==ri)return'';const L=TL.map((t,i)=>({...t,i})).filter(t=>t.r===ri&&(!q||(t.n+t.p).includes(q)));if(!L.length)return'';
 return `<div class="rh">ภาค${g}</div><div class="pg">`+L.map(t=>`<div class="pc" style="--soft:hsl(${t.h},55%,93%)"><div class="ar"><svg viewBox="0 0 200 170">${S(t.h,t.m,0,t.n)}</svg></div><b>${t.n}</b><span class="sm"><svg class="pn" viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg> ${t.p}</span><button class="ob" data-i="${t.i}">${t.i===cur?'✓ ใช้อยู่':'ใช้ธีมนี้'}</button></div>`).join('')+'</div>'}).join('')}
$('hc').onclick=e=>{const b=e.target.closest('[data-r]');if(b){rf=+b.dataset.r;homeR()}};
$('hl').onclick=e=>{const b=e.target.closest('[data-i]');if(b)setTh(+b.dataset.i)};$('hq').oninput=homeR;
$('thg').onclick=()=>$('t4').click();avRefresh();$('av').onclick=()=>$('t3').click();
document.documentElement.dataset.theme='light';setTh(cur);
const sA=f=>{const a=AC();if(!a[U])return;f(a[U]);AW(a);PF=a[U].pf||{}};
function bmi(){const h=+$('pfh').value/100,w=+$('pfw').value;$('pfb').textContent=h&&w?'BMI '+(w/h/h).toFixed(1)+' (ค่าอ้างอิงทั่วไป ไม่ใช่คำแนะนำทางการแพทย์)':''}
const AG=[
{n:'ร่างกาย',g:[{k:'sk',l:'สีผิว',c:1},{k:'fs',l:'รูปหน้า',vb:'8 2 48 48'},{k:'ex',l:'ลายบนหน้า / ทานาคา',vb:'14 12 36 36'},{k:'po',l:'ท่าทาง',vb:'0 14 64 50'}]},
{n:'ผม',g:[{k:'hs',l:'ทรงผม',vb:'6 0 52 52'},{k:'hc',l:'สีผม',c:1}]},
{n:'ใบหน้า',g:[{k:'ey',l:'ทรงตา',vb:'14 14 36 30'},{k:'ic',l:'สีตา',c:1},{k:'eb',l:'คิ้ว',vb:'14 14 36 30'},{k:'no',l:'จมูก',vb:'18 20 28 26'},{k:'mo',l:'ปาก',vb:'16 22 32 26'},{k:'fh',l:'หนวดเครา',vb:'12 14 40 36'}]},
{n:'เสื้อผ้า',g:[{k:'ts',l:'ชุด',vb:'6 26 52 38'},{k:'tc',l:'สีชุด',c:1},{k:'tp',l:'ลายผ้า',vb:'6 38 52 26'}]},
{n:'ของแต่งตัว',g:[{k:'ht',l:'หมวก / เครื่องประดับผม',vb:'8 0 48 44'},{k:'hl',l:'สีหมวก',c:1,pal:'tc'},{k:'gl',l:'แว่นตา',vb:'14 14 36 30'},{k:'er',l:'ต่างหู',vb:'10 20 44 34'},{k:'nk',l:'สร้อย / พวงมาลัย',vb:'14 30 36 30'}]},
{n:'พื้นหลัง',g:[{k:'bg',l:'สีพื้นหลัง',c:1},{k:'bp',l:'ลายพื้นหลัง',vb:'0 0 64 64'}]}];
const AVTOT=Object.values(AVN).reduce((a,b)=>a+b,0)+Object.values(AVD).reduce((a,b)=>a+b.length,0);
let avSec=0;
function avCfg(){return Object.assign({},AVDEF,PF.ava||AVP[PF.av||0])}
function avRand(){const r=n=>Math.random()*n|0,c={};for(const k in AVN)c[k]=r(AVN[k]);c.sk=r(12);c.hc=r(16);c.ic=r(8);c.tc=r(16);c.hl=r(16);c.bg=r(18);
 [['ht',.6],['gl',.6],['fh',.65],['er',.5],['nk',.55],['ex',.5],['po',.6],['tp',.55],['bp',.4]].forEach(a=>{if(Math.random()<a[1])c[a[0]]=0});return c}
function avRefresh(){const c=avCfg(),s=AVC(c);$('av').innerHTML=s;$('hav').innerHTML=s}
function avs(){const c=avCfg(),G=AG[avSec];
 $('ast').innerHTML=AG.map((g,i)=>`<button class="chip${i===avSec?' a':''}" data-sec="${i}">${i+1}. ${g.n} <small>${g.g.length}</small></button>`).join('');
 $('avpr').innerHTML=AVP.map((_,i)=>`<button class="pr" data-pr="${i}" aria-label="แบบสำเร็จรูป ${i+1}">${AVC(Object.assign({},AVDEF,AVP[i]))}</button>`).join('');
 $('ag').innerHTML=G.g.map(g=>`<div class="gl">${g.l}</div>`+(g.c?`<div class="aw">${AVD[g.pal||g.k].map((col,i)=>`<button data-k="${g.k}" data-v="${i}" class="${c[g.k]===i?'on':''}" style="background:${col}" aria-label="${g.l} ${i+1}"></button>`).join('')}</div>`:`<div class="ao">${[...Array(AVN[g.k])].map((_,i)=>`<button data-k="${g.k}" data-v="${i}" class="${c[g.k]===i?'on':''}" aria-label="${g.l} ${i+1}">${AVC(Object.assign({},c,{[g.k]:i}),g.vb)}</button>`).join('')}</div>`)).join('');
 $('ag').innerHTML+=`<button class="chip nx" data-sec="${(avSec+1)%AG.length}">ถัดไป: ${AG[(avSec+1)%AG.length].n} ›</button>`;$('avp').innerHTML=AVC(c);$('avn').textContent='ตัวเลือก '+AVTOT+' แบบ จับคู่ได้นับล้านลุค'}
$('avc').onclick=e=>{const t=e.target.closest('[data-sec],[data-pr],[data-k],#avr,#avz');if(!t)return;
 if(t.dataset.sec!==undefined){avSec=+t.dataset.sec;avs();return}
 let c=avCfg();
 if(t.dataset.pr!==undefined)c=Object.assign({},AVDEF,AVP[+t.dataset.pr]);
 else if(t.id==='avr')c=avRand();else if(t.id==='avz')c=Object.assign({},AVDEF,AVP[0]);
 else c[t.dataset.k]=+t.dataset.v;
 sA(o=>{o.pf=Object.assign(o.pf||{},{ava:c})});avRefresh();avs()};
if(ME){$('pfn').value=ME.n;$('pfa').value=PF.age||'';$('pfh').value=PF.ht||'';$('pfw').value=PF.wt||'';$('pfg').value=PF.goal||'';bmi();avs()}

$('pfh').oninput=$('pfw').oninput=bmi;
$('pfs').onclick=()=>{const n=$('pfn').value.trim();if(!n){$('pfm').textContent='กรอกชื่อที่ให้เรียกก่อน';return}
 sA(o=>{o.n=n;o.pf=Object.assign(o.pf||{},{age:$('pfa').value,ht:$('pfh').value,wt:$('pfw').value,goal:$('pfg').value})});
 $('hn').textContent=n;$('pfm').textContent='บันทึกแล้ว'};
$('cps').onclick=async()=>{const a=AC(),o=a[U],e=$('cpm');if(!o)return;if(!(await pwOk(o,$('cp0').value))){e.textContent='รหัสผ่านเดิมไม่ถูกต้อง';return}
 if($('cp1').value.length<4){e.textContent='รหัสผ่านใหม่อย่างน้อย 4 ตัว';return}o.h=await H($('cp1').value);AW(a);$('cp0').value=$('cp1').value='';e.textContent='เปลี่ยนรหัสผ่านแล้ว'};
