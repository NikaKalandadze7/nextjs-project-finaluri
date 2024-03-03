"use client";
import React, { useEffect, useState } from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import { useShoppingCartStore } from "@/store";
import { purchaseService, removeFromCartService } from "@/services";
interface Month {
  value: string;
  name: string;
}
const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [months, setMonths] = useState<Month[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [error, setError] = useState<boolean>(false);
  const { shoppingCart, totalItemCount, totalPrice, fetchCartItems } =
    useShoppingCartStore();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const monthsArray: Month[] = Array.from({ length: 12 }, (_, i) => {
      const monthValue = (i + 1).toString().padStart(2, "0");
      const monthName = new Date(0, i).toLocaleString("default", {
        month: "long",
      });
      return { value: monthValue, name: monthName };
    }).slice(currentMonth);
    const yearsArray: number[] = Array.from(
      { length: 10 },
      (_, i) => currentYear + i
    );

    setMonths(monthsArray);
    setYears(yearsArray);
  }, []);

  const placeOrder = async () => {
    try {
      await purchaseService({
        totalPrice,
        totalItems: totalItemCount,
      });
      for (const item of shoppingCart) {
        await removeFromCartService({ id: item.id, removeAll: true });
      }
      await fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle relative"
    >
      <div className="modal-box bg-white flex gap-6 flex-col">
        <h3 className="font-bold text-lg">
          Enter your Payment Information to Finalize Order
        </h3>
        <LabeledInput
          label="Card Number"
          disabled={false}
          value={cardNumber}
          maxLength={34}
          type="text"
          handleChange={(e) => setCardNumber(e)}
        />
        <LabeledInput
          label="Name on Card"
          disabled={false}
          value={nameOnCard}
          maxLength={99}
          type="text"
          handleChange={(e) => setNameOnCard(e)}
        />
        <div className="flex flex-row justify-between gap-5">
          <select
            className="select select-error w-full mt-4 bg-white text-black"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option disabled value="">
              Select Month
            </option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.name}
              </option>
            ))}
          </select>

          <select
            className="select select-error w-full mt-4 bg-white text-black"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option disabled value="">
              Select Year
            </option>
            {years.map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-error text-white"
              onClick={() => placeOrder()}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default PaymentForm;
