import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Next CRUD",
  description: "This is my web-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={poppins.className}>
        <div className="max-w-4xl mx-auto px-5">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
