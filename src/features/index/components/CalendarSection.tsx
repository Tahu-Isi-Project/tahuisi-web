import Calendar from "@root/src/components/Calendar.tsx";
import { twoDigits } from "@root/src/utils";
import { useEffect, useState } from "react";

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
const colors = [
  {bg:"bg-red-300", border1: "border-red-400", border2: "border-red-300"},
  {bg:"bg-orange-300", border1: "border-orange-400", border2: "border-orange-300"},
  {bg:"bg-amber-300", border1: "border-amber-400", border2: "border-amber-300"},
  {bg:"bg-lime-300", border1: "border-lime-400", border2: "border-lime-300"},
  {bg:"bg-green-300", border1: "border-green-400", border2: "border-green-300"},
  {bg:"bg-emerald-300", border1: "border-emerald-400", border2: "border-emerald-300"},
  {bg:"bg-teal-300", border1: "border-teal-400", border2: "border-teal-300"},
  {bg:"bg-cyan-300", border1: "border-cyan-400", border2: "border-cyan-300"},
  {bg:"bg-sky-300", border1: "border-sky-400", border2: "border-sky-300"},
  {bg:"bg-blue-300", border1: "border-blue-400", border2: "border-blue-300"},
  {bg:"bg-indigo-300", border1: "border-indigo-400", border2: "border-indigo-300"},
  {bg:"bg-violet-300", border1: "border-violet-400", border2: "border-violet-300"},
  {bg:"bg-purple-300", border1: "border-purple-400", border2: "border-purple-300"},
  {bg:"bg-fuchsia-300", border1: "border-fuchsia-400", border2: "border-fuchsia-300"},
  {bg:"bg-pink-300", border1: "border-pink-400", border2: "border-pink-300"},
  {bg:"bg-rose-300", border1: "border-rose-400", border2: "border-rose-300"},
]

const CalendarSection = () => {
  const [date, setDate] = useState(new Date());
  const events =[
    {
      start: new Date(2026, 0, 7),
      end: new Date(2026, 0, 7),
      name: "idk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nisl interdum, tempus justo non, egestas eros. Nulla nec porta diam. In hac habitasse platea dictumst. Morbi consequat felis nibh, id fringilla tortor venenatis eu. Nunc ornare imperdiet nisl varius imperdiet. Suspendisse urna nibh, tristique in luctus nec, pellentesque ac mi. Sed tristique venenatis euismod. Vestibulum mattis lobortis molestie. Mauris fringilla vitae mi eget hendrerit. Aliquam tincidunt lorem sit amet lorem euismod porttitor. Sed porta felis massa, mollis vehicula sem vulputate ac. Mauris imperdiet felis ac ultrices bibendum. Pellentesque et eros molestie, egestas ex et, blandit risus. Duis sed diam nisl. ",
      color: "red"
    },
    {
      start: new Date(2026, 0, 25),
      end: new Date(2026, 1, 3),
      name: "idk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nisl interdum, tempus justo non, egestas eros. Nulla nec porta diam. In hac habitasse platea dictumst. Morbi consequat felis nibh, id fringilla tortor venenatis eu. Nunc ornare imperdiet nisl varius imperdiet. Suspendisse urna nibh, tristique in luctus nec, pellentesque ac mi. Sed tristique venenatis euismod. Vestibulum mattis lobortis molestie. Mauris fringilla vitae mi eget hendrerit. Aliquam tincidunt lorem sit amet lorem euismod porttitor. Sed porta felis massa, mollis vehicula sem vulputate ac. Mauris imperdiet felis ac ultrices bibendum. Pellentesque et eros molestie, egestas ex et, blandit risus. Duis sed diam nisl. ",
      color: "orange"
    },
    {
      start: new Date(2026, 1, 20),
      end: new Date(2026, 1, 20),
      name: "idk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nisl interdum, tempus justo non, egestas eros. Nulla nec porta diam. In hac habitasse platea dictumst. Morbi consequat felis nibh, id fringilla tortor venenatis eu. Nunc ornare imperdiet nisl varius imperdiet. Suspendisse urna nibh, tristique in luctus nec, pellentesque ac mi. Sed tristique venenatis euismod. Vestibulum mattis lobortis molestie. Mauris fringilla vitae mi eget hendrerit. Aliquam tincidunt lorem sit amet lorem euismod porttitor. Sed porta felis massa, mollis vehicula sem vulputate ac. Mauris imperdiet felis ac ultrices bibendum. Pellentesque et eros molestie, egestas ex et, blandit risus. Duis sed diam nisl. ",
      color: "amber"
    },
    {
      start: new Date(2026, 2, 25),
      end: new Date(2026, 2, 25),
      name: "idk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nisl interdum, tempus justo non, egestas eros. Nulla nec porta diam. In hac habitasse platea dictumst. Morbi consequat felis nibh, id fringilla tortor venenatis eu. Nunc ornare imperdiet nisl varius imperdiet. Suspendisse urna nibh, tristique in luctus nec, pellentesque ac mi. Sed tristique venenatis euismod. Vestibulum mattis lobortis molestie. Mauris fringilla vitae mi eget hendrerit. Aliquam tincidunt lorem sit amet lorem euismod porttitor. Sed porta felis massa, mollis vehicula sem vulputate ac. Mauris imperdiet felis ac ultrices bibendum. Pellentesque et eros molestie, egestas ex et, blandit risus. Duis sed diam nisl. ",
      color: "lime"
    },
    {
      start: new Date(2026, 3, 25),
      end: new Date(2026, 3, 25),
      name: "idk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nisl interdum, tempus justo non, egestas eros. Nulla nec porta diam. In hac habitasse platea dictumst. Morbi consequat felis nibh, id fringilla tortor venenatis eu. Nunc ornare imperdiet nisl varius imperdiet. Suspendisse urna nibh, tristique in luctus nec, pellentesque ac mi. Sed tristique venenatis euismod. Vestibulum mattis lobortis molestie. Mauris fringilla vitae mi eget hendrerit. Aliquam tincidunt lorem sit amet lorem euismod porttitor. Sed porta felis massa, mollis vehicula sem vulputate ac. Mauris imperdiet felis ac ultrices bibendum. Pellentesque et eros molestie, egestas ex et, blandit risus. Duis sed diam nisl. ",
      color: "lime"
    }
  ]
  useEffect(() => {
    console.log(date)
  }, [date])

  return (
    <div className="mx-auto max-w-[1445px] mt-30">
      <div className="font-[ArgentumSans]">
        <div className="w-fit text-6xl">
          <div className="flex items-center">
            Calendar
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex w-full mt-4 h-3">
            <div className="bg-[#EE6983] flex-2" />
            <div className="bg-[#FFC4C4] flex-2" />
            <div className="bg-[#FCF5EE] flex-6" />
          </div>
        </div>
        <div className="my-20 flex">
          <div className="w-1/2 py-15">
            <Calendar onChange={(val: Date) => {setDate(val)}} month={date.getMonth()} year={date.getFullYear()} 
              events={events.filter(x => (
                (x.start.getFullYear() === date.getFullYear() || x.end.getFullYear() === date.getFullYear()) &&
                (x.start.getMonth() === date.getMonth() || x.end.getMonth() === date.getMonth())
              ))} style="w-3/4" />
          </div>
          <div className="w-1/2 h-144 font-[Allerta] overflow-auto">
            {events.map((event, i) => (
              <div key={i} className={"border-l-6 bg-white border-"+event.color+"-400"}>
                <div className="flex border-y py-5 border-r border-slate-300">
                  <div className="w-46 px-5">
                    <div className="text-5xl">
                      {twoDigits(event.start.getDate()) + (event.start.getTime() === event.end.getTime() ? '' : '-' + twoDigits(event.end.getDate()))}
                      </div>
                    <div className="text-xl">{month[event.start.getMonth()] + (event.start.getMonth() === event.end.getMonth() ? '' : '-' + month[event.end.getMonth()])}</div>
                  </div>
                  <div className={"flex-1 border-l-3 px-5 border-"+event.color+"-300"}>
                    <div className="text-4xl">{event.name}</div>
                    <div className="mt-3 line-clamp-2">{event.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarSection;
