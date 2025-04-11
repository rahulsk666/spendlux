"use client";

import React from "react";
import { 
  Dialog, 
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import Datepicker from "@/components/datepicker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { X } from "lucide-react";

interface AddTransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Category {
  value: string;
  label: string;
}

const CATEGORIES: Category[] = [
  { value: "travel", label: "Travel" },
  { value: "food", label: "Food" },
  { value: "house", label: "Housing" },
];

export function AddTransactionDialog({
  open,
  onOpenChange,
}: AddTransactionDialogProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

  const formattedDate = React.useMemo(() => {
    if (!selectedDate) return '';
    return format(selectedDate, 'MMM dd, yyyy');
  }, [selectedDate]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-t-3xl p-0 bg-[#1C2127] border-none">
        <div className="max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-4">
            <div className="relative">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-lg font-semibold text-center">
                  Add New Transaction
                </DialogTitle>
              </DialogHeader>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-8 w-8 rounded-full hover:bg-[#2B303B]"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            
            <DialogDescription className="sr-only">
              Form to add a new transaction with fields for title, description, amount, category, and date
            </DialogDescription>
            
            <form className="space-y-4">
              <div>
                <Input
                  name="title"
                  className="bg-[#2B303B] border-none rounded-xl text-sm h-12"
                  placeholder="Enter Title..."
                />
              </div>
              <div>
                <Textarea
                  name="description"
                  placeholder="Enter description..."
                  className="bg-[#2B303B] border-none rounded-xl text-sm min-h-[120px] resize-none"
                />
              </div>
              <div>
                <Input
                  name="amount"
                  type="number"
                  className="bg-[#2B303B] border-none rounded-xl text-sm h-12"
                  placeholder="Enter Amount"
                />
              </div>
              <div>
                <Select name="category">
                  <SelectTrigger 
                    className={cn(
                      "bg-[#2B303B] border-none rounded-xl text-sm h-12",
                      "data-[placeholder]:text-muted-foreground text-white"
                    )}
                  >
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent 
                    className="bg-[#2B303B] border-none rounded-xl"
                    position="popper"
                    sideOffset={4}
                  >
                    {CATEGORIES.map((category: Category) => (
                      <SelectItem 
                        key={category.value} 
                        value={category.value}
                        className="text-white hover:bg-[#0066FF] focus:bg-[#0066FF] focus:text-white rounded-lg cursor-pointer"
                      >
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Datepicker 
                  className="bg-[#2B303B] border-none rounded-xl text-sm h-12"
                  placeholder={formattedDate || "Select Date"}
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                />
              </div>
              <div className="pt-2">
                <Button
                  className="w-full h-12 bg-[#0066FF] hover:bg-[#0066FF]/90 rounded-xl text-sm font-medium"
                  type="submit"
                >
                  Create
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 