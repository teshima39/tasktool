import { useState, useEffect } from "react"
import 'ress'
import { Header } from "@/components/organisms/Header";
import { ProcList } from "../components/organisms/ProcList";
import { useNowDate } from "../hook/useNowDate"
import Head from 'next/head';

export default function Home() {
  /* errors (425, 418, 423)回避のため  */
  const [nowDate, setNowDate] = useState<string>('');
  useEffect(() => {
    setNowDate(useNowDate());
  }, []);

  return (
    <>
      <Head>
        <title>tasktool</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header nowDate={nowDate}></Header>
      <main id='main'>
        <ProcList nowDate={nowDate}></ProcList>
      </main >
    </>
  );
}
