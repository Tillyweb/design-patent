# 🎯 Blueprint: Design Patent Website v2 — Tilly

## KB Checkpoint Record
```json
{
  "kb_lookup": {
    "topics_searched": ["intellectual-property"],
    "kb_files_read": [
      "KB-IP-DESIGNPATENT-20260503",
      "KB-IP-DESIGNPATENT-BUSINESS-20260503",
      "KB-IP-DESIGNPATENT-DIP-20260503",
      "KB-IP-DESIGNPATENT-METAL-RETAINER-20260503",
      "KB-IP-DESIGNPATENT-PROCESS-FLOW-20260503"
    ],
    "kb_used": true,
    "notes": "รวมข้อมูลจาก 5 KB entries ทั้งหมด"
  }
}
```

---

## 📋 ภารกิจ

สร้าง Design Patent Website v2 ให้สวยงาม ทันสมัย และใช้ความรู้ใหม่จาก 5 KB entries

---

## 🎨 Design Vision

**Style:** Premium Professional + Tech/Dental aesthetic
**Color Palette:**
- Primary: Teal Mint (#0D9488)
- Secondary: Slate Gray (#475569)
- Accent: Gold/Amber (#F59E0B)
- Background: White (#FFFFFF) + Light Gray (#F8FAFC)
- Text: Dark Slate (#1E293B)

**Typography:**
- Headings: Inter / Sarabun (Thai)
- Body: Inter / Sarabun

**Layout:** Modern Card-based, clean whitespace, smooth animations

---

## 📱 Sections ที่ต้องมี

### 1. Hero Section (ใหม่)
- Full-width gradient background (Teal → Blue)
- **Headline:** " คู่มือสมบูรณ์: ยื่นขอ Design Patent ปี 2026"
- Sub-headline: ข้อมูลล่าสุดจากกรมทรัพย์สินทางปัญญา
- **CTA Button:** "เริ่มยื่นคำขอวันนี้" → Link to SSO
- **Stats Badge:** 10 ปีคุ้มครอง | 5 ขั้นตอน | Fast-Track พร้อม

### 2. Section: สิ่งที่คุ้มครอง (ใหม่)
- Visual cards แสดง 4 องค์ประกอบที่คุ้มครอง:
  1. รูปร่าง (Shape)
  2. สี (Color)
  3. ลวดลาย (Pattern)
  4. สัณฐาน (Form)
- Icon + Description

### 3. Section: เปรียบเทียบ IP Types (ปรับปรุง)
- Table comparing: Design Patent vs Patent สิ่งประดิษฐ์ vs Patent อื่น
- Visual icons สำหรับแต่ละประเภท

### 4. Section: Process Timeline v2 (ปรับปรุง)
**5 ขั้นตอนแบบ Interactive Timeline:**
| ขั้น | ชื่อ | รายละเอียด | ระยะเวลา |
|------|------|-----------|---------|
| 1 | ลงทะเบียน e-Filing | SSO.IPThailand.go.th | — |
| 2 | เตรียมเอกสาร | แบบฟอร์ม + ภาพแสดงแบบ | — |
| 3 | ยื่นคำขอ | ชำระค่าธรรมเนียม | — |
| 4 | ตรวจสอบเบื้องต้น | 5 เดือน + 90 วันแก้ไข | ≤5 เดือน |
| 5 | รอผล + ประกาศโฆษณา | 90 วัน + พิจารณา | 3-6 เดือน |

**Visual:** Horizontal timeline with icons, click to expand details

### 5. Section: เอกสาร Checklist v2 (ปรับปรุง)
**Interactive Checklist พร้อม localStorage:**
| # | เอกสาร | สถานะ | หมายเหตุ |
|---|--------|--------|----------|
| 1 | ภาพแสดงแบบผลิตภัณฑ์ (4+ มุม) | ⬜/✅ | ภาพถ่าย หรือ ภาพวาดลายเส้น |
| 2 | แบบฟอร์ม สป/สผ/001-ก | ⬜/✅ | ดาวน์โหลดจาก IP Thailand |
| 3 | คำอธิบาย Design | ⬜/✅ | ระบุขอบเขตการคุ้มครอง |
| 4 | หนังสือโอนสิทธิ (ถ้ามี) | ⬜/✅ | กรณีผู้ขอ ≠ ผู้ออกแบบ |
| 5 | บัตรประจำตัวประชาชน | ⬜/✅ | สำเนา 1 ฉบับ |
| 6 | หนังสือรับรองนิติบุคคล | ⬜/✅ | อายุไม่เกิน 6 เดือน |
| 7 | หนังสือมอบอำนาจ | ⬜/✅ | ติดอากรแสตมป์ 30 บ. |
| 8 | พร้อมชำระค่าธรรมเนียม | ⬜/✅ | สอบถาม 1368 |

**Feature:** Toggle checkbox, save to localStorage, progress bar

### 6. Section: Case Studies (ใหม่)
**3 กรณีศึกษาจาก KB:**
| กรณี | ผู้ขอ | ภาพแสดงแบบ | เอกสารเพิ่มเติม |
|-------|------|-----------|-----------------|
| 1 | นิติบุคคล (บริษัท) | ภาพถ่าย | สัญญาโอนสิทธิ, หนังสือรับรองนิติบุคคล |
| 2 | สถาบันการศึกษา | ภาพวาด 3D | หนังสือแต่งตั้งอธิการบดี |
| 3 | บุคคลธรรมดา | ภาพวาดลายเส้น | คำรับรองสิทธิ (ตนเอง) |

### 7. Section: Benefits (ปรับปรุง)
**6 Benefits พร้อม Icons:**
1. คุ้มครอง 10 ปี (ต่ออายุได้)
2. สิทธิ์ผูกขาดทั่วประเทศ
3. ป้องกันการลอกเลียน (มี § ลิขสิทธิ์)
4. เพิ่มมูลค่าธุรกิจ (เป็นสินทรัพย์)
5. Licensing ได้ (รายได้เพิ่ม)
6. แข่งขันได้เหนือกว่า

### 8. Section: Fast-Track Info (ใหม่)
**Highlight Box:**
- **Fast-Track:** 3-6 เดือน (vs ปกติ 6-12 เดือน)
- **ค่าธรรมเนียม:** สอบถาม 1368
- **เงื่อนไข:** อุตสาหกรรมเป้าหมาย

### 9. Section: Legal Notes (ใหม่)
**Important Warnings:**
- ⚠️ แบบต้องเป็น "สิ่งใหม่" (ไม่เคยเปิดเผย/ใช้มาก่อน)
- ⚠️ หากเอกสารไม่ถูกต้อง → แก้ไขภายใน 90 วัน
- ⚠️ ไม่คืนค่าธรรมเนียมที่ชำระแล้ว
- ⚠️ มีสิทธิอุทธรณ์ภายใน 60 วัน หากถูกยกคำขอ

### 10. Section: Post-Registration (ใหม่)
**3 Services:**
| บริการ | ค่าธรรมเนียม | ใช้เมื่อ |
|--------|-------------|---------|
| แก้ไขข้อมูล | 50 บาท | เปลี่ยนชื่อ/ที่อยู่ |
| โอนสิทธิ | ตามประกาศ | ขาย/โอนให้คนอื่น |
| อนุญาตให้ใช้สิทธิ | 250 บาท | License ให้คนอื่นใช้ |

### 11. Section: Contact (ปรับปรุง)
**Contact Cards:**
| ช่องทาง | รายละเอียด |
|---------|-----------|
| 📞 สายด่วน | 1368 |
| 📧 อีเมล | saraban@ipthailand.go.th |
| 📍 ที่อยู่ | 563 ถนนนนทบุรี บางกระสอ นนทบุรี 11000 |
| 🌐 เว็บไซต์ | www.ipthailand.go.th |
| 💻 e-Filing | SSO.IPThailand.go.th |
| 📱 โทรศัพท์ กองสิทธิบัตร | 02-547-4713 ต่อ 1406, 1417, 1418 |

### 12. Footer
- Logo + Copyright © 2026
- Links: นโยบายความเป็นส่วนตัว | ติดต่อเรา
- "จัดทำโดย Tilly AI System"

---

## 🛠️ Technical Requirements

### HTML Structure
- Semantic HTML5
- Responsive (Mobile-first)
- SEO meta tags

### CSS
- Tailwind CSS หรือ custom CSS
- CSS Animations (fade-in, slide-up)
- Dark/Light mode support (optional)

### JavaScript Features
1. **Interactive Timeline** — Click to expand steps
2. **Checklist with localStorage** — Save progress
3. **Smooth Scroll Navigation** — Sticky header
4. **Progress Bar** — แสดง % ความพร้อม

### Performance
- Lazy loading images
- Minified CSS/JS
- Fast load time (<3s)

---

## 📁 Output Structure

```
design-patent-site-v2/
├── index.html          # Main HTML (single file)
├── style.css           # Custom styles
├── script.js          # Interactive features
├── assets/
│   ├── hero-bg.svg     # Hero background pattern
│   ├── icons/         # SVG icons
│   └── images/         # Placeholder images
└── README.md          # Setup instructions
```

---

## ✅ Definition of Done

1. ✅ Hero section with gradient + CTA
2. ✅ Interactive timeline (5 steps)
3. ✅ Document checklist with localStorage
4. ✅ Case studies section
5. ✅ Benefits section with icons
6. ✅ Fast-Track info box
7. ✅ Legal warnings section
8. ✅ Post-registration services
9. ✅ Contact cards
10. ✅ Mobile responsive
11. ✅ Smooth animations
12. ✅ Push to GitHub repo

---

## 🔗 Repository
**URL:** https://github.com/Tillyweb/design-patent.git
**Branch:** main

## 📝 Notes
- ใช้ AI image generation สำหรับ placeholder images
- หาก CEO มีรูปผลิตภัณฑ์จริง → แทนที่ placeholder
- เว็บนี้เป็น "Blueprint" สำหรับยื่นจริง ควรเป็น Professional Look
