/* ThaiFlex — บันทึกมื้อ และแท็บ */
// log
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
let log=st('fd_log')||[];
$('save').onclick=()=>{if(!items.length)return;const t=sum(items).map(v=>v/sv());
 log.push({d:today(),n:$('mn').value||'เมนู',t,sv:sv(),it:items.map(i=>({n:i.n,g:i.g}))});st('fd_log',log);$('save').textContent='✓ บันทึกแล้ว';setTimeout(()=>$('save').textContent='+ บันทึกเข้ามื้อวันนี้',1200)};
function renderLog(){
 const td=today(),L=log.map((e,i)=>({...e,i})).filter(e=>e.d===td);
 $('td').textContent=td;
 $('tl').innerHTML=L.length?L.map(e=>`<div class="l" data-v="${e.i}" style="cursor:pointer"><div>${e.n} ›<div class="sm">P ${f0(e.t[1])} · F ${f0(e.t[2])} · C ${f0(e.t[3])} g · แตะดูวัตถุดิบ</div></div><div>${f0(e.t[0])} kcal <button class="chip x" data-i="${e.i}">ลบ</button></div></div>`).join(''):'<div class="sm">ยังไม่มีบันทึกวันนี้</div>';
 const s=[0,0,0,0,0];L.forEach(e=>e.t.forEach((v,k)=>s[k]+=v));
 const tk=+$('tk').value||0,tp=+$('tp').value||0;
 const _x=`รวม <b>${f0(s[0])}</b> kcal${tk?` (เหลือ ${f0(tk-s[0])} จาก ${f0(tk)})`:''} · โปรตีน <b>${f0(s[1])}</b> g${tp?` (เหลือ ${f0(Math.max(0,tp-s[1]))})`:''}`;
 const tf=+$('tf').value||0,tcb=+$('tc').value||0;
 const RW=[['พลังงาน',s[0],tk,'kcal'],['โปรตีน',s[1],tp,'g'],['ไขมัน',s[2],tf,'g'],['คาร์โบไฮเดรต',s[3],tcb,'g']];
 $('ts').innerHTML=RW.map(([n,e,t,u])=>{const F=u==='kcal'?f0:f1;if(!t)return `<div class="l"><div>${n}</div><div>กินแล้ว ${F(e)} ${u}</div></div>`;const r=t-e,c=r<0?'var(--bad)':'var(--pri)';return `<div class="l"><div>${n} <span class="sm">${F(e)} / ${F(t)} ${u}</span><div class="bar" style="height:6px;margin-top:4px"><div style="width:${Math.min(100,e/t*100)}%;background:${c}"></div></div></div><div style="text-align:right"><b style="color:${c}">${r<0?'เกิน '+F(-r):'เหลือ '+F(r)}</b> <span class="sm">${u}</span></div></div>`}).join('');
 const by={};log.forEach(e=>{by[e.d]=by[e.d]||[0,0];by[e.d][0]+=e.t[0];by[e.d][1]+=e.t[1]});
 const ds=Object.keys(by).sort().reverse().slice(0,30);
 $('hs').innerHTML=ds.length?ds.map(d=>`<div class="l" data-d="${d}" style="cursor:pointer"><div>${d} ›</div><div>${f0(by[d][0])} kcal · P ${f0(by[d][1])} g</div></div>`).join(''):'<div class="sm">ยังไม่มีข้อมูล</div>';
}
$('tl').onclick=e=>{const b=e.target.closest('button');if(!b){const r=e.target.closest('[data-v]');if(r)mo(eh(log[+r.dataset.v]));return}log.splice(+b.dataset.i,1);st('fd_log',log);renderLog()};
['tk','tp','tf','tc'].forEach(i=>$(i).oninput=()=>{st('fd_tg',['tk','tp','tf','tc'].map(j=>$(j).value));renderLog();render()});
const tg=st('fd_tg');if(tg){['tk','tp','tf','tc'].forEach((i,k)=>{if(tg[k]!==undefined&&tg[k]!==null)$(i).value=tg[k]})}
// tabs
[0,1,2,3,4].forEach(i=>$('t'+i).onclick=()=>{[0,1,2,3,4].forEach(j=>{$('t'+j).classList.toggle('on',i===j);$('p'+j).classList.toggle('hid',i!==j)});if(i===1)renderLog();if(i===3)avs();$('tp0').style.display=i===4?'none':'';document.querySelector('.sub').style.display=i===4?'none':'';if(i===4)homeS();if(i===2)$('cnt').textContent=`${D.length} รายการ (+ ที่กำหนดเอง ${cust.length}) · ค่าประมาณ ${D.filter(d=>d[7]).length} รายการ`});
$('ai').onclick=async()=>{
 const m=$('mn').value.trim(),s=$('as');if(!m||m==='เมนูของฉัน'){s.textContent='พิมพ์ชื่อเมนูในช่องด้านบนก่อน';$('mn').focus();return}
 const b=$('ai');b.disabled=true;s.textContent='AI กำลังวิเคราะห์เมนู...';
 try{
  const sm=window.claude?await window.claude.use('sample'):null;
  if(!sm){s.textContent='โหมด AI ใช้ไม่ได้ในมุมมองนี้ ใช้ค้นหา/เพิ่มวัตถุดิบเองได้';return}
  const names=all().map(d=>d[0]).join(' | ');
  const r=await sm(`คุณเป็นนักกำหนดอาหารไทย แยกวัตถุดิบและเครื่องปรุงของเมนู "${m}" ต่อ 1 จานที่ทำกินที่บ้านโดยทั่วไป (รวมน้ำมัน น้ำตาล น้ำปลา ฯลฯ ที่ใช้จริง) ระบุน้ำหนักเป็นกรัม (ของเหลวเป็นมล.≈กรัม)\nถ้าวัตถุดิบตรงกับรายการนี้ ให้ใช้ชื่อตรงตัวเป๊ะ: ${names}\nถ้าไม่มีในรายการ ให้ตั้งชื่อไทยสั้นๆ และให้ค่าโภชนาการต่อ 100 กรัมที่ใกล้เคียง Thai Food Composition Database (INMU มหิดล) หรือ USDA มากที่สุด\nตอบเป็น JSON เท่านั้น ไม่มีข้อความอื่น: {"items":[{"name":"","g":0,"kcal":0,"p":0,"f":0,"c":0,"na":0}],"note":"หมายเหตุสั้นๆ ถ้าชื่อเมนูไม่ชัดเจน"} โดย kcal,p,f,c ต่อ 100g และ na เป็น mg ต่อ 100g`,{cache:false});
  const mt=r.text.match(/\{[\s\S]*\}/);if(!mt)throw new Error('อ่านผลลัพธ์ไม่ได้');
  const j=JSON.parse(mt[0]),out=[],added=[];
  (j.items||[]).forEach(o=>{let n=String(o.name||'').trim();const g=Math.max(0,Math.round(+o.g||0));if(!n||!g)return;
   if(!find(n)&&find(n+' (AI)'))n=n+' (AI)';
   if(!find(n)){const p=Math.max(0,+o.p||0),f=Math.max(0,+o.f||0),c=Math.max(0,+o.c||0),cal=4*p+9*f+4*c;let k=Math.max(0,+o.kcal||0);
    if(Math.abs(k-cal)>0.25*Math.max(cal,k))k=cal;
    n=n+' (AI)';cust.push([n,'other',Math.round(k),p,f,c,Math.max(0,Math.round(+o.na||0)),1]);added.push(n)}
   const ex=out.find(x=>x[0]===n);if(ex)ex[1]+=g;else out.push([n,g])});
  if(!out.length)throw new Error('ไม่พบวัตถุดิบ ลองระบุชื่อเมนูให้ชัดขึ้น');
  st('fd_cust',cust);setItems(out);render();
  s.textContent=`✓ ได้ ${out.length} รายการ (AI ประมาณค่าเอง ${added.length} รายการ) ปรับกรัมได้ทันที${j.note?' · '+j.note:''}`;
 }catch(e){s.textContent='ไม่สำเร็จ: '+((e&&e.message)||'ลองใหม่อีกครั้ง')}
 finally{b.disabled=false}
};
