/* ThaiFlex — คีย์บอร์ด iOS: หน้า login/สมัครใช้ขนาดจอที่มองเห็นจริง (visualViewport) และเลื่อนช่องที่แตะให้อยู่กลางจอ */
(function(){
const vv=window.visualViewport,root=document.documentElement;
function fit(){
  if(!vv||!vv.height)return;
  const kb=window.innerHeight-vv.height>120;
  root.style.setProperty('--vvh',vv.height+'px');
  root.style.setProperty('--vvt',vv.offsetTop+'px');
  document.body.classList.toggle('kb',kb);
}
if(vv){vv.addEventListener('resize',fit);vv.addEventListener('scroll',fit);fit();}
document.addEventListener('focusin',function(e){
  if(!/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName))return;
  setTimeout(function(){try{e.target.scrollIntoView({block:'center',behavior:'smooth'})}catch(_){}},320);
});
})();
