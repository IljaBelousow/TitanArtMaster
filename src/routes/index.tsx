import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { StructuredData } from "../components/StructuredData";
export const Route = createFileRoute("/")({ component: Index });
const ceilingTypes = [
  { id: "matte", n: "01", title: "Матовые", text: "Спокойная поверхность с видом ровного окрашенного потолка.", image: "/assets/ceilings/matte.jpg" },
  { id: "gloss", n: "02", title: "Глянцевые", text: "Отражающая поверхность, которая визуально добавляет света.", image: "/assets/ceilings/gloss.jpg" },
  { id: "satin", n: "03", title: "Сатиновые", text: "Мягкий деликатный блеск для современного интерьера.", image: "/assets/ceilings/satin.jpg" },
  { id: "fabric", n: "04", title: "Тканевые", text: "Фактурное решение с сдержанным, естественным видом.", image: "/assets/ceilings/fabric.jpg" },
];
const faqs = [
  { q: "Какие виды ремонта вы выполняете?", a: "Выполняем ремонт квартир под ключ и отдельные отделочные работы: плитку, напольные покрытия, малярные работы, гипсокартон, электрику и тёплые полы." },
  { q: "Можно заказать только натяжной потолок?", a: "Да. Можно обсудить монтаж потолка отдельно, выбрать фактуру и подходящий вариант освещения." },
  { q: "Помогаете с выбором материалов?", a: "Помогаем подобрать материалы под задачи помещения и согласовать их доставку." },
  { q: "Как узнать условия гарантии?", a: "Продолжительность гарантии и условия обслуживания обсуждаются при согласовании конкретного проекта." },
];
const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

const services = [
  { n: "01", title: "Ремонт квартир под ключ", text: "От планирования и подготовки до чистовой отделки и финальных деталей.", image: "/assets/living-room.jpg" },
  { n: "02", title: "Укладка плитки и ламината", text: "Керамогранит, плитка и напольные покрытия с точной подгонкой.", image: "/assets/bathroom.jpg" },
  { n: "03", title: "Малярные работы", text: "Подготовка поверхностей под краску и обои, ровные стены и аккуратные примыкания.", image: "/assets/painting-work.jpg" },
  { n: "04", title: "Монтаж гипсокартона", text: "Перегородки, короба, потолочные конструкции и подготовка к отделке.", image: "/assets/drywall-work.jpg" },
];
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ceilingsMenuOpen, setCeilingsMenuOpen] = useState(false);
  const closeMenu = () => { setMenuOpen(false); setCeilingsMenuOpen(false); };

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
    <StructuredData json={faqJsonLd} />
    <header className="topbar"><a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">T<span>A</span></span><span className="brand-copy">TITAN<span>ARTMASTER.PRO</span></span></a><button className="menu-toggle" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i/><i/></button><nav className={menuOpen ? "nav nav-open" : "nav"}><a href="#home" onClick={closeMenu}>Главная</a><a href="#services" onClick={closeMenu}>Виды работ</a><div className="nav-dropdown"><button className="nav-dropdown-trigger" aria-expanded={ceilingsMenuOpen} onClick={() => setCeilingsMenuOpen(!ceilingsMenuOpen)}>Натяжные потолки <span aria-hidden="true">⌄</span></button><div className={ceilingsMenuOpen ? "ceiling-dropdown ceiling-dropdown-open" : "ceiling-dropdown"}>{ceilingTypes.map(item => <a key={item.id} href={"#ceiling-" + item.id} onClick={closeMenu}>{item.title}</a>)}<a className="dropdown-all" href="#ceilings" onClick={closeMenu}>Все варианты потолков ↗</a></div></div><a href="#advantages" onClick={closeMenu}>Преимущества</a><a href="#contacts" onClick={closeMenu}>Контакты</a><a className="nav-call" href="tel:+375333075077">+375 (33) 307-50-77 <span>↗</span></a></nav></header>
    <section className="hero" id="home"><div className="hero-backdrop" aria-hidden="true"/><div className="hero-shade"/><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-content"><p className="eyebrow"><span className="eyebrow-line"/> РЕМОНТ И ОТДЕЛКА КВАРТИР</p><h1>Ремонт квартир<br/><em>под ключ.</em></h1><p className="hero-desc">TitanArtMaster.pro. Все виды отделочных работ, аккуратное исполнение и внимание к деталям на каждом этапе.</p><div className="hero-actions"><a className="button-primary" href="#contacts">Обсудить проект <span>↗</span></a><a className="button-text" href="#services">Изучить услуги <span>↓</span></a></div></div><div className="hero-bottom"><span>ОТ ЧЕРНОВОЙ ОТДЕЛКИ ДО ФИНАЛЬНОГО ШТРИХА</span><span className="hero-bottom-right">TITAN ART MASTER <b>●</b> РЕМОНТ КВАРТИР</span></div><div className="hero-side-label">CRAFTED FOR EVERYDAY LIVING</div></section>
    <section className="intro section-pad" id="advantages"><div className="intro-index">01 / ПОДХОД</div><div><h2>Хороший ремонт<br/>чувствуется <em>в деталях.</em></h2><div className="intro-bottom"><p>Создаём комфортные интерьеры с вниманием к качеству работ, материалам и тому, как пространство будет жить каждый день.</p><div className="stat"><strong>20<span>+</span></strong><small>лет опыта работы</small></div></div></div></section>
    <section className="manifesto"><div className="manifesto-image" aria-hidden="true"/><div className="manifesto-overlay"/><div className="manifesto-copy"><p className="eyebrow"><span className="eyebrow-line"/> РЕМОНТ КВАРТИР ПОД КЛЮЧ</p><h2>От первой идеи<br/>до <em>готового дома.</em></h2><p>Организуем процесс последовательно и прозрачно. Поможем с подбором и доставкой материалов, чтобы вам было проще сосредоточиться на результате.</p><a className="circle-link" href="#contacts" aria-label="Связаться с нами">↗</a></div><div className="manifesto-number">20<br/><span>ЛЕТ ОПЫТА</span></div></section>
    <section className="services section-pad" id="services"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line"/> ЧТО МЫ ДЕЛАЕМ</p><h2>Виды <em>работ</em></h2></div><p className="heading-note">Комплексный ремонт квартир<br/>и отдельные виды работ<br/>под задачи вашего интерьера.</p></div><div className="service-list">{services.map(s => <article className="service-row" key={s.n}><div className="service-meta"><span>{s.n}</span><span className="service-tag">TITAN ART MASTER</span></div><div className="service-title"><h3>{s.title}</h3><p>{s.text}</p></div><div className="service-photo"><img src={s.image} alt={s.title} loading="lazy"/><span className="photo-arrow">↗</span></div></article>)}</div><div className="special-services"><div className="special-title"><span>ДОПОЛНИТЕЛЬНЫЕ НАПРАВЛЕНИЯ</span><h3>Завершаем интерьер<br/>до полной готовности.</h3></div><div className="special-grid"><div><span>05</span><h4>Малярные работы</h4><p>Подготовка стен под краску и под обои.</p></div><div><span>07</span><h4>Кондиционеры</h4><p>Монтаж и аккуратная интеграция в интерьер.</p></div><div><span>08</span><h4>Тёплые полы и электрика</h4><p>Инженерные решения для комфорта и удобства.</p></div><div><span>09</span><h4>Материалы и доставка</h4><p>Помощь в подборе и доставке материалов.</p></div></div></div></section>
    <section className="ceilings section-pad" id="ceilings"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line"/> ОТДЕЛЬНОЕ НАПРАВЛЕНИЕ</p><h2>Натяжные <em>потолки</em></h2></div><p className="heading-note">Выберите тип потолка,<br/>чтобы посмотреть особенности<br/>и обсудить подходящий вариант.</p></div><div className="ceiling-tabs" aria-label="Виды натяжных потолков">{ceilingTypes.map(item => <a key={item.id} href={"#ceiling-" + item.id}>{item.title}</a>)}</div><div className="ceiling-grid">{ceilingTypes.map(item => <article className="ceiling-card" id={"ceiling-" + item.id} key={item.id}><img className="ceiling-photo" src={item.image} alt={item.title + " — натяжной потолок"} loading="lazy"/><div className="ceiling-photo-overlay"/><div className="ceiling-photo-copy"><span className="ceiling-number">{item.n} / НАТЯЖНЫЕ ПОТОЛКИ</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contacts" aria-label={"Обсудить потолок: " + item.title}>Обсудить вариант <span>↗</span></a></div></article>)}</div></section>
    <section className="process section-pad" id="process"><div className="process-heading"><p className="eyebrow"><span className="eyebrow-line"/> ПОНЯТНЫЙ ПРОЦЕСС</p><h2>Ремонт без<br/><em>лишних вопросов.</em></h2><p>Последовательно ведём проект от знакомства до сдачи готового пространства. Обсудим задачи, объём работ и материалы до начала ремонта.</p><a className="button-primary" href="#contacts">Обсудить проект <span>↗</span></a></div><div className="process-steps"><article><span>01</span><div><h3>Знакомство и замер</h3><p>Обсуждаем задачи, пожелания и особенности квартиры.</p></div><b>↗</b></article><article><span>02</span><div><h3>План и материалы</h3><p>Согласуем объём работ и помогаем подобрать материалы.</p></div><b>↗</b></article><article><span>03</span><div><h3>Выполнение работ</h3><p>Организуем ремонт и контролируем качество на каждом этапе.</p></div><b>↗</b></article><article><span>04</span><div><h3>Приёмка результата</h3><p>Проверяем детали вместе и передаём готовое пространство.</p></div><b>↗</b></article></div></section>
    <section className="guarantee"><div className="guarantee-symbol">T<span>A</span></div><div><p className="eyebrow"><span className="eyebrow-line"/> ОТВЕТСТВЕННОСТЬ ЗА РЕЗУЛЬТАТ</p><h2>Работаем на качество.<br/><em>Внимание к деталям.</em></h2></div><div className="guarantee-detail"><span>ГАРАНТИЯ</span><p>Продолжительность гарантии и условия обслуживания согласуем для вашего проекта.</p><a href="#contacts">Уточнить условия <b>↗</b></a></div></section>
    <section className="faq-section section-pad" id="faq"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line"/> ЧАСТЫЕ ВОПРОСЫ</p><h2>Перед началом <em>ремонта</em></h2></div></div><div className="faq-list">{faqs.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></section>
    <section className="contact-section" id="contacts"><div className="contact-image"/><div className="contact-overlay"/><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line"/> ВАШ СЛЕДУЮЩИЙ ШАГ</p><h2>Давайте обсудим<br/><em>ваш ремонт.</em></h2><p>Расскажите, каким вы хотите видеть своё пространство. Поможем разобраться с работами и дальнейшими шагами.</p><a className="contact-phone" href="tel:+375333075077">+375 (33) 307-50-77 <span>↗</span></a><a className="button-primary contact-button" href="tel:+375333075077">Позвонить <span>↗</span></a></div></section>
    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">T<span>A</span></span><span className="brand-copy">TITAN<span>ARTMASTER.PRO</span></span></a><span>Ремонт квартир. Все виды отделочных работ.</span><a href="tel:+375333075077">+375 (33) 307-50-77</a><a href="#home" className="back-top">НАВЕРХ ↑</a><small>© {new Date().getFullYear()} TitanArtMaster.pro</small></footer>
  </main>;
}
