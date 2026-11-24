/* ThaiFlex — โปรไฟล์: เมื่อเปิดแท็บโปรไฟล์ แถบตัวละครเป็นส่วนบนแยก เนื้อหาเลื่อนอยู่ใต้แถบ */
(function(){
const p3=document.getElementById('p3'),apv=document.querySelector('.apv'),root=document.documentElement;
if(!p3||!apv)return;
function sync(){
  const on=!p3.classList.contains('hid');
  document.body.classList.toggle('prof',on);
  if(on&&apv.offsetHeight)root.style.setProperty('--apvh',apv.offsetHeight+'px');
}
new MutationObserver(sync).observe(p3,{attributes:true,attributeFilter:['class']});
if(window.ResizeObserver)new ResizeObserver(sync).observe(apv);
window.addEventListener('resize',sync);
sync();
})();
