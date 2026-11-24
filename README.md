# ThaiFlex — ชุดไฟล์ (31 ไฟล์ ไม่มีโฟลเดอร์ย่อย)

อัปโหลดทุกไฟล์ไว้ที่ root ของ repo → Settings → Pages → Deploy from a branch → main / (root)
ลำดับเลขในชื่อไฟล์คือลำดับโหลด ห้ามสลับ ถ้าขาดไฟล์ใดไฟล์หนึ่งแอปจะค้างที่หน้า intro

- `index.html` โครงหน้า
- `css-1` ถึง `css-8` สไตล์ (6 = โปรไฟล์แบบแยกส่วน, 7 = intro, 8 = คีย์บอร์ด iPhone)
- `data-*`, `core-*`, `art-*`, `avatar-*`, `app-*` โค้ดหลักของแอป
- `ui-1-profile.js` แถบตัวละครล็อกบน / `ui-2-intro.js` แตะข้าม intro / `ui-3-keyboard.js` แก้หน้าสมัครบน iPhone
- `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png` ติดตั้งเป็นแอป/ออฟไลน์

ถ้าเพิ่มหรือเปลี่ยนชื่อไฟล์ ต้องแก้ `index.html` (แท็ก link และตัวแปร L) กับ ASSETS ใน `sw.js`
แก้ไฟล์แล้วอยากให้ผู้ใช้เห็นทันที ให้เปลี่ยนเลข CACHE ใน `sw.js`

ไฟล์เก่าที่ไม่ใช้แล้ว (ลบจาก repo ได้): style.css, data.js, core.js, art.js, avatar.js, app.js
