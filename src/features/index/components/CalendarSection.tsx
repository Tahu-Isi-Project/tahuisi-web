import { useState } from "react";
import Calendar, { type CalendarEvent } from "./Calendar";
import { formatEventDateRange } from "@features/index/utils/calendar-utils";
import sampleEvents from "@features/index/data/sample-events.json";

const events: CalendarEvent[] = sampleEvents.map(event => ({
  ...event,
  start: new Date(event.start),
  end: new Date(event.end)
}));

const EventCard = ({ event }: { event: CalendarEvent }) => {
  const { dayRange, monthRange } = formatEventDateRange(event.start, event.end);
  
  const colors: Record<string, string> = {
    red: "border-red-400 border-l-red-400",
    blue: "border-blue-400 border-l-blue-400",
  };

  return (
    <div className={`flex border-y border-r border-slate-300 bg-white mb-4 border-l-8 ${colors[event.color] || 'border-slate-400'}`}>
      <div className="w-40 p-5 shrink-0 text-center">
        <div className="text-5xl font-light">{dayRange}</div>
        <div className="text-xl text-slate-500">{monthRange}</div>
      </div>
      
      <div className={`flex-1 border-l-2 p-5 border-slate-100`}>
        <h3 className="text-3xl mb-2">{event.name}</h3>
        <p className="text-slate-600 line-clamp-2">{event.desc}</p>
      </div>
    </div>
  );
};

const CalendarSection = () => {
  const [date, setDate] = useState(new Date());

  const currentMonthEvents = events.filter(event => 
    (event.start.getMonth() === date.getMonth() && event.start.getFullYear() === date.getFullYear()) ||
    (event.end.getMonth() === date.getMonth() && event.end.getFullYear() === date.getFullYear())
  );

  return (
    <section className="mx-auto max-w-360 mt-20 px-10 font-[ArgentumSans]">
      <header className="mb-10">
        <h1 className="text-6xl mb-4">Calendar</h1>
        <div className="flex w-1/4 h-2 space-x-1">
          <div className="bg-[#EE6983] flex-6" />
          <div className="bg-[#FFC4C4] flex-10" />
          <div className="bg-[#FCF5EE] flex-6" />
        </div>
      </header>

      <div className="flex gap-20">
        <div className="w-1/2">
          <Calendar
            onChange={setDate}
            month={date.getMonth()}
            year={date.getFullYear()}
            events={currentMonthEvents}
            className="w-full"
          />
        </div>

        <div className="w-1/2 h-150 overflow-auto pr-4 font-[Allerta]">
          {events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;