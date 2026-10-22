import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "../components/InteriorPage";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return <InteriorPage
    eyebrow="О КОМПАНИИ"
    title={<>Ремонт с вниманием<br /><em>к деталям.</em></>}
    description="TitanArtMaster — ремонт квартир и отделочные работы с ответственным подходом к каждому этапу."
    intro="За каждым хорошим интерьером стоит продуманная работа: от подготовки поверхностей и выбора материалов до аккуратных примыканий и чистового результата. Мы помогаем согласовать задачи, объясняем последовательность работ и поддерживаем связь на протяжении проекта."
    cards={[
      { number: "01", title: "20 лет опыта", text: "Практический опыт в ремонте и отделке помогает учитывать детали и особенности разных помещений.", image: "/assets/living-room.jpg" },
      { number: "02", title: "Понятные договорённости", text: "Перед началом обсуждаем объём работ, материалы и условия конкретного проекта.", image: "/assets/drywall-work.jpg" },
      { number: "03", title: "Внимание к результату", text: "Уделяем внимание подготовке, аккуратности исполнения и качеству финишных деталей.", image: "/assets/painting-work.jpg" }
    ]}
    closingTitle="Расскажите, каким вы видите свой дом."
  />;
}
