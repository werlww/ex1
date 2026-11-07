export type MenuItem = {
  id: string;
  name: string;
  short: string;
  description: string;
  price: number;
  image: string;
};

export const menuItems: MenuItem[] = [
  { id: "cappuccino", name: "Капучино", short: "Эспрессо и нежная молочная пена", description: "Классический капучино на основе насыщенного эспрессо и молока с мягкой, воздушной пеной. Отличный выбор для уютного перерыва.", price: 320, image: "/images/cappuccino.svg" },
  { id: "matcha", name: "Матча-латте", short: "Японский чай и молоко", description: "Нежный напиток на основе японского зелёного чая матча и молока. Сбалансированный вкус с лёгкими травяными нотами.", price: 350, image: "/images/matcha.svg" },
  { id: "raf", name: "Ванильный раф", short: "Кофе, сливки и ваниль", description: "Мягкий кофейный напиток со сливками и ароматной ванилью. Сладкий, сливочный и очень уютный.", price: 380, image: "/images/raf.svg" },
  { id: "croissant", name: "Круассан", short: "Свежая хрустящая выпечка", description: "Золотистый круассан из слоёного теста с нежной сливочной серединкой. Особенно хорош к утреннему кофе.", price: 240, image: "/images/croissant.svg" },
  { id: "cheesecake", name: "Чизкейк", short: "Нежный сливочный десерт", description: "Кусочек нежного чизкейка на песочной основе. Лёгкая сладость, сливочный вкус и приятное дополнение к напитку.", price: 290, image: "/images/cheesecake.svg" },
  { id: "cocoa", name: "Какао", short: "Горячий шоколадный напиток", description: "Густое какао с молоком — согревающий напиток для прохладного дня и хорошего настроения.", price: 300, image: "/images/cocoa.svg" },
];
