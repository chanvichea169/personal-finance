"use client";

import { DataCard, DataCardLoading } from "@/components/data-card";
import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { formatDateRange } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { getText } from "@/lib/translations"; // Import the getText function

type DataGridProps = {
  language: {
    code: string;
    flag: string;
  };
};

export const DataGrid = ({ language }: DataGridProps) => {
  const { data, isLoading } = useGetSummary();

  const params = useSearchParams();

  const toParam = params.get("to");
  const fromParam = params.get("from");

  const to = toParam ? new Date(toParam) : undefined;
  const from = fromParam ? new Date(fromParam) : undefined;

  const dateRangLabel = formatDateRange({ to, from });

  const getTextWithClass = (key: string) => {
    const text = getText(language.code, key);
    return language.code === "KH" ? (
      <span className="khmer-font">{text}</span>
    ) : (
      text
    );
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        title={getTextWithClass("Remaining")}
        value={data?.remainingAmount}
        percetageChange={data?.remainingChange}
        icon={FaPiggyBank}
        dateRange={dateRangLabel}
      />
      <DataCard
        title={getTextWithClass("Income")}
        value={data?.incomeAmount}
        percetageChange={data?.incomeChange}
        icon={FaArrowTrendUp}
        dateRange={dateRangLabel}
      />
      <DataCard
        title={getTextWithClass("Expenses")}
        value={data?.expensesAmount}
        percetageChange={data?.expensesChange}
        icon={FaArrowTrendDown}
        dateRange={dateRangLabel}
      />
    </div>
  );
};
