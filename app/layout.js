import "./globals.css";

import TopNav from "@/Components/TopNav";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"

import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Nextecom",
  description: "Ecommerce app using NextJs Full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav/>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
