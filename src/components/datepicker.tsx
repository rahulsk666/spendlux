"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  className?: string;
  placeholder?: string;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

export function DatePicker({ 
  className, 
  placeholder = "Pick a date",
  selected,
  onSelect 
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(selected);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setDate(selected);
  }, [selected]);

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    onSelect?.(newDate);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0" 
        align="start"
        onPointerDownOutside={(e) => {
          // Only close if clicking outside the calendar
          if (!(e.target as HTMLElement).closest('.rdp')) {
            setOpen(false);
          }
        }}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker;