import Link from "next/link";
import Image from "next/image";
import { menuItems } from "@/lib/menu";

export default function MenuPage() {
  return (
    <div className="page-shell container">
      <div className="page-title"><span className="eyebrow">ЧТО-ТО ВКУСНОЕ УЖЕ ЖДЁТ</span><h1>Наше меню</h1><p>Выбирай любимое или открывай для себя что-то новое.</p></div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <Link href={`/menu/${item.id}`} className="menu-card" key={item.id}>
            <div className="menu-card-image"><Image src={item.image} alt={item.name} fill /></div>
            <div className="menu-card-body"><div><h2>{item.name}</h2><p>{item.short}</p></div><strong>{item.price} ₽</strong></div>
            <span className="card-arrow">↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
