import { getI18n, getScopedI18n } from "@/locales/server";
import { Suspense } from "react";

async function HomeContent() {
  const t = await getI18n()
  {/*const scopedT = await getScopedI18n('')*/} 
  return (
    <main>
      {t("hello")}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomeContent />
    </Suspense>
  );
}