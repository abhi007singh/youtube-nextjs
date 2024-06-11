import SideBar from "@/components/SideBar";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  return (
    <Layout isOpen={isOpen} handleClick={handleClick}>
      <div className="flex">
        <SideBar isOpen={isOpen} pathname={pathname} />
        <Component {...pageProps} isOpen={isOpen} pathname={pathname} />
      </div>
    </Layout>
  );
}
