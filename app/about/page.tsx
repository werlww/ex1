import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container page-shell">
      <div className="page-title"><span className="eyebrow">ПРИЯТНО ПОЗНАКОМИТЬСЯ</span><h1>Мы — «Тёплый угол»</h1><p>Кофейня, в которой каждый гость чувствует себя немного как дома.</p></div>
      <section className="about-panel">
        <div className="about-number">01</div>
        <div><h2>История с простого желания</h2><p>Мы мечтали создать место, куда можно забежать за любимым кофе по дороге на учёбу или работу, встретиться с друзьями или провести спокойное утро наедине с собой. Так появился «Тёплый угол» — небольшая кофейня с вниманием к деталям и людям.</p></div>
      </section>
      <section className="values-grid">
        <article><span>✳</span><h3>Качество</h3><p>Выбираем хорошие зёрна и внимательно готовим каждый напиток.</p></article>
        <article><span>♡</span><h3>Забота</h3><p>Встречаем гостей с теплом и стараемся сделать каждый визит приятным.</p></article>
        <article><span>☼</span><h3>Уют</h3><p>Создаём пространство, где можно выдохнуть и никуда не торопиться.</p></article>
      </section>
      <div className="about-cta"><p>Заглянешь на чашечку?</p><Link className="button button-dark" href="/contacts">Найти нас <span>↗</span></Link></div>
    </div>
  );
}
