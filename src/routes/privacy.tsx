import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-content">
        <h1>Политика конфиденциальности</h1>
      </div>
    </main>
  );
}
