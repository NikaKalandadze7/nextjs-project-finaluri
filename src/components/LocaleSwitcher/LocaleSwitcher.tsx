"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onLanguageSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className="border-2 rounded">
      <select
        defaultValue={localActive}
        disabled={isPending}
        onChange={onLanguageSelect}
      >
        <option value="en">English</option> <option value="ge">Georgian</option>
      </select>
    </label>
  );
};

export default LocaleSwitcher;
