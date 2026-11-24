/* ThaiFlex — บัญชีผู้ใช้ รหัสผ่าน สำรอง/นำเข้า */
$('hn').textContent=ME?ME.n:'';$('pn').textContent=ME?ME.n+' (@'+U+')':'';
let am='in';
$('au').classList.toggle('hid',!!ME);
$('aS').onclick=()=>{am=am==='in'?'up':'in';$('aN').classList.toggle('hid',am==='in');$('aG').textContent=am==='in'?'เข้าสู่ระบบ':'สมัครบัญชี';$('aS').textContent=am==='in'?'ยังไม่มีบัญชี? สมัครเลย':'มีบัญชีแล้ว? เข้าสู่ระบบ';$('aE').textContent=''};
function sha256(m){const b=unescape(encodeURIComponent(m)),K=[],Hh=[];let n=0;
 for(let p=2;n<64;p++){let q=1;for(let i=2;i*i<=p;i++)if(p%i===0){q=0;break}if(q){K[n]=(Math.cbrt(p)%1*4294967296)|0;if(n<8)Hh[n]=(Math.sqrt(p)%1*4294967296)|0;n++}}
 const w=[],l=b.length;for(let i=0;i<l;i++)w[i>>2]|=b.charCodeAt(i)<<(24-(i%4)*8);
 w[l>>2]|=128<<(24-(l%4)*8);const N=(((l+8)>>6)+1)*16;for(let i=0;i<N;i++)w[i]=w[i]|0;w[N-1]=l*8;
 const R=(x,c)=>(x>>>c)|(x<<(32-c));
 for(let o=0;o<N;o+=16){const x=w.slice(o,o+16);for(let i=16;i<64;i++){const a=x[i-15],c=x[i-2];x[i]=(x[i-16]+(R(a,7)^R(a,18)^(a>>>3))+x[i-7]+(R(c,17)^R(c,19)^(c>>>10)))|0}
  let [a,c,d,e,f,g,h,j]=Hh;for(let i=0;i<64;i++){const t1=(j+(R(f,6)^R(f,11)^R(f,25))+((f&g)^(~f&h))+K[i]+x[i])|0,t2=((R(a,2)^R(a,13)^R(a,22))+((a&c)^(a&d)^(c&d)))|0;j=h;h=g;g=f;f=(e+t1)|0;e=d;d=c;c=a;a=(t1+t2)|0}
  Hh[0]=(Hh[0]+a)|0;Hh[1]=(Hh[1]+c)|0;Hh[2]=(Hh[2]+d)|0;Hh[3]=(Hh[3]+e)|0;Hh[4]=(Hh[4]+f)|0;Hh[5]=(Hh[5]+g)|0;Hh[6]=(Hh[6]+h)|0;Hh[7]=(Hh[7]+j)|0}
 return Hh.map(v=>(v>>>0).toString(16).padStart(8,'0')).join('')}
const H=async p=>sha256('fd|'+p),legacy=p=>{try{return btoa(unescape(encodeURIComponent(p)))}catch(e){return''}};
const pwOk=async(o,p)=>{const h=await H(p);if(o.h===h)return true;if(o.h===legacy(p)){o.h=h;return 2}return false};
const AW=a=>{const s=JSON.stringify(a);try{localStorage.setItem('fd_acc',s);localStorage.setItem('fd_acc_bak',s)}catch(e){}};
$('aG').onclick=async()=>{const u=$('aU').value.trim().toLowerCase(),p=$('aP').value,a=AC(),e=$('aE');
 if(!/^[a-z0-9_.]{3,}$/.test(u)||p.length<4){e.textContent='ชื่อผู้ใช้ 3 ตัวขึ้นไป (อังกฤษ/ตัวเลข) รหัสผ่าน 4 ตัวขึ้นไป';return}
 if(am==='up'){if(a[u]){e.textContent='ชื่อผู้ใช้นี้ถูกใช้แล้ว ลองกด "เข้าสู่ระบบ"';return}a[u]={n:$('aN').value.trim()||u,h:await H(p)};AW(a)}
 else{if(!a[u]){e.textContent='ไม่พบชื่อผู้ใช้นี้ในเครื่องนี้ (ข้อมูลเก็บในเครื่อง) กด "สมัครเลย" เพื่อสร้างใหม่';return}
  const ok=await pwOk(a[u],p);if(!ok){e.textContent='รหัสผ่านไม่ถูกต้อง';return}if(ok===2)AW(a)}
 try{localStorage.setItem('fd_cur',u)}catch(x){}location.reload()};
$('lo').onclick=()=>{localStorage.removeItem('fd_cur');location.reload()};
$('ex').onclick=()=>{const o={};['fd_cust','fd_log','fd_tg'].forEach(k=>o[k]=st(k));const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(o)],{type:'application/json'}));a.download='flexdiet-'+U+'-'+today()+'.json';a.click()};
$('im').onclick=()=>$('imf').click();
$('imf').onchange=async e=>{try{const o=JSON.parse(await e.target.files[0].text());['fd_cust','fd_log','fd_tg'].forEach(k=>{if(o[k])st(k,o[k])});location.reload()}catch(x){alert('ไฟล์ไม่ถูกต้อง')}};
