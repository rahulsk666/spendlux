"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { format } from "date-fns"; // Import format for displaying date nicely

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils"; // Make sure you have your cn utility

interface DateTimePickerProps {
  value?: Date; // Value from react-hook-form
  onChange: (date?: Date) => void; // onChange from react-hook-form
  disabled?: (date: Date) => boolean; // Optional prop to disable dates
  placeholder?: string; // Optional placeholder for the date button
}

export function DateTimePicker({
  value,
  onChange,
  disabled,
  placeholder = "Select date",
}: DateTimePickerProps) {
  const [open, setOpen] = React.useState(false);

  // Internal state to manage the time string from the input
  const [time, setTime] = React.useState<string>(
    value ? format(value, "HH:mm:ss") : "00:00:00" // Default to 00:00:00 if no initial value
  );

  // Effect to update the internal time state if the external value changes
  React.useEffect(() => {
    if (value) {
      setTime(format(value, "HH:mm:ss"));
    } else {
      setTime("00:00:00");
    }
  }, [value]);

  // Handle date selection from Calendar
  const handleDateSelect = (selectedDate?: Date) => {
    if (selectedDate) {
      // Combine selected date with current time
      const [hours, minutes, seconds] = time.split(":").map(Number);
      selectedDate.setHours(hours, minutes, seconds, 0);
      onChange(selectedDate);
    } else {
      onChange(undefined); // Clear date if unselected
    }
    setOpen(false); // Close popover after selection
  };

  // Handle time input change
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setTime(newTime);

    if (value) {
      // If a date is already selected, update its time
      const [hours, minutes, seconds] = newTime.split(":").map(Number);
      const updatedDate = new Date(value);
      updatedDate.setHours(hours, minutes, seconds, 0);
      onChange(updatedDate);
    } else {
      // If no date selected, create a new Date object with today's date and selected time
      const [hours, minutes, seconds] = newTime.split(":").map(Number);
      const today = new Date();
      today.setHours(hours, minutes, seconds, 0);
      onChange(today);
    }
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3 bg-slate-900">
        <Popover open={open} onOpenChange={setOpen} modal={true}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className={cn(
                "w-32 justify-between font-normal",
                !value && "text-muted-foreground" // Apply muted text when no date selected
              )}
            >
              {value ? format(value, "dd/MM/yyyy") : placeholder}{" "}
              {/* Display formatted date */}
              <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0 text-white bg-slate-900 border-slate-900"
            align="start"
          >
            <Calendar
              mode="single"
              selected={value} // Use 'value' from props
              captionLayout="dropdown"
              className="bg-slate-900"
              onSelect={handleDateSelect} // Use combined handler
              disabled={disabled} // Pass disabled prop to Calendar
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Input
          type="time"
          id="time-picker"
          step="1"
          value={time} // Controlled time input
          onChange={handleTimeChange} // Handle time change
          className="bg-slate-900 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  );
}
