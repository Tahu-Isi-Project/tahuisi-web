import { formatEventDateRange, getColorFromCategory } from "../utils/calendar-utils";
import type { CalendarEvent } from "./CalendarSection";

const EventCard = ({ event }: { event: CalendarEvent }) => {
  const { dayRange, monthRange } = formatEventDateRange(event.start, event.end);

  return (
    <div className={`flex border-y border-r border-slate-300 bg-white mb-4 border-l-8 ${getColorFromCategory(event.category) || 'border-slate-400'}`}>
      <div className="w-40 p-4 shrink-0 text-center">
        <div className="text-4xl font-light">{dayRange}</div>
        <div className="text-xl text-slate-500">{monthRange}</div>
      </div>
      
      <div className={`flex-1 border-l-2 p-5 border-slate-100`}>
        <h3 className="text-3xl mb-2">{event.name}</h3>
        <p className="text-slate-600 line-clamp-2">{event.desc}</p>
      </div>
    </div>
  );
};

export default EventCard;