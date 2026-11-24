/* ThaiFlex — ตัวประกอบอวาตาร์ AVC */
function AVC(c,vb,th){
 c=Object.assign({},AVDEF,c||{});const u='a'+(++AVU)+'_',k=AVD.sk[c.sk],kd=SH(k,-.16),hcol=AVD.hc[c.hc],hd=SH(hcol,-.26),hl=SH(hcol,.3),ic=AVD.ic[c.ic],tc=AVD.tc[c.tc],t2=SH(tc,-.2),tl=SH(tc,.32),bg=AVD.bg[c.bg],hat=c.ht,hcl=AVD.tc[c.hl],hcl2=SH(hcl,-.22);
 const rx=[12,11.2,10.4,12.6][c.fs],ry=[13.2,14,15,12.8][c.fs],ex=rx+.7,full=HATFULL.includes(hat);
 let hs=c.hs;if(full&&[3,6,7,8,9,10,21,24,25].includes(hs))hs=1;if(full&&hs===23)hs=15;if(hat>0&&hat!==6&&hat!==7&&hat!==8&&hat!==10&&hs===0)hs=0;
 const [hb,hf]=HAIR[hs](hcol,hd,hl);
 const t=TOP[c.ts](tc,t2,tl),CREW='M7 64Q9 46 25 44.5Q32 49.5 39 44.5Q55 46 57 64z',VNK='M7 64Q9 46 25 44.5L32 55 39 44.5Q55 46 57 64z',g=t.g==='CREW'?CREW:t.g==='VNK'?VNK:t.g;
 const ptn=c.tp?`<pattern id="${u}p" width="${c.tp===3?8:6}" height="${c.tp===3?8:6}" patternUnits="userSpaceOnUse">${c.tp===1?'<rect width="6" height="2.4" fill="#fff" opacity=".4"/>':c.tp===2?'<circle cx="3" cy="3" r="1.3" fill="#fff" opacity=".5"/>':c.tp===3?'<rect width="8" height="2" fill="#000" opacity=".18"/><rect width="2" height="8" fill="#000" opacity=".18"/>':'<g fill="#fff" opacity=".6"><circle cx="2" cy="2" r="1"/><circle cx="4" cy="2" r="1"/><circle cx="3" cy="3.6" r="1"/><circle cx="3" cy="2.6" r=".5" fill="#f8c630"/></g>'}</pattern>`:'';
 let o=`<svg viewBox="${vb||'0 0 64 64'}" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="${u}c"><circle cx="32" cy="32" r="32"/></clipPath><linearGradient id="${u}g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${tl}" stop-opacity=".5"/><stop offset=".4" stop-color="${tc}" stop-opacity="0"/><stop offset="1" stop-color="${t2}" stop-opacity=".55"/></linearGradient><radialGradient id="${u}s" cx=".4" cy=".3" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#000" stop-opacity=".1"/></radialGradient>${ptn}</defs>`;
 o+=`<circle cx="32" cy="32" r="32" fill="${bg}"/><g clip-path="url(#${u}c)">${BGP[c.bp](bg)}`;
 o+=hb+avP('M9 64Q10 46 32 44Q54 46 55 64z',k)+(t.pre||'')+avP('M27 38h10v9q-5 4-10 0z',k)+avP('M27 38h10v4.4q-5 3.4-10 0z','#3a1e0a',' opacity=".18"');
 o+=avP(g,t.fillOv||tc)+(c.tp?avP(g,`url(#${u}p)`):'')+avP(g,`url(#${u}g)`)+(t.post||'');
 if(c.nk===1)o+=avS('M25.6 44.8Q32 53 38.4 44.8','#e8c35a',.9);
 if(c.nk===2)o+=[0,1,2,3,4,5,6,7,8].map(i=>{const a=i/8,x=25.6+a*12.8,y=44.8+Math.sin(a*Math.PI)*7;return`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.15" fill="#fbf7ee" stroke="#d8d2c4" stroke-width=".3"/>`}).join('');
 if(c.nk===3)o+=avS('M25.6 44.8Q32 53 38.4 44.8','#e8c35a',.8)+'<path d="M32 51.4l1.6 1.8-1.6 2.4-1.6-2.4z" fill="#e0475f"/>';
 if(c.nk===4)o+=avS('M27 41.4Q32 44.8 37 41.4','#2a2a2e',1.7);
 if(c.nk===5)o+=[0,1,2,3,4,5,6,7,8,9].map(i=>{const a=i/9,x=24.4+a*15.2,y=44.4+Math.sin(a*Math.PI)*9.6;return`<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})">${i%2?'<ellipse rx="1.7" ry="1.1" fill="#6fae52"/>':[0,72,144,216,288].map(r=>`<ellipse cy="-1" rx=".8" ry="1.3" fill="#fff" transform="rotate(${r})"/>`).join('')+'<circle r=".5" fill="#f6d54a"/>'}</g>`}).join('');
 if(c.po===1)o+=`<path d="M45 54Q51 52 52 46" stroke="${tc}" stroke-width="6.4" stroke-linecap="round" fill="none"/><g transform="translate(52 43) rotate(-12)" fill="${k}"><ellipse rx="4.2" ry="4.8"/>${[-3,-1,1,3].map(x=>`<ellipse cx="${x*1.15}" cy="-5.6" rx="1.1" ry="2.6"/>`).join('')}<ellipse cx="-4.6" cy="0" rx="1.2" ry="2.6" transform="rotate(-35 -4.6 0)"/></g>`;
 if(c.po===2)o+=`<path d="M45 56Q51 55 51.6 50" stroke="${tc}" stroke-width="6.4" stroke-linecap="round" fill="none"/><g fill="${k}"><rect x="47" y="45.4" width="9" height="7.6" rx="3.4"/><path d="M48.6 46Q47.4 39.6 50.6 39.4Q53 40.2 52 46z"/></g>${avS('M48.6 49h6.6M48.6 51.2h6.6',kd,.5)}`;
 if(c.po===3)o+=`<path d="M45 56Q51 55 51.6 50" stroke="${tc}" stroke-width="6.4" stroke-linecap="round" fill="none"/><g fill="${k}"><ellipse cx="51.6" cy="49.6" rx="4.2" ry="4.4"/></g>${avS('M50 47L47.6 40M53.4 47.2L55 40.4',k,2.2)}`;
 o+=`<ellipse cx="${32-ex}" cy="29.4" rx="2.2" ry="3.2" fill="${k}"/><ellipse cx="${32+ex}" cy="29.4" rx="2.2" ry="3.2" fill="${k}"/><ellipse cx="${32-ex}" cy="29.6" rx="1" ry="1.7" fill="${kd}" opacity=".5"/><ellipse cx="${32+ex}" cy="29.6" rx="1" ry="1.7" fill="${kd}" opacity=".5"/>`;
 const E=[32-ex-.1,32+ex+.1];
 if(c.er===1)E.forEach(x=>o+=`<circle cx="${x}" cy="32.6" r="1" fill="#e8c35a"/>`);
 if(c.er===2)E.forEach(x=>o+=`<circle cx="${x}" cy="35" r="2.4" stroke="#e8c35a" stroke-width=".8" fill="none"/>`);
 if(c.er===3)E.forEach(x=>o+=avS(`M${x} 32.6V35.4`,'#e8c35a',.6)+`<circle cx="${x}" cy="36.4" r="1.3" fill="#e0475f"/>`);
 if(c.er===4)E.forEach(x=>o+=`<circle cx="${x}" cy="33" r="1.5" fill="#fbf7ee" stroke="#d8d2c4" stroke-width=".4"/>`);
 if(c.er===5)E.forEach(x=>o+=`<circle cx="${x}" cy="32" r=".9" fill="#e8c35a"/><circle cx="${x}" cy="34.4" r=".9" fill="#bde5ff"/>`);
 o+=`<ellipse cx="32" cy="28" rx="${rx}" ry="${ry}" fill="${k}"/><ellipse cx="32" cy="28" rx="${rx}" ry="${ry}" fill="url(#${u}s)"/><ellipse cx="29" cy="19.4" rx="5.4" ry="2.4" fill="#fff" opacity=".13"/>`;
 o+=avP(`M${32-rx+1.4} 36.4Q32 ${28+ry+3} ${32+rx-1.4} 36.4Q${32+rx-3} ${28+ry-.4} 32 ${28+ry}Q${32-rx+3} ${28+ry-.4} ${32-rx+1.4} 36.4z`,kd,' opacity=".18"');
 o+=`<ellipse cx="25" cy="33" rx="3" ry="2" fill="#f0766a" opacity=".28"/><ellipse cx="39" cy="33" rx="3" ry="2" fill="#f0766a" opacity=".28"/>`+EXTRA[c.ex](k,kd);
 o+=NOSE[c.no](k,kd)+EYES[c.ey](k,ic);
 const bcol=hcol==='#efe3c0'||hcol==='#e9e9e6'?'#b8ad90':hcol==='#a9a9a6'?'#8e8e88':hd;
 o+=BROW[c.eb](bcol)+FHAIR[c.fh](hd)+MOUTH[c.mo]()+GLASS[c.gl]();
 o+=hf;
 if(hat>0)o+=HATS[hat](hcl,hcl2);
 return o+'</g></svg>'}
