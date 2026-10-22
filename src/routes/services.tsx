import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "../components/InteriorPage";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return <InteriorPage
    eyebrow="ВИДЫ РАБОТ"
    title={<>Все этапы ремонта.<br /><em>В одном месте.</em></>}
    description="Комплексный ремонт квартир под ключ и отдельные виды отделочных работ — под задачи вашего пространства."
    intro="Состав работ определяется индивидуально. Можно обсудить комплексную отделку квартиры или заказать отдельное направление."
    cards={[
      { number: "01", title: "Ремонт квартир под ключ", text: "Комплексная отделка — от подготовки помещения до чистовых работ и финальных деталей.", image: "/assets/living-room.jpg" },
      { number: "02", title: "Плитка и напольные покрытия", text: "Укладка плитки, керамогранита и ламината с аккуратной подгонкой.", image: "/assets/bathroom.jpg" },
      { number: "03", title: "Монтаж гипсокартона", text: "Перегородки, короба и потолочные конструкции с подготовкой к отделке.", image: "/assets/drywall-work.jpg" },
      { number: "04", title: "Малярные работы", text: "Подготовка стен и потолков под покраску или оклейку обоями.", image: "/assets/painting-work.jpg" },
      { number: "05", title: "Натяжные потолки", text: "Матовые, глянцевые, сатиновые и тканевые потолки.", image: "/assets/ceilings/matte.jpg", href: "/ceilings" },
      { number: "06", title: "Монтаж кондиционеров", text: "Монтаж климатического оборудования с вниманием к интерьеру.", image: "/assets/living-room.jpg" },
      { number: "07", title: "Тёплые полы и электрика", text: "Электромонтажные работы и решения для комфортного микроклимата.", image: "/assets/painting-work.jpg" },
      { number: "08", title: "Подбор и доставка материалов", text: "Помощь с выбором материалов под задачи помещения и организацией доставки.", image: "/assets/bathroom.jpg" }
    ]}
  />;
}
