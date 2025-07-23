import MainLayout from "@/components/MainLayout";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  return <MainLayout> {children} </MainLayout>;
}
