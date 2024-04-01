"use client";
import React, { useState } from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import { countries } from "@/utils/consts";
import MainButton from "../MainButton/MainButton";
import PaymentForm from "../PaymentForm/PaymentForm";
import { useTranslations } from "next-intl";
const ShippingAddress = () => {
  const [address, setAddress] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<number | string>("");
  const t = useTranslations("Checkout");
  return (
    <div className="flex flex-col justify-center zero:w-full lg:w-[50%] gap-5">
      <div className="flex zero:flex-col md:flex-row justify-between items-center gap-5">
        <LabeledInput
          label={t("shippingAddress")}
          disabled={false}
          value={address}
          maxLength={99}
          type="text"
          handleChange={(e) => setAddress(e)}
        />
        <select
          className="select select-error w-full mt-4 bg-primary text-secondary"
          onChange={(e) => setCountry(e.target.value)}
          defaultValue=""
        >
          <option disabled value="">
            {t("selectCountry")}
          </option>
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className="flex zero:flex-col md:flex-row justify-between gap-5">
        <LabeledInput
          label={t("city")}
          disabled={false}
          value={city}
          maxLength={99}
          type="text"
          handleChange={(e) => setCity(e)}
        />
        <LabeledInput
          label={t("zipCode")}
          disabled={false}
          value={zipCode}
          maxLength={8}
          type="number"
          handleChange={(e) => setZipCode(e)}
        />
      </div>
      <button
        type="button"
        className={`btn btn-error btn-outline w-full `}
        onClick={() => document.getElementById("my_modal_5").showModal()}
        disabled={
          country === "" || city === "" || address === "" || zipCode === ""
            ? true
            : false
        }
      >
        {t("payment")}
      </button>

      <PaymentForm />
    </div>
  );
};

export default ShippingAddress;
