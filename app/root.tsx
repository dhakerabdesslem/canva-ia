import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/icon.svg" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#05060F" />
        <link rel="canonical" href="https://canva.dhaker.site" />
        <link rel="manifest" href="/manifest.json" />
        <title>Masterclass Productivité & IA sur Canva — Dhaker Abdesslem</title>
        
        {/* Preconnect & Async load Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&display=swap&text=!%22%23%24%25%26%27()*%2B%2C-.%2F0123456789%3A%3B%3C%3D%3E%3F%40ABCDEFGHIJKLMNOPQRSTUVWXYZ%5B%5C%5D%5E_%60abcdefghijklmnopqrstuvwxyz%7B%7C%7D%C2%A9%C2%AB%C2%B7%C2%BB%C3%80%C3%89%C3%A0%C3%A2%C3%A7%C3%A8%C3%A9%C3%AA%C3%AE%C3%B4%E2%80%94%E2%80%9C%E2%80%9D%E2%86%90%E2%86%92%E2%8F%B1%E2%9C%93%E2%9C%95%E2%9C%A6%F0%9F%8E%81%F0%9F%92%BC%EF%B8%8F" />
        <noscript>
          <style>{`
            .reveal-on-scroll {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
        <Meta />
        <Links />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">Passer au contenu principal</a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oups !";
  let details = "Une erreur inattendue est survenue.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Erreur";
    details =
      error.status === 404
        ? "La page demandée est introuvable."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
      fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
      background: '#0B1233',
      color: '#F3F4FA',
    }}>
      <h1 style={{
        fontFamily: "'Sora', system-ui, sans-serif",
        fontSize: 'clamp(48px, 10vw, 96px)',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #33D6FF, #5B7CFF, #B07CFF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '0 0 16px',
      }}>{message}</h1>
      <p style={{ fontSize: '18px', color: '#888FB8', maxWidth: '480px', textAlign: 'center', lineHeight: 1.6 }}>{details}</p>
      <a href="/" style={{
        marginTop: '32px',
        padding: '14px 28px',
        borderRadius: '100px',
        background: '#F3F4FA',
        color: '#05060F',
        fontWeight: 600,
        fontSize: '15px',
        textDecoration: 'none',
        transition: 'transform .18s ease, box-shadow .18s ease',
      }}>Retour à l'accueil</a>
      {stack && (
        <pre style={{
          marginTop: '40px',
          padding: '20px',
          borderRadius: '14px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.10)',
          maxWidth: '800px',
          width: '100%',
          overflow: 'auto',
          fontSize: '13px',
          color: '#B7BBDD',
        }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
