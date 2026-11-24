/* ThaiFlex — วาดรายการ/ผลรวม */
function render(){
 const L=$('list');
 if(!items.length)L.innerHTML='<div class="sm">ยังไม่มีรายการ ค้นหาด้านล่างเพื่อเพิ่ม</div>';
 else L.innerHTML=items.map((i,x)=>{const d=find(i.n)||[i.n,'',0,0,0,0,0];return `<div class="ing"><div><div class="nm">${d[0]}${d[7]?' <span class="est">ค่าประมาณ</span>':''}</div><div class="sm">${f0(d[2]*i.g/100)} kcal · โซเดียม ${f0(d[6]*i.g/100)} mg · P ${f1(d[3]*i.g/100)} · F ${f1(d[4]*i.g/100)} · C ${f1(d[5]*i.g/100)} g</div></div><div class="g"><button data-a="m" data-x="${x}" aria-label="ลด">−</button><input type="number" min="0" step="any" value="${i.g}" data-x="${x}" aria-label="กรัม"><button data-a="p" data-x="${x}" aria-label="เพิ่ม">+</button><button class="x" data-a="d" data-x="${x}" aria-label="ลบ">×</button></div></div>`}).join('');
 const n=sv(),t=sum(items).map(v=>v/n),b=base?sum(base).map(v=>v/n):null;
 $('kc').textContent=f0(t[0]);$('vp').textContent=f1(t[1]);$('vf').textContent=f1(t[2]);$('vc').textContent=f1(t[3]);$('vn').textContent=f0(t[4]);
 $('pl').textContent=items.length?`(${f0(items.reduce((a,i)=>a+i.g,0)/n)} g/จาน)`:'';
 const dl=$('dk');dl.className='dl';dl.textContent='';
 if(b&&Math.abs(t[0]-b[0])>=1){const d=t[0]-b[0];dl.textContent=(d>0?'+':'')+f0(d)+' เทียบค่าเดิม';dl.className='dl '+(d>0?'up':'dn')}
 const e=[t[1]*4,t[2]*9,t[3]*4],es=e[0]+e[1]+e[2]||1;
 $('bar').innerHTML=`<div style="width:${e[0]/es*100}%;background:#3b82c4"></div><div style="width:${e[1]/es*100}%;background:#d9a21a"></div><div style="width:${e[2]/es*100}%;background:#6fbf6f"></div>`;
 $('sod').textContent=t[4]?`โซเดียม ≈ ${f0(t[4]/2000*100)}% ของ 2,000 mg/วัน (เกณฑ์อ้างอิง WHO)`:'';
 rem2(t);const est=items.filter(i=>(find(i.n)||[])[7]).length;
 $('ew').innerHTML=est?`<span class="est">มี ${est} รายการเป็นค่าประมาณ — ตรวจสอบกับฉลากสินค้า</span>`:'';
}
$('list').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const x=+b.dataset.x,a=b.dataset.a;
 if(a==='p')items[x].g+=5;else if(a==='m')items[x].g=Math.max(0,items[x].g-5);else if(a==='d')items.splice(x,1);render()});
$('list').addEventListener('input',e=>{if(e.target.tagName==='INPUT'){items[+e.target.dataset.x].g=Math.max(0,+e.target.value||0);const k=e.target.selectionStart;renderTotalsOnly()}});
function renderTotalsOnly(){const a=document.activeElement,x=a&&a.dataset?a.dataset.x:null;render();if(x!==null){const el=document.querySelector(`#list input[data-x="${x}"]`);if(el){el.focus()}}}
$('sv').oninput=render;
function setItems(a){items=a.map(([n,g])=>({n,g}));base=items.map(i=>({...i}))}
$('pre').innerHTML=P.map((p,i)=>`<button class="chip" data-i="${i}">${p[0]}</button>`).join('');
$('pre').onclick=e=>{const b=e.target.closest('button');if(!b)return;const p=P[+b.dataset.i];$('mn').value=p[0];setItems(p[1]);render()};
