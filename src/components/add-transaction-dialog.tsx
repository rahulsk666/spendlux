import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useEffect } from "react";

export const CATEGORIES = [
  { value: "travel", label: "Travel" },
  { value: "food", label: "Food" },
  { value: "house", label: "Housing" },
];

interface AddTransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

const formSchema = z.object({
  title: z.string().min(2).max(20),
  description: z.string().min(2).max(50),
  category: z.enum(
    CATEGORIES.map((category) => category.value) as [string, ...string[]]
  ),
  amount: z.number().min(1).max(1000000),
  // fromDate: z.date(),
  // toDate: z.date(),
});

export function AddTransactionDialog({
  open,
  onOpenChange,
  className,
}: AddTransactionDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      amount: 0,
      category: undefined,
      // fromDate: undefined,
      // toDate: undefined,
    },
  });

  // Reset form when dialog closes
  useEffect(() => {
    console.log("Dialog open state changed:", open);
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`h-auto bg-[#1F2937]/90 border-none ${className}`}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-left text-white">
                Add New Transaction
              </DialogTitle>
              <DialogDescription className="text-left">
                Add Your Spend, Stay in Control.
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-slate-900"
                      placeholder="Enter Title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Description"
                      {...field}
                      className="resize-none bg-slate-900"
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-slate-900"
                      type="number"
                      placeholder="Enter Amount"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(e.target.valueAsNumber || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" bg-slate-900 text-white">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-900 text-white">
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <div className="flex flex-row gap-1"> */}
            {/* <FormField
                control={form.control}
                name="fromDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <DateTimePicker
                        placeholder="Expenses from.."
                        date={field.value}
                        setDate={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            {/* <FormField
                control={form.control}
                name="toDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <DateTimePicker
                        placeholder="Expenses to.."
                        date={field.value}
                        setDate={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            {/* </div> */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 active:bg-blue-800 focus:bg-blue-800 text-white"
            >
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
