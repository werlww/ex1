import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { menuItems } from "@/lib/menu";

export function generateStaticParams() {
  return menuItems.map((item) => ({ id: item.id }));
}

export default async function DishPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = menuItems.find((dish) => dish.id === id);
  if (!item) notFound();

  return (
    <div className="container dish-page">
      <Link href="/menu" className="back-link">← Назад в меню</Link>
      <div className="dish-layout">
        <div className="dish-image"><Image src={item.image} alt={item.name} fill priority /></div>
        <div className="dish-copy">
          <span className="eyebrow">ИЗ НАШЕГО МЕНЮ</span>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <div className="dish-price">{item.price} ₽</div>
          <Link href="/menu" className="button button-dark">Вернуться к меню <span>↗</span></Link>
        </div>
      </div>
    </div>
  );
}
