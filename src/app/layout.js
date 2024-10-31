import dynamic from "next/dynamic";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigations/Header";
import "./globals.css";

export const metadata = {
  title: "oiltradeuz ",
  description: "Это описание главной страницы вашего приложения.",
  keywords: "Next.js, SEO, оптимизация",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com/",
    title: "Пример веб-сайта",
    description: "Описание страницы с SEO оптимизацией.",
    site_name: "Пример сайта",
  },
  title: "OilTrade.Uz",
  description: `Oil" "Delkor "Башнефть", "Роснефть", "Q8oils", "ТАТНЕФТЬ". Работая с нами ... Моторное масло 10w40 Multigаз GNV OIL`,
};

// Dynamically import the Sidebar with DaisyUI skeleton loader
const Sidebar = dynamic(() => import("./components/SideBar/Sidebar"), {
  ssr: true,
  loading: () => (
    <div className="w-[250px]">
      <div className="flex flex-col gap-4 p-4 bg-base-200 rounded-xl">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-7 w-full bg-gray-300 animate-pulse rounded"></div>
        ))}
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-base-200 rounded-xl">
        <div className="h-[170px] w-full bg-gray-300 animate-pulse rounded"></div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-7 w-full bg-gray-300 animate-pulse rounded"></div>
        ))}
      </div>
    </div>
  ),
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        <Navigation />
        <main className="flex container font-montserrat">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
