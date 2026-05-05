import "./globals.css";

export const metadata = {
  title: "Damdidier",
  description: "Seguros e benefícios corporativos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
