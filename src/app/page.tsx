import { FeaturedProducts, MainBanner, ProductListSmall } from "@/components";
import CategoryNavigation from "@/components/CategoryNavigation/CategoryNavigation";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center m-auto  gap-10">
      <div className="flex flex-row w-full">
        <CategoryNavigation />
        <MainBanner />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-4xl text-black font-bold mt-[140px] mb-6 border-gray-300 border-t-[1px]  pt-8 ">
          Check out Discounted Products!
        </h1>
        <FeaturedProducts />
      </div>
      <ProductListSmall />
    </main>
  );
}
