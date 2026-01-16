import { useMemo } from "react";
import { getCalendarDays, months, daysOfWeek, getColorFromCategory } from "../utils/calendar-utils";
import ArrowButton from "@components/ArrowButton";
import type { CalendarEvent } from "./CalendarSection";

interface CalendarProps {
  year: number;
  month: number;
  className?: string;
  events?: CalendarEvent[];
  onChange?: (date: Date) => void;
}

const Calendar = ({ year, month, className = "", events = [], onChange }: CalendarProps) => {
  const calendarDays = useMemo(
    () => getCalendarDays(year, month),
    [year, month]
  );

  const handleMonthChange = (offset: number) => onChange?.(new Date(year, month + offset, 1));

  return (
    <div className={`inline-block min-w-112.5 ${className}`}>
      <header className="flex justify-between items-center mb-8">
        <ArrowButton direction="Left" onClick={() => handleMonthChange(-1)} />

        <div className="flex text-2xl font-medium bg-white border border-slate-300 rounded-lg overflow-hidden">
          <span className="py-2 px-6">{months[month]}</span>
          <span className="py-2 px-6 border-l border-slate-300 bg-slate-50">{year}</span>
        </div>

        <ArrowButton direction="Right" onClick={() => handleMonthChange(1)} />
      </header>

      {/* Weekdays */}
      <div className="grid grid-cols-7 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-slate-500 font-semibold uppercase text-xs tracking-widest">
            {day}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 border-t border-l border-slate-100">
        {calendarDays.map((dayObj, index) => {
          const isSunday = dayObj.fullDate.getDay() === 0;
          const activeEvent = dayObj.isCurrentMonth
            ? events.find((e) => dayObj.fullDate >= e.start && dayObj.fullDate <= e.end)
            : null;

          const isStart = activeEvent && dayObj.date === activeEvent.start.getDate();
          const isEnd = activeEvent && dayObj.date === activeEvent.end.getDate();

          const textColor = !dayObj.isCurrentMonth
            ? isSunday
              ? "text-red-200"
              : "text-slate-300"
            : isSunday
              ? "text-red-500"
              : "text-slate-700";

          return (
            <div key={index} className={`py-4 text-2xl text-center border-r border-b border-slate-100 relative ${textColor}`}>
              <div
                className={`
                  py-1 transition-all
                  ${activeEvent ? `bg-${getColorFromCategory(activeEvent.category)}-100` : ""}
                  ${isStart ? "rounded-l-lg" : ""}
                  ${isEnd ? "rounded-r-lg" : ""}
                `}
              >
                {dayObj.date}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
