import { useState } from "react";
import Calendar from "./Calendar";
import EventCard from "./EventCard";
import sampleEvents from "@features/index/data/sample-events.json";

export type CalendarEvent = {
  start: Date;
  end: Date;
  name: string;
  desc: string;
  category: string;
};

const calendarEvents: CalendarEvent[] = sampleEvents.map(event => ({
  ...event,
  start: new Date(event.start),
  end: new Date(event.end)
}));

const CalendarSection = () => {
  const [date, setDate] = useState(new Date());

  const currentMonthEvents = calendarEvents.filter(event => 
    (event.start.getMonth() === date.getMonth() && event.start.getFullYear() === date.getFullYear()) ||
    (event.end.getMonth() === date.getMonth() && event.end.getFullYear() === date.getFullYear())
  );

  return (
    <section className="mx-auto max-w-360 my-20 px-5 font-[ArgentumSans]">
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

        <div className="w-1/2 max-h-139 overflow-y-scroll overflow-x-hidden pr-4 font-[Allerta]">
          {calendarEvents.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;