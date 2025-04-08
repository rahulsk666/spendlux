"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("daily");

  return (<section className="mt-2">
    <Tabs 
      defaultValue="daily" 
      className="w-full max-w-[380px] justify-self-center"
      onValueChange={(value) => setActiveTab(value)}
    >
      <TabsList className="grid w-full h-[45px] grid-cols-3 rounded-full bg-appbar-primary text-white">
        <TabsTrigger value="daily" className="rounded-full h-full data-[state=active]:bg-white data-[state=active]:text-black">Daily</TabsTrigger>
        <TabsTrigger value="monthly" className="rounded-full h-full data-[state=active]:bg-white data-[state=active]:text-black">Monthly</TabsTrigger>
        <TabsTrigger value="yearly" className="rounded-full h-full data-[state=active]:bg-white data-[state=active]:text-black">Yearly</TabsTrigger>
      </TabsList>
    </Tabs>
  </section>);
}
