import { useEffect, useState } from "react";

type Choice = "accepted" | "rejected";

const STORAGE_KEY = "tam-cookie-choice-v1";

export function ComplianceBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(!window.localStorage.getItem(STORAGE_KEY));
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (choice: Choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // The notice can still be dismissed when browser storage is unavailable.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-notice" role="dialog" aria-label="Уведомление о Cookie">
      <div className="cookie-notice-copy">
        <strong>Настройки Cookie</strong>
        <p>Сайт может использовать Cookie для технической работы. Подробнее — в <a href="/legal#cookies">политике Cookie</a>. Этот выбор сохраняет только ваше решение в браузере и сам по себе не управляет сторонней аналитикой.</p>
      </div>
      <div className="cookie-notice-actions">
        <button type="button" className="cookie-reject" onClick={() => choose("rejected")}>Отклонить необязательные</button>
        <button type="button" className="cookie-accept" onClick={() => choose("accepted")}>Понятно</button>
      </div>
    </aside>
  );
}
