# Kriton LtD.

Landing page ภาษาไทยด้วย Next.js App Router + TypeScript พร้อม deploy บน Vercel

## เปิดเว็บในเครื่อง

ใช้ Node.js 20.9 ขึ้นไป

```bash
npm ci
npm run dev
```

เปิด http://localhost:3000

## ตรวจสอบก่อน deploy

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy ไป Vercel

เลือก **Add New → Project** ใน Vercel แล้ว import repository `rathapongpumpo/qplay2`:

- Framework Preset: **Next.js**
- Root Directory: รากโปรเจกต์นี้
- Build Command: `npm run build`
- Install Command: `npm ci`
- Output Directory: ใช้ค่า default
- ไม่ต้องตั้ง API key หรือฐานข้อมูล

หรือใช้ Vercel CLI จากโฟลเดอร์โปรเจกต์:

```bash
npx vercel --prod
```

Production: https://kriton.vercel.app/

## แก้ข้อมูล

- ชื่อเว็บ เบอร์โทร LINE และรายชื่อเกม: `lib/content.ts`
- เนื้อหาหน้าเว็บ: `app/page.tsx`
- รูปแบบและ responsive: `app/globals.css`
- ภาพใช้งานจริง: `public/images/`
- แบบร่างและภาพหน้าเว็บจริง: `design/`

เบอร์โทร: **0982341377** · LINE OA: **@901mvpnu**

ปุ่ม LINE ใช้ `https://lin.ee/Y03gaLz` ซึ่งอ่านได้จาก QR URL ที่ให้มาและตรวจ redirect ไป `@901mvpnu` แล้ว ภาพ QR ที่แนบมาอ่านได้เป็น `https://lin.ee/SuC7xys` และพาไป OA เดียวกัน หน้าเว็บใช้ QR ทางการที่ดาวน์โหลดจาก URL ของผู้ใช้

หน้านี้รับการสอบถามและสั่งซื้อผ่าน LINE/โทรศัพท์ ไม่มีระบบชำระเงินหรือเติมเกมอัตโนมัติ รายการเกมและบัตรอ้างอิงภาพต้นแบบ ไม่มีการกำหนดราคา เวลาให้บริการ หรือส่วนลดที่ยังไม่ได้รับข้อมูล

ฟอนต์แบบ variable เก็บในโปรเจกต์ผ่าน Fontsource และ preload ด้วย `next/font/local` ใช้ 3 ไฟล์แทนการแยกแต่ละน้ำหนัก ภาพ hero ใช้ quality 75 และ fetch priority สูง ภาพ hero และโปรโมชันสร้างใหม่ด้วยเครื่องมือ Image Gen; artwork เกมใช้ภาพต้นแบบของผู้ใช้

`NEXT_PUBLIC_SITE_URL` เป็นตัวเลือกสำหรับ custom domain ถ้าไม่ตั้ง ระบบใช้ URL จาก Vercel สำหรับ social preview อัตโนมัติ

## Dependency check

Production dependencies ผ่าน `npm audit --omit=dev` (0 vulnerabilities) ณ วันที่ตรวจสอบ ส่วนชุด ESLint ของ Next.js มี advisory ใน dependency สำหรับ glob patterns (`braces`) ซึ่ง registry ยังไม่มีรุ่นแก้ไข ไม่ได้ใช้ใน runtime ของหน้าเว็บ
