import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <main className="pt-8 w-full"><h1 className="text-center bottom-[1rem] font-bold text-3xl text-white">Github Finder</h1><Component {...pageProps} /></main>
}
