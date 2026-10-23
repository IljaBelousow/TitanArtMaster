import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "../components/InteriorPage";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <InteriorPage
      eyebrow="ПРАВОВАЯ ИНФОРМАЦИЯ"
      title="Политика конфиденциальности"
      description=""
      minimal
    />
  );
}
