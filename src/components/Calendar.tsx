import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface CalendarProps {
  year: number;
  month: number;
  style?: string;
  events?: {
    start: Date,
    end: Date,
    name: string,
    color: string
  }[],
  onChange?: Function
}

const Calendar = ({year, month, style = "", events = [], onChange = () => {}}: CalendarProps) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const earlyOffset = new Date(year, month, 1).getDay();
  const monthLastDate = new Date(year, month, 0).getDate();
  const currentMonth = new Date(year, month + 1, 0).getDate();
  const lateOffset = new Date(year, month, currentMonth);
  const lateOffsetLength = 6 * 7 - (currentMonth + earlyOffset);

  useEffect(() => {
    console.log(events);
  }, [month])

  const changeYear = () => {

  }

  const changeMonth = (num: number) => {
    onChange(new Date(year, month + num, 1));
  }

  let eventIndex = 0;
  let inEvent = false;
  return (
    <div className={"inline-block " + style}>
      {/* <div className="bg-gray-900/50 z-3 fixed left-0 top-0 w-full h-full">

      </div> */}
      <div className="text-center text-4xl mb-7 flex justify-between items-center">
        <button onClick={() => changeMonth(-1)} className="bg-white cursor-pointer hover:bg-slate-200 p-2 rounded-full border border-slate-300 shadow-lg"><IconCaretLeftFilled size={30}/></button>
        <div className="flex cursor-pointer bg-white rounded-lg border border-slate-300">
          <div className="py-3 pr-2.5 pl-5">
            {months[lateOffset.getMonth()]} 
          </div>
          <div className="py-3 border-l border-slate-300 pl-2.5 pr-5">
            {year}
          </div>
        </div>
        <button onClick={() => changeMonth(1)} className="bg-white cursor-pointer hover:bg-slate-200 p-2 rounded-full border border-slate-300 shadow-lg"><IconCaretRightFilled size={30}/></button>
      </div>
      {/* <div className="text-center text-4xl mb-7">
        {months[lateOffset.getMonth()]} {year}
      </div> */}
      <div className="flex flex-wrap text-xl text-center">
        <div className="w-[14.28%] py-2">Sun</div>
        <div className="w-[14.28%] py-2">Mon</div>
        <div className="w-[14.28%] py-2">Tue</div>
        <div className="w-[14.28%] py-2">Wed</div>
        <div className="w-[14.28%] py-2">Thu</div>
        <div className="w-[14.28%] py-2">Fri</div>
        <div className="w-[14.28%] py-2">Sat</div>
      </div>
      <div className="flex flex-wrap text-center">
        {Array.from({length: earlyOffset}, (_, i) => i).reverse().map((x, i) => (
          <div key={i} className={(0 == i ? "text-red-300" : "text-slate-400") + 
            " w-[14.28%] py-2 text-3xl border-4 border-transparent"}>{monthLastDate - x}</div>
        ))}
        {new Array(currentMonth).fill(true).map((_, i) => {
          const date = i + 1;
          const event = events[eventIndex];
          let res;
          if (event) {
            const start = date === event.start.getDate();
            const end = date === event.end.getDate();
            if (start || event.start.getMonth() < month) inEvent = true;
            res = (
            <div key={i} className={((earlyOffset + date) % 7 == 1 ? "text-red-500 " : "" ) + 
              "w-[14.28%] text-3xl"}>
                <div className={"border-4 border-transparent py-2" + (inEvent ? " bg-"+event.color+"-300"  + 
                (start ? " rounded-l-lg" :"") + (end ? " rounded-r-lg" : "") : "")}>
                  {date}
                </div>
            </div>)
            if (end) {
              inEvent = false;
              eventIndex++;
            }
          } else {
            res = (
            <div key={i} className={((earlyOffset + date) % 7 == 1 ? "text-red-500 " : "" ) + 
              "w-[14.28%] text-3xl"}>
                <div className={"border-4 border-transparent py-2"}>
                  {date}
                </div>
            </div>)
          }
          return res;
        })}
        {Array.from({length: lateOffsetLength}, (_, i) => i + 1).map(i => (
          <div key={i} className={((lateOffsetLength - i + 1) % 7 === 0 ? "text-red-300" : "text-slate-400") + 
            " w-[14.28%] py-2 text-3xl border-4 border-transparent"}>{i}</div>
        ))}
      </div>
    </div>
  )
}

export default Calendar;