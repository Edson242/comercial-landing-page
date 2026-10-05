import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Edson Silveira | Sites, Sistemas e Landing Pages",
  description:
    "Desenvolvimento de sites, landing pages, sistemas Web e soluções digitais personalizadas para empresas e profissionais.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Edson Silveira | Sites, Sistemas e Landing Pages",
    description: "Soluções digitais personalizadas para empresas e profissionais.",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Edson Silveira",
              description: "Desenvolvimento de sites, landing pages e sistemas Web",
              url: "https://edsonsilveiradev.vercel.app",
              areaServed: "BR",
            }),
          }}
        />
      </body>
    </html>
  );
}
