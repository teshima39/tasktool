import 'ress'
import { Header } from "@/components/organisms/Header";
import { ProcList } from "../components/organisms/ProcList";

export default function Home() {

  return (
    <>
      <Header></Header>
      <main>
        <ProcList></ProcList>
      </main >
    </>
  );
}
