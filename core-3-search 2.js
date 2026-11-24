/* ThaiFlex — ค้นหา ปรับสูตร วัตถุดิบเอง */
// search
$('q').oninput=()=>{const q=$('q').value.trim(),r=$('res');if(!q){r.style.display='none';return}
 const m=all().filter(d=>d[0].includes(q)).slice(0,30);
 r.innerHTML=m.length?m.map(d=>`<div data-n="${d[0]}">${d[0]} <span class="sm">${f0(d[2])} kcal/100g</span></div>`).join(''):'<div class="sm">ไม่พบ ใช้ "เพิ่มวัตถุดิบเอง"</div>';r.style.display='block'};
$('res').onclick=e=>{const d=e.target.closest('[data-n]');if(!d)return;const n=d.dataset.n,ex=items.find(i=>i.n===n);
 if(ex)ex.g+=10;else{items.push({n,g:10});if(base&&!base.find(i=>i.n===n))base.push({n,g:0})}
 $('q').value='';$('res').style.display='none';render()};
// adjust
document.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{items.forEach(i=>{const d=find(i.n);if(d&&d[1]===b.dataset.k)i.g=Math.round(i.g*(+b.dataset.f)*10)/10});render()});
$('rst').onclick=()=>{if(base){items=base.filter(i=>i.g>0).map(i=>({...i}));render()}};
$('clr').onclick=()=>{items=[];base=null;$('mn').value='เมนูของฉัน';render()};
// custom
$('cust').onclick=()=>$('cf').classList.toggle('hid');
$('csave').onclick=()=>{const n=$('cn').value.trim();if(!n||$('ck').value==='')return;
 cust.push([n+' (กำหนดเอง)','other',+$('ck').value||0,+$('cp').value||0,+$('cfa').value||0,+$('cc').value||0,+$('cs').value||0]);st('fd_cust',cust);
 ['cn','ck','cp','cfa','cc','cs'].forEach(i=>$(i).value='');$('cf').classList.add('hid');$('q').value=n;$('q').oninput()};
