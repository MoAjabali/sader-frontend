import "./globals.css";

export const metadata = {
  title: "Sader",
  description: "المتجر الاكتروني الاول لبيع المنتجات العضوية.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
