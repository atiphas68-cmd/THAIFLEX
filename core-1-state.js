/* ThaiFlex — ตัวช่วย, state, คำนวณสารอาหาร */
const $=id=>document.getElementById(id);
const U=localStorage.getItem('fd_cur')||'';const st=(k,v)=>{try{k=U+':'+k;if(v===undefined){return JSON.parse(localStorage.getItem(k))}localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
let cust=st('fd_cust')||[];
let all=()=>D.concat(cust);
let items=[],base=null;
const find=n=>all().find(x=>x[0]===n);
const f1=v=>(Math.round(v*10)/10).toLocaleString('th-TH');
const f0=v=>Math.round(v).toLocaleString('th-TH');

function sum(arr){const t=[0,0,0,0,0];arr.forEach(i=>{const d=find(i.n);if(!d)return;for(let k=0;k<5;k++)t[k]+=d[2+k]*i.g/100});return t}
function sv(){return Math.max(0.1,+$('sv').value||1)}
function todayTot(){const td=today(),s=[0,0,0,0,0];log.filter(e=>e.d===td).forEach(e=>e.t.forEach((v,k)=>s[k]+=v));return s}
function rem2(t){const T=['tk','tp','tf','tc'].map(i=>+$(i).value||0),el=$('rm2');if(!T.some(v=>v>0)){el.textContent='';return}
 const s=todayTot(),N=['พลังงาน','โปรตีน','ไขมัน','คาร์บ'],U=['kcal','g','g','g'];
 el.innerHTML='<b>ถ้ากินเมนูนี้ วันนี้จะ</b> '+N.map((n,k)=>{if(!T[k])return '';const r=T[k]-s[k]-t[k],F=k?f1:f0;return `${n} ${r<0?'<span class="up">เกิน '+F(-r)+'</span>':'เหลือ '+F(r)} ${U[k]}`}).filter(Boolean).join(' · ')}
