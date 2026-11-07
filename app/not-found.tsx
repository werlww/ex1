import Link from "next/link";
export default function NotFound() {
  return <div className="container not-found"><span className="eyebrow">404</span><h1>Кажется, мы свернули не туда</h1><p>Такой страницы нет, но кофе всё ещё есть.</p><Link className="button button-dark" href="/">На главную ↗</Link></div>;
}
