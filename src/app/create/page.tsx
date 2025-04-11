import React from "react";
import SemiCircleProgressBar from "@/components/semiCircleProgressBar";
import Link from "next/link";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectItem } from "@radix-ui/react-select";
import Datepicker from "@/components/datepicker";
import { Button } from "@/components/ui/button";

export const CATEGORIES = [
  { value: "travel", label: "Travel" },
  { value: "food", label: "Food" },
  { value: "house", label: "Housing" },
];

export default function Profile() {
  return (
    <section className="mt-2">
      <div className="rounded">
        <SemiCircleProgressBar />
      </div>
      <div className="grid grid-cols-2 m-2 p-3 text-xs font-normal">
        <div className="col-span-1">Recent Transactions</div>
        <div className="text-right underline decoration-white/25">
          <Link href={"/"}>View All</Link>
        </div>
      </div>
      <div className="bg-gradient-to-r from-form-background-1 to-form-background-2 from-100% to-100% m-1 rounded-xl min-h-screen min-w-fit">
        <Form action={""}>
          <div className="grid grid-flow-row auto-rows-max">
            <div className="p-3">
              <span className="text-lg font-bold">Add New Transaction</span>
            </div>
            <div className="p-2 pt-4">
              <Input
                name="title"
                className="rounded-full bg-input text-xs"
                placeholder="Enter Title"
              />
            </div>
            <div className="p-2 py-3">
              <Textarea
                name="description"
                placeholder="Enter Description"
                className="resize-none bg-input text-xs rounded-2xl min-h-[90px]"
              />
            </div>
            <div className="p-2 py-3">
              <Input
                name="amount"
                className="rounded-full bg-input text-xs"
                placeholder="Enter Amount"
              />
            </div>
            <div className="p-2 py-3">
              <Select name="category">
                <SelectTrigger className="rounded-full bg-input text-xs *:opacity-25">
                  <SelectValue placeholder="Enter Category" />
                </SelectTrigger>
                <SelectContent className="bg-input rounded-lg border-none text-white focus:bg-slate-300">
                  {CATEGORIES?.map((category) => {
                    return (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="p-2 py-3 gap-3 flex">
              <Datepicker />
              <Datepicker />
            </div>
            <div className="py-3 px-2">
              <Button
                className=" w-full py-3 bg-appbar-blue *:hover:bg-appbar-blue rounded-full"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
}
