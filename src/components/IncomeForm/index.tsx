"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { DialogFooter } from "../ui/dialog";

const FormSchema = z.object({
  name: z.string().nonempty(),
  amount: z.string().nonempty(),
  date: z.date(),
  tag: z.string().nonempty(),
  id: z.string().optional(),
  type: z.string().optional(),
});

type FormProps = {
  type: string;
  onFinish: (data: z.infer<typeof FormSchema>, type: string) => void;
};

const IncomeForm = ({ type, onFinish }: FormProps) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      amount: "",
      date: new Date(),
      tag: "",
    },
  });
  const [date, setDate] = React.useState<Date>();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onFinish(data, type))}
        className="grid gap-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center">
              <FormLabel htmlFor="name" className="text-right mr-4">
                Name
              </FormLabel>
              <FormControl>
                <Input id="name" className="col-span-3" {...field} />
              </FormControl>
              <FormMessage className="col-span-4 text-right" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center">
              <FormLabel htmlFor="amount" className="text-right mr-4">
                Amount
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  id="amount"
                  className="col-span-3"
                  {...field}
                />
              </FormControl>
              <FormMessage className="col-span-4 text-right" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center">
              <FormLabel className="text-right mr-4">Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "col-span-3 pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className="col-span-4 text-right" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center">
              <FormLabel className="text-right mr-4">Tags</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select appropriate tag" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tags</SelectLabel>
                    <SelectItem value="salary">Salary</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage className="col-span-4 text-right" />
            </FormItem>
          )}
        />
        <DialogFooter className="mt-4">
          <Button className="capitalize" type="submit">
            Add {type}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default IncomeForm;
