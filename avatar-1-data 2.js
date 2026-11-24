/* ThaiFlex — ข้อมูลอวาตาร์เริ่มต้น */
let PF=(ME&&ME.pf)||{};
const AVD={
sk:['#fbe3cf','#f6d5b8','#efc29b','#e5ae82','#d79a6a','#c88556','#b0703f','#955a31','#7a4526','#5f331c','#f4d0c6','#e8c6a0'],
hc:['#1d1612','#3b2a20','#5b3b26','#7a4a2a','#8f3f24','#c0602a','#e3b865','#efe3c0','#a9a9a6','#e9e9e6','#3d6fc9','#2faaa0','#e56fa4','#8a5acb','#c53a3a','#58a74a'],
ic:['#2b1b14','#6a3f22','#8a6a2a','#3f8f5a','#3f78c4','#7d8a96','#8a5acb','#c9892a'],
tc:['#e0954f','#6aa8d8','#7fb35a','#d6628a','#8a79c9','#f0c75a','#d9503f','#3fa89b','#33466e','#f7f6f0','#2f2f33','#9a9aa0','#efe2c1','#8e2f3f','#8a8f3a','#2e4a7d'],
bg:['#fde7c8','#d8ecf8','#e0f0d2','#fbd9e5','#e6e0f6','#fff1c4','#cdeee6','#ffd9c7','#d9e4ff','#eadcc4','#f6d3ee','#d3f0ff','#e9f5b8','#ffe0e0','#c9d6c0','#f0e6ff','#bfe3d0','#ffd48a']};
const AVN={fs:4,ex:7,po:4,hs:28,ey:12,eb:8,no:4,mo:10,fh:7,ts:22,tp:5,ht:12,gl:8,er:6,nk:6,bp:8};
const AVDEF={sk:3,fs:1,ex:0,po:0,hs:1,hc:1,ey:0,ic:0,eb:0,no:0,mo:0,fh:0,ts:0,tc:0,tp:0,ht:0,hl:0,gl:0,er:0,nk:0,bg:0,bp:0};
const AVP=[{sk:3,hs:1,hc:0,ey:0,mo:0,ts:0,tc:0,bg:0},{sk:2,hs:15,hc:0,ey:5,eb:2,mo:1,ts:1,tc:1,bg:1,po:1,er:1},{sk:4,hs:9,hc:0,ey:1,mo:2,ts:4,tc:2,bg:2,ex:1},{sk:6,hs:8,hc:0,ey:0,eb:1,mo:0,ts:5,tc:3,bg:3,er:2},{sk:3,hs:4,hc:8,ey:1,eb:0,mo:1,gl:1,ts:17,tc:4,bg:4,fh:1,po:1},{sk:3,hs:16,hc:11,ey:0,mo:0,ts:0,tc:5,bg:5,nk:5,ex:4},{sk:1,hs:21,hc:12,ey:4,mo:0,ts:3,tc:7,bg:6,ht:0,ex:2},{sk:5,hs:2,hc:1,ey:11,eb:4,mo:4,ts:10,tc:6,bg:7,fh:4,po:2}];
const SH=(c,a)=>{const n=parseInt(c.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const t=a<0?0:255,p=Math.abs(a);r=Math.round(r+(t-r)*p);g=Math.round(g+(t-g)*p);b=Math.round(b+(t-b)*p);return'#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)};
let AVU=0;
const avP=(d,f,x)=>`<path d="${d}" fill="${f}"${x||''}/>`,avS=(d,c,w,x)=>`<path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"${x||''}/>`;
const CAP='M20.5 27Q18.5 12 32 12Q46 12 43.5 27Q42 18 36 17Q28 21 22 20Q21 23 20.5 27z';
