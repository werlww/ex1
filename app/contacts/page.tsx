import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="container page-shell">
      <div className="page-title"><span className="eyebrow">МЫ РЯДОМ</span><h1>Где нас найти</h1><p>Заглядывай в гости — будем рады видеть тебя!</p></div>
      <div className="contact-layout">
        <div className="contact-info">
          <div><span className="eyebrow">АДРЕС</span><h2>ул. Кофейная, 12</h2><p>Центр города, рядом с уютным сквером.</p></div>
          <div><span className="eyebrow">ЧАСЫ РАБОТЫ</span><h2>Каждый день</h2><p>Пн–Вс · 08:00–21:00</p></div>
          <div><span className="eyebrow">КОНТАКТЫ</span><h2>+7 (900) 123-45-67</h2><p>hello@teplyugol.ru</p></div>
          <Link href="/menu" className="text-link">Посмотреть меню ↗</Link>
        </div>
        <div className="map-placeholder"><div className="map-grid"></div><div className="map-pin">⌖</div><div className="map-label"><strong>Тёплый угол</strong><span>ул. Кофейная, 12</span></div><span className="map-caption">КАРТА · ДЕМОНСТРАЦИОННЫЙ МАКЕТ</span></div>
      </div>
    </div>
  );
}
