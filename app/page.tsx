import Image from "next/image";
import { ArrowRight, ChevronRight, Gamepad2, CreditCard, Headset, Gift, Phone, MessageCircle, Gem, ExternalLink } from "lucide-react";
import { Header } from "@/components/header";
import { LineButton } from "@/components/line-button";
import { contact, games, giftCards, navigation } from "@/lib/content";

export default function Home() {
  return <>
    <a href="#main" className="skip-link">ข้ามไปเนื้อหา</a>
    <Header />
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <Image className="hero-art" src="/images/hero.webp" alt="นักรบแฟนตาซีและตัวละครเกมพร้อมเพชรสีฟ้าและเหรียญทอง" fill preload fetchPriority="high" sizes="100vw" quality={75} />
        <div className="hero-inner container"><div className="hero-copy">
          <h1 id="hero-heading">เติม<span className="cyan-text">เกม</span><span className="gold-text">ออนไลน์</span><br />สนุกได้ <span className="cyan-text">ไม่มีสะดุด</span></h1>
          <p>เลือกเกมที่ใช่ แล้วทัก <strong>LINE</strong> ให้เราดูแล</p>
          <div className="hero-actions"><LineButton>เติมเกมผ่าน LINE</LineButton><a href="#contact" className="button button-outline"><MessageCircle size={20} aria-hidden="true" />ติดต่อเรา<ChevronRight size={18} aria-hidden="true" /></a></div>
        </div></div>
        <div className="hero-bottom-accent" />
      </section>

      <div className="content-background">
        <div className="container">
          <div className="service-rail" aria-label="บริการของเรา">
            <a href="#games"><Gamepad2 /><span><strong>เกมยอดนิยม</strong><small>เติมได้หลากหลายเกม</small></span><ChevronRight className="rail-arrow" /></a>
            <a href="#cards"><CreditCard /><span><strong>บัตรเติมเงิน</strong><small>หลากหลายแพลตฟอร์ม</small></span><ChevronRight className="rail-arrow" /></a>
            <a href="#contact"><Headset /><span><strong>ติดต่อทีมงาน</strong><small>สอบถามได้โดยตรง</small></span><ChevronRight className="rail-arrow" /></a>
          </div>

          <section className="games-section panel" id="games" aria-labelledby="games-heading">
            <div className="section-heading"><h2 id="games-heading"><Gamepad2 className="lime-icon" aria-hidden="true" />เติมเกมยอดนิยม</h2><a className="text-link" href={contact.line} target="_blank" rel="noopener noreferrer">สอบถามเกมอื่น<ArrowRight size={18} aria-hidden="true" /></a></div>
            <div className="game-grid">{games.map(game => <a className="game-card" href={contact.line} target="_blank" rel="noopener noreferrer" key={game.name} aria-label={`สอบถามเติมเกม ${game.name} ผ่าน LINE`}>
              <div className="game-art"><Image src={`/images/${game.image}`} alt={`ภาพเกม ${game.name}`} fill sizes="(max-width: 600px) 44vw, (max-width: 900px) 28vw, 180px" /></div>
              <div className="game-info"><h3>{game.name}</h3><p>{game.subtitle}</p><span className="game-action">เติมเกม<ArrowRight size={15} aria-hidden="true" /></span></div>
            </a>)}</div>
          </section>

          <div className="offer-grid">
            <section className="cards-section panel" id="cards" aria-labelledby="cards-heading">
              <div className="section-heading"><h2 id="cards-heading"><CreditCard aria-hidden="true" />บัตรเติมเงินดิจิทัล</h2><a href={contact.line} target="_blank" rel="noopener noreferrer" className="small-arrow" aria-label="สอบถามบัตรเติมเงินผ่าน LINE"><ArrowRight size={20} /></a></div>
              <div className="gift-grid">{giftCards.map(card => <a key={card.name} href={contact.line} target="_blank" rel="noopener noreferrer" className={`gift-card ${card.className}`} aria-label={`สอบถามบัตร ${card.name} ผ่าน LINE`}><Image className="gift-product" src={`/images/${card.image}`} alt={`บัตรเติมเงิน ${card.name}`} width={303} height={270} sizes="(max-width: 650px) 28vw, 170px" /><span>สอบถามราคา<ChevronRight size={13} aria-hidden="true" /></span></a>)}</div>
            </section>
            <section className="promo-section" aria-labelledby="promo-heading">
              <Image className="promo-art" src="/images/promo.webp" alt="หีบสมบัติพร้อมเพชรเกมและกล่องของขวัญ" fill sizes="(max-width: 900px) 95vw, 580px" />
              <div className="promo-copy"><Gift size={40} aria-hidden="true" /><h2 id="promo-heading">สอบถามโปรโมชันล่าสุด</h2><p>เกมยอดนิยม และบัตรเติมเงินอีกมากมาย</p><LineButton /></div>
            </section>
          </div>

          <section className="contact-section" id="contact" aria-labelledby="contact-heading">
            <div className="contact-decoration" aria-hidden="true"><Gem /><Gamepad2 /></div>
            <div className="contact-copy"><h2 id="contact-heading">พร้อม<span className="cyan-text">เติมความสนุก</span><br className="mobile-break" />แล้วหรือยัง?</h2><p>สอบถามข้อมูลเพิ่มเติม ทัก LINE หรือโทรหาเราได้เลย</p><div className="contact-actions"><a className="phone-link" href={`tel:${contact.phone}`}><span className="phone-icon"><Phone size={25} aria-hidden="true" /></span><span><strong>{contact.phoneDisplay}</strong><small>โทรติดต่อทีมงาน</small></span></a><LineButton /></div></div>
            <a className="qr-contact" href={contact.line} target="_blank" rel="noopener noreferrer" aria-label="เพิ่มเพื่อน LINE OA Kriton LtD."><div className="qr-frame"><Image src="/images/line-official-qr.png" alt="QR code เพิ่มเพื่อน LINE OA @901mvpnu" width={160} height={160} /></div><span>สแกนเพื่อทัก LINE<ExternalLink size={12} aria-hidden="true" /></span><small>{contact.lineId}</small></a>
          </section>
        </div>
      </div>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a href="#home" className="brand footer-brand"><span>{contact.brand}<i /></span><small>{contact.company}</small></a><div className="footer-right"><nav aria-label="เมนูท้ายหน้า">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><p>© {new Date().getFullYear()} {contact.brand} สอบถามและสั่งซื้อผ่าน LINE OA</p></div></div></footer>
  </>;
}
