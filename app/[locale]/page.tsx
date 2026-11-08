import { getI18n, getScopedI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n()
  {/*const scopedT = await getScopedI18n('')*/} 
  return (
    <main>
      {t("hello")}
    </main>
  );
}