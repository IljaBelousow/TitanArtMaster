import type { ReactNode } from "react";

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
  { href: "/contacts", label: "Контакты" },
];

export function InteriorPage({ eyebrow, title, description, intro, cards = [], closingTitle = "Обсудим ваш ремонт?", closingText = "Расскажите о задаче — поможем определить подходящий объём работ и следующие шаги.", children }: InteriorPageProps) {
  return (
    <main className="site-shell inner-page">
      <header className="inner-topbar">
        <a className="brand inner-brand" href="/" aria-label="TitanArtMaster — главная">
          <span className="brand-mark">T<span>A</span></span>
          <span className="brand-copy">TITAN<span>ARTMASTER.PRO</span></span>
        </a>
        <nav className="inner-nav" aria-label="Основная навигация">
          {nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="inner-phone" href="tel:+375333075077">+375 (33) 307-50-77</a>
      </header>

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

      <footer className="inner-footer">
        <a className="brand inner-brand" href="/"><span className="brand-mark">T<span>A</span></span><span className="brand-copy">TITAN<span>ARTMASTER.PRO</span></span></a>
        <p>Ремонт квартир и отделка с вниманием к каждой детали.</p>
        <nav aria-label="Навигация в подвале">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="/legal">Правовая информация</a></nav>
        <div className="inner-footer-bottom"><span>© {new Date().getFullYear()} TITANARTMASTER.PRO</span><a href="tel:+375333075077">+375 (33) 307-50-77</a><a href="/">На главную ↑</a></div>
      </footer>
    </main>
  );
}
