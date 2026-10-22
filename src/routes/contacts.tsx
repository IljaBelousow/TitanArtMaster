import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "../components/InteriorPage";

export const Route = createFileRoute("/contacts")({ component: ContactsPage });

function ContactsPage() {
  return <InteriorPage
    eyebrow="КОНТАКТЫ"
    title={<>Давайте обсудим<br /><em>ваш ремонт.</em></>}
    description="Свяжитесь с TitanArtMaster, чтобы обсудить задачу, виды работ и дальнейшие шаги."
    intro="Позвоните или напишите удобным способом. Обсудим особенности квартиры, ваши пожелания и объём работ, после чего согласуем дальнейшие действия."
    cards={[
      { number: "01", title: "Телефон", text: "+375 (33) 307-50-77 — позвоните, чтобы обсудить ваш проект.", href: "tel:+375333075077" },
      { number: "02", title: "Telegram", text: "Напишите в Telegram, чтобы связаться и рассказать о задаче.", href: "https://t.me/+375333075077" },
      { number: "03", title: "Instagram", text: "Свяжитесь с нами через Instagram.", href: "https://www.instagram.com/titanartmaster/" },
      { number: "04", title: "Viber", text: "Можно написать или позвонить в Viber.", href: "viber://chat?number=%2B375333075077" }
    ]}
    closingTitle="Будем рады обсудить ваш проект."
  />;
}
