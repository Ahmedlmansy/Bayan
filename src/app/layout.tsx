import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "@/componats/MainLayout";

export const metadata = {
  title: "Bayan",
  description: "A Next.js app",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
