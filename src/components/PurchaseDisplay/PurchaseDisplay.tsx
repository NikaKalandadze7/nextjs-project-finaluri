"use client";
import React, { useEffect, useState } from "react";
import PurchasedItems from "../PurchasedItems/PurchasedItems";
import { PurchaseInterface } from "@/types";
import usePurchasesStore from "@/store/PurchasesStore";

const PurchaseDisplay = () => {
  const { purchases, fetchPurchases } = usePurchasesStore();

  useEffect(() => {
    fetchPurchases();
  }, [fetchPurchases]);

  return (
    <div className="flex flex-row flex-wrap gap-4 w-full">
      {Array.isArray(purchases) && purchases.length > 0 ? (
        purchases.map((purchase) => (
          <PurchasedItems
            key={purchase.id}
            id={purchase.id}
            created_at={purchase.created_at}
            updated_at={purchase.updated_at}
            totalPrice={purchase.totalPrice}
            totalItems={purchase.totalItems}
          />
        ))
      ) : (
        <p>No Purchases found</p>
      )}
    </div>
  );
};

export default PurchaseDisplay;
