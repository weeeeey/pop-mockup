import { Calendar } from "@/components/ui/calendar";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DateRange } from "react-day-picker";

import { cn } from "zero-cnn";

interface CategoryCalendarProps {
  className: string;
  isOpen: boolean;
  handleDate: (s: Date, e: Date) => void;
}
const defaultRange: DateRange = {
  from: new Date(),
  to: new Date(),
};

export function CategoryCalendar({
  className,
  handleDate,
  isOpen,
}: CategoryCalendarProps) {
  const [range, setRange] = useState<DateRange | undefined>(defaultRange);

  useEffect(() => {
    if (range && range.from && range.to) handleDate(range.from, range.to);
  }, [range, handleDate]);

  if (!isOpen) return;

  return (
    <Calendar
      mode="range"
      onSelect={(r) => {
        if (r) {
          const { from, to } = r;
          setRange({
            from: from,
            to: to || from,
          });
        }
      }}
      selected={range}
      className={cn("relative z-50 rounded-md border bg-white", className)}
    />
  );
}
