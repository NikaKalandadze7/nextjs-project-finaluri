import { FeaturedProducts, MainBanner, ProductListSmall } from "@/components";
import CategoryNavigation from "@/components/CategoryNavigation/CategoryNavigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  return (
    <main className="container px-[4px] flex min-h-screen flex-col items-center m-auto  gap-10">
      <div className="flex flex-row w-full">
        <CategoryNavigation />
        <MainBanner />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-4xl text-secondary font-bold mt-[140px] mb-6 border-gray-300 border-t-[1px]  pt-8 ">
          {t("featured")}
        </h1>
        <FeaturedProducts />
      </div>
      <ProductListSmall />
    </main>
  );
}
