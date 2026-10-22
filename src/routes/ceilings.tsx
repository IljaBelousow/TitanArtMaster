import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "../components/InteriorPage";

export const Route = createFileRoute("/ceilings")({ component: CeilingsPage });

function CeilingsPage() {
  return <InteriorPage
    eyebrow="НАТЯЖНЫЕ ПОТОЛКИ"
    title={<>Завершение<br /><em>вашего интерьера.</em></>}
    description="Подберём тип натяжного потолка с учётом стиля помещения, освещения и ваших пожеланий."
    intro="У каждого покрытия свой характер: от спокойной матовой поверхности до деликатного сатинового блеска. Обсудим особенности комнаты и поможем выбрать подходящий вариант."
    cards={[
      { number: "01", title: "Матовые", text: "Спокойная поверхность с видом ровного окрашенного потолка.", image: "/assets/ceilings/matte.jpg" },
      { number: "02", title: "Глянцевые", text: "Отражающая поверхность, которая визуально добавляет света.", image: "/assets/ceilings/gloss.jpg" },
      { number: "03", title: "Сатиновые", text: "Мягкий деликатный блеск для современного интерьера.", image: "/assets/ceilings/satin.jpg" },
      { number: "04", title: "Тканевые", text: "Фактурное решение с сдержанным, естественным видом.", image: "/assets/ceilings/fabric.jpg" }
    ]}
    closingTitle="Выберем потолок для вашего помещения."
  />;
}
