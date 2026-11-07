import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand"><span className="brand-mark">т.</span><span>тёплый угол<small>КОФЕЙНЯ НА КАЖДЫЙ ДЕНЬ</small></span></Link>
        <nav className="nav-links">
          <Link href="/">Главная</Link><Link href="/menu">Меню</Link><Link href="/about">О нас</Link><Link href="/contacts">Контакты</Link>
        </nav>
        <Link href="/menu" className="header-cta">Выбрать кофе <span>↗</span></Link>
      </div>
    </header>
  );
}
