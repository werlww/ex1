import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">НЕБОЛЬШАЯ КОФЕЙНЯ С БОЛЬШИМ СЕРДЦЕМ</span>
            <h1>Твоё место для <em>маленьких</em> радостей</h1>
            <p>Ароматный кофе, свежая выпечка и атмосфера, в которой хочется задержаться.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/menu">Посмотреть меню <span>↗</span></Link>
              <Link className="text-link" href="/about">Наша история</Link>
            </div>
            <div className="hero-note"><span className="note-dot" /> Открыты каждый день · 08:00–21:00</div>
          </div>
          <div className="hero-visual">
            <Image src="/images/hero.svg" alt="Кофе и круассан на столе" fill priority className="hero-image" />
            <div className="hero-sticker">сделано<br/>с любовью ♥</div>
          </div>
        </div>
      </section>
      <section className="container intro-strip">
        <p>Хороший кофе — это повод<br/><strong>сделать паузу.</strong></p>
        <div className="strip-detail"><span>01 / 03</span><span>Кофе · Десерты · Уют</span></div>
      </section>
      <section className="container feature-section">
        <div className="section-heading">
          <div><span className="eyebrow">ПОПРОБУЙ НАШЕ</span><h2>Любимое в меню</h2></div>
          <Link className="text-link" href="/menu">Всё меню <span>↗</span></Link>
        </div>
        <div className="feature-grid">
          {[
            ["Капучино","Нежный эспрессо с воздушной молочной пеной","320 ₽","/images/cappuccino.svg"],
            ["Матча-латте","Мягкий вкус японского зелёного чая","350 ₽","/images/matcha.svg"],
            ["Круассан","Слоёный, хрустящий и очень сливочный","240 ₽","/images/croissant.svg"],
          ].map(([name,desc,price,img]) => (
            <Link href="/menu" className="feature-card" key={name}>
              <div className="feature-image"><Image src={img} alt={name} fill /></div>
              <div className="feature-info"><div><h3>{name}</h3><p>{desc}</p></div><strong>{price}</strong></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="quote-band">
        <div className="container quote-inner"><span>☕</span><p>«Иногда для хорошего дня<br/>нужна всего одна чашка кофе».</p><Link href="/about" className="text-link">Узнать о нас ↗</Link></div>
      </section>
    </div>
  );
}
