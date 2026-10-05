"use client";
import { useState } from "react";
import { Home, Gamepad2, CreditCard, MessageCircle, Menu, X } from "lucide-react";
import { contact, navigation } from "@/lib/content";
import { LineButton } from "./line-button";
const icons = { home: Home, game: Gamepad2, card: CreditCard, contact: MessageCircle };
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner container">
      <a href="#home" className="brand" aria-label="Kriton LtD. หน้าแรก"><span>{contact.brand}<i /></span><small>{contact.company}</small></a>
      <nav className="desktop-nav" aria-label="เมนูหลัก">{navigation.map(({ href, label, icon }, i) => { const Icon = icons[icon]; return <a key={href} href={href} className={i === 0 ? "nav-home" : ""}><Icon size={20} aria-hidden="true" />{label}</a>; })}</nav>
      <LineButton className="header-line" />
      <button className="menu-toggle" type="button" aria-label={open ? "ปิดเมนู" : "เปิดเมนู"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="เมนูมือถือ">{navigation.map(({ href, label, icon }) => { const Icon = icons[icon]; return <a href={href} key={href} onClick={() => setOpen(false)}><Icon size={19} aria-hidden="true" />{label}</a>; })}<LineButton /></nav>}
  </header>;
}
