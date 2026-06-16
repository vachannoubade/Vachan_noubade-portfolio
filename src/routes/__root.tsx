import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode, useState, useCallback } from "react";

import appCss from "../styles.css?url";
import "@fontsource/open-sauce-sans/400.css";
import "@fontsource/open-sauce-sans/700.css";
import "@fontsource/peace-sans/400.css";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteEntrance } from "../components/ui/shader-animation";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-5xl sm:text-7xl font-display font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-lg sm:text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="pill">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="pill"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vachan Noubade — Sea Fronk · Designer & Developer" },
      { name: "description", content: "Sea Fronk — modern websites, UI/UX, and content by Vachan Noubade. Premium web experiences that convert." },
      { name: "author", content: "Vachan Noubade" },
      { property: "og:title", content: "Vachan Noubade — Sea Fronk" },
      { property: "og:description", content: "Modern websites, UI/UX & content. Premium web experiences that feel intuitive and convert." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ scrollPaddingTop: "5rem" }}>
      <head>
        <HeadContent />
      </head>
      <body style={{ scrollBehavior: "smooth" }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [entered, setEntered] = useState(false);
  const onComplete = useCallback(() => setEntered(true), []);

  return (
    <QueryClientProvider client={queryClient}>
      {!entered && <SiteEntrance onComplete={onComplete} />}
      <Outlet />
    </QueryClientProvider>
  );
}
