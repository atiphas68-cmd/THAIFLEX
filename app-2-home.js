/* ThaiFlex — หน้าแรก ประวัติ เริ่มต้นแอป */
const mo=h=>{$('mc').innerHTML=h;$('md').classList.remove('hid')};$('mx').onclick=()=>$('md').classList.add('hid');
function eh(e){const T=e.t,s=e.sv||1,rows=(e.it||[]).map(i=>{const d=find(i.n);if(!d)return'';const k=i.g/100/s;return `<div class="l"><div>${d[0]}<div class="sm">${f0(i.g/s)} g</div></div><div class="sm" style="text-align:right">${f0(d[2]*k)} kcal · P ${f1(d[3]*k)} F ${f1(d[4]*k)} C ${f1(d[5]*k)} · Na ${f0(d[6]*k)} mg</div></div>`}).join('');
 return `<div style="margin-bottom:14px"><b>${e.n}</b><div class="grid"><div><span class="sm">แคล</span><b>${f0(T[0])}</b></div><div><span class="sm">โปรตีน</span><b>${f1(T[1])}</b></div><div><span class="sm">ไขมัน</span><b>${f1(T[2])}</b></div><div><span class="sm">คาร์บ</span><b>${f1(T[3])}</b></div></div><div class="sm" style="margin-top:6px">โซเดียม ${f0(T[4])} mg</div>${rows?'<div class="sm" style="margin-top:8px"><b>วัตถุดิบ (ต่อ 1 จาน)</b></div>'+rows:'<div class="sm">บันทึกนี้ไม่มีรายละเอียดวัตถุดิบ</div>'}</div>`}
$('hs').onclick=e=>{const r=e.target.closest('[data-d]');if(r)mo('<h2>'+r.dataset.d+'</h2>'+log.filter(x=>x.d===r.dataset.d).map(eh).join(''))};

const greet=()=>{const h=new Date().getHours();return h<12?'สวัสดีตอนเช้า':h<17?'สวัสดีตอนบ่าย':'สวัสดีตอนเย็น'};
function homeS(){const pf=PF||{},t=todayTot(),tk=+$('tk').value||0,tp=+$('tp').value||0,td=today(),L=log.filter(e=>e.d===td),nm=(AC()[U]||{}).n||'';
 $('hg').innerHTML=`<small>${greet()}, ${nm}</small><b>วันนี้กินอะไรดี?</b>`;
 $('hs3').innerHTML=[['น้ำหนัก',pf.wt?pf.wt+' kg':'-'],['ส่วนสูง',pf.ht?pf.ht+' cm':'-'],['อายุ',pf.age?pf.age+' ปี':'-']].map(([a,b])=>`<div><small>${a}</small><b>${b}</b></div>`).join('');
 $('hmp').innerHTML=[['พลังงาน',t[0],tk,'kcal'],['โปรตีน',t[1],tp,'g'],['ไขมัน',t[2],+$('tf').value||0,'g'],['คาร์โบไฮเดรต',t[3],+$('tc').value||0,'g'],['โซเดียม',t[4],2000,'mg']].map(([n,v,g,u])=>`<div><div class="sm">${n}</div><b>${f0(v)}</b><span class="sm"> / ${g||'-'} ${u}</span><div class="pb"><i style="width:${g?Math.min(100,v/g*100):0}%"></i></div></div>`).join('');
 $('hr').innerHTML=L.length?L.slice(-3).reverse().map(e=>`<div class="l" data-e="${log.indexOf(e)}" style="cursor:pointer;grid-template-columns:auto 1fr auto;gap:10px;align-items:center"><div class="rc">${ICN.calc}</div><div><b>${e.n}</b><div class="sm">P ${f0(e.t[1])} · F ${f0(e.t[2])} · C ${f0(e.t[3])} g</div></div><div><b>${f0(e.t[0])}</b> <span class="sm">kcal</span></div></div>`).join(''):'<div class="sm">ยังไม่มีบันทึกวันนี้ ไปที่แท็บ "คำนวณ" แล้วกด "บันทึกเข้ามื้อวันนี้"</div>'}
$('hr').onclick=e=>{const r=e.target.closest('[data-e]');if(r)mo(eh(log[+r.dataset.e]))};
$('hpl').onclick=()=>$('hq').scrollIntoView({behavior:'smooth'});
const sm=m=>{if(am!==m)$('aS').click();$('aw').classList.add('hid');$('af').classList.remove('hid')};
$('wi').onclick=()=>sm('in');$('wc').onclick=()=>sm('up');$('ab').onclick=()=>{$('af').classList.add('hid');$('aw').classList.remove('hid')};
$('tp0').style.display='none';document.querySelector('.sub').style.display='none';homeS();
setItems(P[0][1]);$('mn').value=P[0][0];render();
document.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>{const w=document.querySelector('.w');if(w)w.scrollTop=0}));
/* iOS: หลังปิดคีย์บอร์ด รีเซ็ตตำแหน่งหน้าจอ กันจอเลื่อนค้าง */
document.addEventListener('focusout',()=>setTimeout(()=>{if(!document.activeElement||!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))window.scrollTo(0,0)},60));
