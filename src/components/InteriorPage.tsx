import { useEffect, useState, type ReactNode } from "react";

type PageCard = { number: string; title: string; text: string; image?: string; href?: string };
type InteriorPageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  intro?: string;
  cards?: PageCard[];
  closingTitle?: string;
  closingText?: string;
  children?: ReactNode;
};

const nav = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О компании" },
  { href: "/services", label: "Виды работ" },
  { href: "/ceilings", label: "Натяжные потолки" },
  { href: "/#advantages", label: "Преимущества" },
  { href: "/contacts", label: "Контакты" },
];

const ceilingTypes = [
  { id: "matte", title: "Матовые" },
  { id: "gloss", title: "Глянцевые" },
  { id: "satin", title: "Сатиновые" },
  { id: "fabric", title: "Тканевые" },
];

function InstagramIcon({ size = 21 }: { size?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>;
}
function TelegramIcon({ size = 21 }: { size?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true"><path d="M21.4 4.6 18.2 20c-.2 1.1-.8 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 8.9-8c.4-.4-.1-.6-.6-.2L6.1 13.8l-4.7-1.5c-1-.3-1-1 .2-1.5L20 3.4c.9-.3 1.7.2 1.4 1.2Z"/></svg>;
}
function ViberIcon({ size = 21 }: { size?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3.5C2.8 4.5 2.7 7.1 3.4 9.4c1.6 5.1 6.1 9.6 11.2 11.2 2.3.7 4.9.6 5.9-1.6l.5-1.1-5-2.4-1.6 2-1.4-.6a13 13 0 0 1-5.5-5.5l-.6-1.4 2-1.6-2.4-5L5 3.5Z"/><path d="M13 5a6 6 0 0 1 6 6M13 8a3 3 0 0 1 3 3"/></svg>;
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.9 3.2 2 2 0 0 1 3.9 1h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7 9.2a16 16 0 0 0 6 6l1.8-1.8a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.5 3.2Z"/></svg>;
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ceilingsMenuOpen, setCeilingsMenuOpen] = useState(false);
  const closeMenu = () => { setMenuOpen(false); setCeilingsMenuOpen(false); };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen && !ceilingsMenuOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(".nav-dropdown")) setCeilingsMenuOpen(false);
      if (menuOpen && !target.closest(".topbar")) setMenuOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, ceilingsMenuOpen]);

  return (
    <header className={scrolled ? "topbar topbar-scrolled" : "topbar"}>
      <a className="brand" href="/" onClick={closeMenu} aria-label="TitanArtMaster — главная">
        <span className="brand-mark">T<span>A</span></span>
        <span className="brand-copy">TITAN<span>ARTMASTER.PRO</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Основная навигация">
        <a href="/" onClick={closeMenu}>Главная</a>
        <a href="/about" onClick={closeMenu}>О компании</a>
        <a href="/services" onClick={closeMenu}>Виды работ</a>
        <div className="nav-dropdown">
          <button className="nav-dropdown-trigger" type="button" aria-expanded={ceilingsMenuOpen} onClick={() => setCeilingsMenuOpen(open => !open)}>Натяжные потолки <span aria-hidden="true">⌄</span></button>
          <div className={ceilingsMenuOpen ? "ceiling-dropdown ceiling-dropdown-open" : "ceiling-dropdown"}>
            {ceilingTypes.map(item => <a key={item.id} href={`/ceilings#ceiling-${item.id}`} onClick={closeMenu}>{item.title}</a>)}
            <a className="dropdown-all" href="/ceilings" onClick={closeMenu}>Все варианты потолков ↗</a>
          </div>
        </div>
        <a href="/#advantages" onClick={closeMenu}>Преимущества</a>
        <a href="/contacts" onClick={closeMenu}>Контакты</a>
      </nav>
      <div className="header-actions">
        <div className="header-socials menu-social-icons" aria-label="Связаться с нами">
          <a href="https://www.instagram.com/titanartmaster/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><InstagramIcon size={21}/></a>
          <a href="https://t.me/+375333075077" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram"><TelegramIcon size={21}/></a>
          <a href="viber://chat?number=%2B375333075077" aria-label="Viber" title="Viber"><ViberIcon size={21}/></a>
          <a href="tel:+375333075077" aria-label="Позвонить" title="Позвонить"><PhoneIcon/></a>
        </div>
        <a className="header-phone" href="tel:+375333075077">+375 (33) 307-50-77</a>
        <button className={menuOpen ? "menu-toggle menu-toggle-open" : "menu-toggle"} type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
          <i/><i/><i/>
        </button>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}>
        <button className="menu-backdrop" type="button" aria-label="Закрыть меню" onClick={closeMenu}/>
        <aside className="menu-panel" onClick={event => event.stopPropagation()} aria-label="Меню сайта">
          <nav className="menu-navigation" aria-label="Разделы сайта">
            {nav.map(item => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label} <span>→</span></a>)}
          </nav>
          <section className="menu-contact-block" aria-label="Телефон"><a className="menu-phone" href="tel:+375333075077">+375 (33) 307-50-77</a></section>
          <section className="menu-contact-block" aria-label="Социальные сети">
            <p className="menu-caption">СВЯЗАТЬСЯ С НАМИ</p>
            <div className="menu-socials menu-social-icons">
              <a href="https://www.instagram.com/titanartmaster/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><InstagramIcon size={21}/></a>
              <a href="https://t.me/+375333075077" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram"><TelegramIcon size={21}/></a>
              <a href="viber://chat?number=%2B375333075077" aria-label="Viber" title="Viber"><ViberIcon size={21}/></a>
              <a href="tel:+375333075077" aria-label="Позвонить" title="Позвонить"><PhoneIcon/></a>
            </div>
          </section>
          <a className="menu-contact-button" href="/contacts" onClick={closeMenu}>Связаться с нами <span>→</span></a>
        </aside>
      </div>}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer footer-premium">
      <div className="footer-main site-footer-grid">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="/" aria-label="TitanArtMaster — наверх">
            <span className="brand-mark">T<span>A</span></span>
            <span className="brand-copy">TITAN<span>ARTMASTER.PRO</span></span>
          </a>
          <p className="footer-manifesto">Ремонт квартир под ключ<br/>и все виды отделочных работ.</p>
          <span className="footer-experience">20 лет опыта в ремонте</span>
          <a className="footer-catalog-link" href="/services">Посмотреть услуги <span aria-hidden="true">↗</span></a>
        </div>
        <nav className="footer-navigation" aria-label="Разделы сайта">
          <span className="footer-kicker">РАЗДЕЛЫ САЙТА</span>
          <a href="/">Главная</a><a href="/about">О компании</a><a href="/services">Виды работ</a><a href="/ceilings">Натяжные потолки</a><a href="/contacts">Контакты</a>
        </nav>
        <div className="footer-contact">
          <span className="footer-kicker">СВЯЗАТЬСЯ С НАМИ</span>
          <a className="footer-phone" href="tel:+375333075077">+375 (33) 307-50-77 <span aria-hidden="true">↗</span></a>
          <div className="footer-socials footer-social-icons" aria-label="Социальные сети">
            <a className="footer-social" href="https://www.instagram.com/titanartmaster/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><InstagramIcon size={20}/></a>
            <a className="footer-social" href="https://t.me/+375333075077" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram"><TelegramIcon size={20}/></a>
            <a className="footer-social" href="viber://chat?number=%2B375333075077" aria-label="Viber" title="Viber"><ViberIcon size={20}/></a>
          </div>
          <a className="footer-contact-button" href="/contacts">Связаться с нами <span aria-hidden="true">→</span></a>
        </div>
        <div className="footer-services-column">
          <span className="footer-kicker">НАПРАВЛЕНИЯ РАБОТ</span>
          <p>Ремонт квартир под ключ</p><p>Плитка и напольные покрытия</p><p>Малярные работы</p><p>Монтаж гипсокартона</p><p>Натяжные потолки</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TITANARTMASTER.PRO</span>
        <span>Ремонт квартир · Все виды отделочных работ</span>
        <a href="/privacy">Политика конфиденциальности</a>
        <a href="/" className="back-top">НАВЕРХ <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}

export function InteriorPage({ eyebrow, title, description, intro, cards = [], closingTitle = "Обсудим ваш ремонт?", closingText = "Расскажите о задаче — поможем определить подходящий объём работ и следующие шаги.", children }: InteriorPageProps) {
  return (
    <main className="site-shell inner-page">
      <SiteHeader/>
      <section className="inner-hero">
        <div className="inner-hero-image" aria-hidden="true" />
        <div className="inner-hero-shade" />
        <div className="inner-hero-copy">
          <div className="inner-breadcrumb"><a href="/">Главная</a><span>/</span><span>{eyebrow}</span></div>
          <p className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</p>
          <h1>{title}</h1>
          <p className="inner-lead">{description}</p>
          <div className="hero-actions">
            <a className="button-primary" href="tel:+375333075077">Связаться с нами <span>↗</span></a>
            <a className="button-text" href="#page-content">Подробнее <span>↓</span></a>
          </div>
        </div>
      </section>
      <section className="inner-content section-pad" id="page-content">
        {intro && <div className="inner-intro"><p className="eyebrow"><span className="eyebrow-line" /> TITAN ART MASTER</p><p>{intro}</p></div>}
        {children}
        {cards.length > 0 && <div className="inner-card-grid">
          {cards.map(card => <article className="inner-card" key={card.number}>
            {card.image && <div className="inner-card-image"><img src={card.image} alt="" loading="lazy" /></div>}
            <div className="inner-card-body"><span className="inner-card-number">{card.number}</span><h2>{card.title}</h2><p>{card.text}</p>{card.href && <a href={card.href}>Подробнее <span>↗</span></a>}</div>
          </article>)}
        </div>}
      </section>
      <section className="inner-cta">
        <div><p className="eyebrow"><span className="eyebrow-line" /> СЛЕДУЮЩИЙ ШАГ</p><h2>{closingTitle}</h2><p>{closingText}</p></div>
        <a className="button-primary" href="tel:+375333075077">+375 (33) 307-50-77 <span>↗</span></a>
      </section>
      <SiteFooter/>
    </main>
  );
}
