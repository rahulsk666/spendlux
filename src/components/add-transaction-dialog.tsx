"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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

interface AddTransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddTransactionDialog({ open, onOpenChange }: AddTransactionDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-[550px] bg-[#1F2937]/90 border-none rounded-t-2xl p-0">
        <div className="flex flex-col h-full">
          {/* Handle bar */}
          <div className="flex justify-center pt-3">
            <div className="w-12 h-1 bg-white/20 rounded-full" />
          </div>

          <div className="px-6 py-3">
            <DialogTitle className="text-lg font-bold text-white">
              Add New Transaction
            </DialogTitle>
            <DialogDescription className="sr-only">
              Form to add a new transaction with fields for title, description, amount, category, and dates.
            </DialogDescription>
          </div>

          <form action="" className="flex-1 overflow-y-auto p-2 space-y-3">
            <div>
              <Input
                name="title"
                className="w-full rounded-full bg-white/[0.07] border-0 text-white/90 h-9 px-6 placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Enter Title"
              />
            </div>
            <div>
              <Textarea
                name="description"
                placeholder="Enter Description"
                className="resize-none bg-white/[0.07] border-0 text-white/90 rounded-2xl min-h-[80px] px-6 py-4 placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div>
              <Input
                name="amount"
                className="w-full rounded-full bg-white/[0.07] border-0 text-white/90 h-9 px-6 placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Enter Amount"
              />
            </div>
            <div>
              <Select name="category">
                <SelectTrigger className="w-full rounded-full bg-white/[0.07] border-0 text-white/90 h-9 px-6 placeholder:text-white/40 focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Enter Category" className="text-white/40" />
                </SelectTrigger>
                <SelectContent className="bg-[#1F2937] border-none text-white/90">
                  {CATEGORIES?.map((category) => (
                    <SelectItem 
                      key={category.value} 
                      value={category.value}
                      className="focus:bg-white/10 focus:text-white"
                    >
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <Datepicker />
              </div>
              <div className="flex-1">
                <Datepicker />
              </div>
            </div>
          </form>

          <div className="p-6 mt-auto border-t border-white/[0.06]">
            <Button
              className="w-full h-11 bg-[#007AFF] hover:bg-[#007AFF]/90 rounded-full text-base font-medium"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 