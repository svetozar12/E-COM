import "../styles/globals.css";
import type { AppProps } from "next/app";
import SideBar from "../components/SideBar";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" && <SideBar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
