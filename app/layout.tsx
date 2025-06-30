export const metadata = {
  title: "Site Manager",
  description: "Application de gestion de projets web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
