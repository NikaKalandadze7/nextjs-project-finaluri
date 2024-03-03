"use client";
import React, { useState } from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import { countries } from "@/utils/consts";
import MainButton from "../MainButton/MainButton";
import PaymentForm from "../PaymentForm/PaymentForm";

const ShippingAddress = () => {
  const [address, setAddress] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<number | string>("");

  return (
    <div className="flex flex-col justify-center w-[50%]  gap-5">
      <div className="flex flex-row justify-between items-center gap-5">
        <LabeledInput
          label="Shipping Address"
          disabled={false}
          value={address}
          maxLength={99}
          type="text"
          handleChange={(e) => setAddress(e)}
        />
        <select
          className="select select-error w-[100%] mt-4  bg-white text-black"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option disabled selected>
            Select Country
          </option>
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-row justify-between gap-5">
        <LabeledInput
          label="City"
          disabled={false}
          value={city}
          maxLength={99}
          type="text"
          handleChange={(e) => setCity(e)}
        />
        <LabeledInput
          label="Zip Code"
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
        Payment
      </button>

      <PaymentForm />
    </div>
  );
};

export default ShippingAddress;
