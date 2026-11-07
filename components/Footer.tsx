import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div><Link href="/" className="footer-brand">тёплый угол<span>♥</span></Link><p>Место, где день становится чуточку теплее.</p></div>
        <div className="footer-links"><Link href="/menu">Меню</Link><Link href="/about">О нас</Link><Link href="/contacts">Контакты</Link></div>
        <div className="footer-hours"><strong>Ждём тебя каждый день</strong><span>08:00–21:00</span></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 «Тёплый угол»</span><span>Сделано с любовью к кофе ☕</span></div>
    </footer>
  );
}
