"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePicker } from "./time-picker";
import { Matcher } from "react-day-picker";

interface DateTimePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  disabled?: Matcher | Matcher[] | undefined;
  className?: string | undefined;
  placeholder?: string | undefined;
}

export function DateTimePicker({
  date,
  setDate,
  disabled,
  placeholder,
}: DateTimePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date &&
              "bg-slate-900 text-white focus:bg-slate-900 focus:text-white hover:bg-slate-900 hover:text-white"
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, "PPP HH:mm:ss")
          ) : placeholder ? (
            <span>{placeholder}</span>
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 pointer-events-auto bg-slate-900 text-white border-slate-900"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={disabled} // Disable dates beyond today
          className="bg-slate-900 text-white pointer-events-auto"
          classNames={{
            day_selected:
              "bg-white text-slate-900 focus:text-slate-900 hover:text-slate-900",
          }}
          initialFocus
        />
        <div className="p-3 border-t border-border bg-slate-900 border-slate-900">
          <TimePicker date={date} setDate={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
