import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { SITE_THEME_COLOR } from "../site-theme";

const DEFAULT_TITLE = "TitanArtMaster.pro | Ремонт квартир под ключ";
const DEFAULT_DESCRIPTION = "Ремонт квартир и все виды отделочных работ. 20 лет опыта.";

function buildHead() {
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: "TitanArtMaster.pro" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: SITE_THEME_COLOR },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://titanartmaster.pro/assets/hero-living.jpg" },
      { name: "twitter:image", content: "https://titanartmaster.pro/assets/hero-living.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/assets/brand/favicon.svg", type: "image/svg+xml" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "apple-touch-icon", href: "/assets/brand/apple-touch-icon.png" },
    ],
  };
}

function NotFoundComponent() {
  return (
    <main className="site-shell" style={{ minHeight: "100dvh", display: "grid", placeItems: "center", padding: "2rem" }}>
      <div style={{ maxWidth: 520, textAlign: "center" }}>
        <p className="eyebrow">404 · СТРАНИЦА НЕ НАЙДЕНА</p>
        <h1>Такой страницы нет</h1>
        <p className="hero-desc">Возможно, ссылка устарела или страница была перемещена.</p>
        <Link to="/" className="button-primary">На главную <span aria-hidden="true">→</span></Link>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <main className="site-shell" style={{ minHeight: "100dvh", display: "grid", placeItems: "center", padding: "2rem" }}>
      <div style={{ maxWidth: 520, textAlign: "center" }}>
        <p className="eyebrow">ЧТО-ТО ПОШЛО НЕ ТАК</p>
        <h1>Не удалось загрузить страницу</h1>
        <p className="hero-desc">Попробуйте обновить страницу или вернуться на главную.</p>
        <div className="hero-actions" style={{ justifyContent: "center", flexWrap: "wrap" }}>
          <button className="button-primary" onClick={() => { router.invalidate(); reset(); }}>Повторить</button>
          <a className="button-text" href="/">На главную <span>→</span></a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: buildHead,
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
