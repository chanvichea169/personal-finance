"use client";

import { useState } from "react";
import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";

export default function DashboardPage() {
  const [language, setLanguage] = useState({
    code: "Eng",
    flag: "/images/uk.png",
  });

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <DataGrid language={language} />
      <DataCharts />
    </div>
  );
}
