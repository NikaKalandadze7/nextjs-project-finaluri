import { cancelPurchaseService } from "@/services";
import usePurchasesStore from "@/store/PurchasesStore";
import { PurchaseInterface } from "@/types";
import React from "react";
import { useTranslations } from "next-intl"; // Make sure to import useTranslations

const PurchasedItems: React.FC<PurchaseInterface> = ({
  totalPrice,
  totalItems,
  id,
  created_at,
  updated_at,
}: PurchaseInterface) => {
  const { fetchPurchases } = usePurchasesStore();
  const t = useTranslations("PurchasedItems"); // Use the translation hook

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const cancelOrder = async () => {
    try {
      await cancelPurchaseService({ productId: id });
      await fetchPurchases();
    } catch (error) {
      console.error(`${t("failedToRemove")}`, error);
    }
  };

  return (
    <div className="card w-[calc(33%-20px)] bg-white text-black shadow-xl ">
      <div className="card-body">
        <h2 className="card-title">
          {t("orderPlacedOn")} {formatDate(created_at)}
        </h2>
        <p>
          {t("totalItemsPurchased")}
          <span className="text-[#ef4c53] font-bold text-lg">
            {" "}
            {totalItems}
          </span>
        </p>
        <p>
          {t("totalCost")}
          <span className="text-[#ef4c53] font-bold text-lg">
            ${totalPrice}
          </span>
        </p>
        <div className="badge badge-accent badge-outline h-full">
          {t("orderId")} {id}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={() => cancelOrder()}>
            {t("cancelOrder")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasedItems;
