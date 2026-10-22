import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Camera, Send, PhoneCall } from "lucide-react";
export const Route = createFileRoute("/")({ component: Index });
const ceilingTypes = [
  { id: "matte", n: "01", title: "Матовые", text: "Спокойная поверхность с видом ровного окрашенного потолка.", image: "/assets/ceilings/matte.jpg" },
  { id: "gloss", n: "02", title: "Глянцевые", text: "Отражающая поверхность, которая визуально добавляет света.", image: "/assets/ceilings/gloss.jpg" },
  { id: "satin", n: "03", title: "Сатиновые", text: "Мягкий деликатный блеск для современного интерьера.", image: "/assets/ceilings/satin.jpg" },
  { id: "fabric", n: "04", title: "Тканевые", text: "Фактурное решение с сдержанным, естественным видом.", image: "/assets/ceilings/fabric.jpg" },
];
const services = [
  { n: "01", title: "Ремонт квартир под ключ", text: "Комплексная отделка — от подготовки помещения до чистовых работ и финальных деталей.", image: "/assets/living-room.jpg" },
  { n: "02", title: "Плитка и напольные покрытия", text: "Укладка плитки, керамогранита и ламината с аккуратной подгонкой.", image: "/assets/bathroom.jpg" },
  { n: "03", title: "Монтаж гипсокартона", text: "Перегородки, короба и потолочные конструкции с подготовкой к отделке.", image: "/assets/drywall-work.jpg" },
  { n: "04", title: "Малярные работы", text: "Подготовка стен и потолков под покраску или оклейку обоями.", image: "/assets/painting-work.jpg" },
  { n: "05", title: "Натяжные потолки", text: "Матовые, глянцевые, сатиновые и тканевые потолки.", image: "/assets/ceilings/matte.jpg" },
  { n: "06", title: "Монтаж кондиционеров", text: "Монтаж климатического оборудования с аккуратным подходом к интерьеру.", image: "/assets/living-room.jpg" },
  { n: "07", title: "Тёплые полы и электрика", text: "Электромонтажные работы и решения для комфортного микроклимата.", image: "/assets/painting-work.jpg" },
  { n: "08", title: "Подбор и доставка материалов", text: "Помощь с выбором материалов под задачи помещения и организацией доставки.", image: "/assets/bathroom.jpg" },
];
function Index() {
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

  return <main className="site-shell">
    <header className={scrolled ? "topbar topbar-scrolled" : "topbar"}>
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">T<span>A</span></span>
        <span className="brand-copy">TITAN<span>ARTMASTER.PRO</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Основная навигация">
        <a href="/" onClick={closeMenu}>Главная</a>
        <a href="/about" onClick={closeMenu}>О компании</a>
        <a href="/services" onClick={closeMenu}>Виды работ</a>
        <div className="nav-dropdown">
          <button className="nav-dropdown-trigger" type="button" aria-expanded={ceilingsMenuOpen} onClick={() => setCeilingsMenuOpen(!ceilingsMenuOpen)}>Натяжные потолки <span aria-hidden="true">⌄</span></button>
          <div className={ceilingsMenuOpen ? "ceiling-dropdown ceiling-dropdown-open" : "ceiling-dropdown"}>
            {ceilingTypes.map(item => <a key={item.id} href={"#ceiling-" + item.id} onClick={closeMenu}>{item.title}</a>)}
            <a className="dropdown-all" href="/ceilings" onClick={closeMenu}>Все варианты потолков ↗</a>
          </div>
        </div>
        <a href="#advantages" onClick={closeMenu}>Преимущества</a>
        <a href="/contacts" onClick={closeMenu}>Контакты</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href="tel:+375333075077">+375 (33) 307-50-77</a>
        <button className={menuOpen ? "menu-toggle menu-toggle-open" : "menu-toggle"} type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}>
        <button className="menu-backdrop" type="button" aria-label="Закрыть меню" onClick={closeMenu}/>
        <aside className="menu-panel" onClick={(event) => event.stopPropagation()} aria-label="Меню сайта">
          <nav className="menu-navigation" aria-label="Разделы сайта">
            <a href="/" onClick={closeMenu}>Главная <span>→</span></a>
            <a href="/about" onClick={closeMenu}>О компании <span>→</span></a>
            <a href="/services" onClick={closeMenu}>Виды работ <span>→</span></a>
            <a href="/ceilings" onClick={closeMenu}>Натяжные потолки <span>→</span></a>
            <a href="#advantages" onClick={closeMenu}>Преимущества <span>→</span></a>
            <a href="/contacts" onClick={closeMenu}>Контакты <span>→</span></a>
          </nav>
          <section className="menu-contact-block" aria-label="Телефон">
            <a className="menu-phone" href="tel:+375333075077">+375 (33) 307-50-77</a>
          </section>
          <section className="menu-contact-block" aria-label="Социальные сети">
            <p className="menu-caption">СВЯЗАТЬСЯ С НАМИ</p>
            <div className="menu-socials menu-social-icons">
              <a href="https://www.instagram.com/titanartmaster/" target="_blank" rel="noopener noreferrer" aria-label="Camera" title="Camera"><Camera size={21} strokeWidth={1.7}/></a>
              <a href="https://t.me/+375333075077" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram"><Send size={21} strokeWidth={1.7}/></a>
              <a href="viber://chat?number=%2B375333075077" aria-label="Viber / телефон" title="Viber / телефон"><PhoneCall size={21} strokeWidth={1.7}/></a>
            </div>
          </section>
          <a className="menu-contact-button" href="/contacts" onClick={closeMenu}>Связаться с нами <span>→</span></a>
        </aside>
      </div>}
    </header>
    <section className="hero" id="home"><div className="hero-backdrop" aria-hidden="true"/><div className="hero-shade"/><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-content"><p className="eyebrow"><span className="eyebrow-line"/> РЕМОНТ И ОТДЕЛКА КВАРТИР</p><h1>Ремонт квартир<br/><em>под ключ</em></h1><p className="hero-desc">Все виды отделочных работ для вашей квартиры — с вниманием к деталям, материалам и результату.</p><div className="hero-actions"><a className="button-primary" href="#contacts">Обсудить проект <span>↗</span></a><a className="button-text" href="#services">Изучить услуги <span>↓</span></a></div></div><div className="hero-bottom"><span>ОТ ЧЕРНОВОЙ ОТДЕЛКИ ДО ФИНАЛЬНОГО ШТРИХА</span><span className="hero-bottom-right">TITAN ART MASTER <b>●</b> РЕМОНТ КВАРТИР</span></div><div className="hero-side-label">CRAFTED FOR EVERYDAY LIVING</div></section>
    <section className="intro section-pad" id="advantages"><div className="intro-index">01 / ПОДХОД</div><div><h2>Хороший ремонт<br/>чувствуется <em>в деталях.</em></h2><div className="intro-bottom"><p>Создаём комфортные интерьеры с вниманием к качеству работ, материалам и тому, как пространство будет жить каждый день.</p><div className="stat"><strong>20<span>+</span></strong><small>лет опыта работы</small></div></div></div></section>
    <section className="services section-pad" id="services"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line"/> ЧТО МЫ ДЕЛАЕМ</p><h2>Виды <em>работ</em></h2></div><p className="heading-note">Комплексный ремонт квартир<br/>и отдельные виды работ<br/>под задачи вашего интерьера.</p></div><div className="service-list">{services.map(s => <article className="service-row" key={s.n}><div className="service-meta"><span>{s.n}</span><span className="service-tag">TITAN ART MASTER</span></div><div className="service-title"><h3>{s.title}</h3><p>{s.text}</p></div><div className="service-photo"><img src={s.image} alt={s.title} loading="lazy"/><span className="photo-arrow">↗</span></div></article>)}</div></section>
    <section className="ceilings section-pad" id="ceilings"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line"/> ОТДЕЛЬНОЕ НАПРАВЛЕНИЕ</p><h2>Натяжные <em>потолки</em></h2></div><p className="heading-note">Выберите тип потолка,<br/>чтобы посмотреть особенности<br/>и обсудить подходящий вариант.</p></div><div className="ceiling-tabs" aria-label="Виды натяжных потолков">{ceilingTypes.map(item => <a key={item.id} href={"#ceiling-" + item.id}>{item.title}</a>)}</div><div className="ceiling-grid">{ceilingTypes.map(item => <article className="ceiling-card" id={"ceiling-" + item.id} key={item.id}><img className="ceiling-photo" src={item.image} alt={item.title + " — натяжной потолок"} loading="lazy"/><div className="ceiling-photo-overlay"/><div className="ceiling-photo-copy"><span className="ceiling-number">{item.n} / НАТЯЖНЫЕ ПОТОЛКИ</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contacts" aria-label={"Обсудить потолок: " + item.title}>Обсудить вариант <span>↗</span></a></div></article>)}</div></section>
    <section className="contact-section" id="contacts"><div className="contact-image"/><div className="contact-overlay"/><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line"/> ВАШ СЛЕДУЮЩИЙ ШАГ</p><h2>Давайте обсудим<br/><em>ваш ремонт.</em></h2><p>Расскажите, каким вы хотите видеть своё пространство. Поможем разобраться с работами и дальнейшими шагами.</p><a className="contact-phone" href="tel:+375333075077">+375 (33) 307-50-77 <span>↗</span></a><div className="contact-actions"><a className="button-primary contact-button" href="tel:+375333075077">Позвонить <span>↗</span></a><div className="contact-socials contact-social-icons"><a href="https://www.instagram.com/titanartmaster/" target="_blank" rel="noopener noreferrer" aria-label="Camera" title="Camera"><Camera size={21}/></a><a href="https://t.me/+375333075077" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram"><Send size={21}/></a><a href="viber://chat?number=%2B375333075077" aria-label="Viber / телефон" title="Viber / телефон"><PhoneCall size={21}/></a></div></div></div></section>
    <footer className="footer footer-premium">
      <div className="footer-main">
        <a className="brand footer-brand" href="#home" aria-label="TitanArtMaster — наверх">
          <span className="brand-mark">T<span>A</span></span>
          <span className="brand-copy">TITAN<span>ARTMASTER.PRO</span></span>
        </a>
        <div className="footer-intro">
          <p className="footer-manifesto">Ремонт квартир и отделка<br/>с вниманием к каждой детали.</p>
          <span className="footer-experience">20 лет опыта в ремонте</span>
        </div>
        <nav className="footer-navigation" aria-label="Навигация в подвале">
          <span className="footer-kicker">РАЗДЕЛЫ САЙТА</span>
          <a href="/about">О компании</a>
          <a href="/services">Виды работ</a>
          <a href="/ceilings">Натяжные потолки</a>
          <a href="/contacts">Контакты</a>
        </nav>
        <div className="footer-contact">
          <span className="footer-kicker">ОБСУДИТЬ ПРОЕКТ</span>
          <a className="footer-phone" href="tel:+375333075077">+375 (33) 307-50-77 <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-social-area">
          <span className="footer-kicker">МЫ НА СВЯЗИ</span>
          <div className="footer-socials footer-social-icons" aria-label="Социальные сети"><a className="footer-social" href="https://www.instagram.com/titanartmaster/" target="_blank" rel="noopener noreferrer" aria-label="Camera" title="Camera"><Camera size={20}/></a><a className="footer-social" href="https://t.me/+375333075077" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram"><Send size={20}/></a><a className="footer-social" href="viber://chat?number=%2B375333075077" aria-label="Viber / телефон" title="Viber / телефон"><PhoneCall size={20}/></a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} TITANARTMASTER.PRO</span><span>Ремонт квартир · Все виды отделочных работ</span><a href="/legal">Правовая информация</a><a href="#home" className="back-top">НАВЕРХ <span aria-hidden="true">↑</span></a></div>
    </footer>
  </main>;
}
