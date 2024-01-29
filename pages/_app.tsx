import type { AppProps } from "next/app";
import { mulish } from "@/app/ui/fonts";
import "@/app/ui/global.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={mulish.className}>
          <Component {...pageProps} />
        </main>
      )
}
