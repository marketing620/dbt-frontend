"use client";

import * as React from "react";
import { format, subDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    value: 100,
    date: "2022-01-01",
  },
  {
    value: 50,
    date: "2022-01-02",
  },
  {
    value: 300,
    date: "2022-01-03",
  },
  {
    value: 100,
    date: "2022-01-04",
  },
  {
    value: 500,
    date: "2022-01-05",
  },
];

export default function Chart() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  return (
    <div className="container mb-4">
      <div className="card shadow-sm rounded-4 border-0 p-4">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <h5 className="fw-bold mb-0 text-dark">Visitors Over Time</h5>
          <div className={cn("grid gap-2")}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal bg-white rounded-3",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 rounded-3 bg-white shadow-lg"
                align="end"
              >
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={data}>
            <XAxis dataKey="date" tick={{ fill: "#6c757d", fontSize: 12 }} tickLine={false} axisLine={false} dy={10} />
            <YAxis tick={{ fill: "#6c757d", fontSize: 12 }} tickLine={false} axisLine={false} dx={-10} />
            <Tooltip
              contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6 }}
              stroke="#2563eb"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
