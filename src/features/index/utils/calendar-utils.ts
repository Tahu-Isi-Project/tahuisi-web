export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getCalendarDays(year: number, month: number) {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const days = [];

  // Previous month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      isCurrentMonth: false,
      fullDate: new Date(year, month - 1, daysInPrevMonth - i),
    });
  }

  // Current month
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    days.push({
      date: i,
      isCurrentMonth: true,
      fullDate: new Date(year, month, i),
    });
  }

  // Next month (42 slots for 6-row grid)
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: i,
      isCurrentMonth: false,
      fullDate: new Date(year, month + 1, i),
    });
  }
  
  return days;
};

const enDash = String.fromCharCode(8211);

export function formatEventDateRange(start: Date, end: Date) {
  const isSameDay = start.getDay() >= end.getDay();
  const isSameMonth = start.getMonth() >= end.getMonth();
  const shortMonths = months.map(m => m.slice(0, 3));

  return {
    dayRange: isSameDay 
      ? start.getDate() 
      : `${start.getDate()}${enDash}${end.getDate()}`,
    monthRange: isSameMonth 
      ? shortMonths[start.getMonth()] 
      : `${shortMonths[start.getMonth()]}${enDash}${shortMonths[end.getMonth()]}`
  };
};

const categoryColors = new Map<string, string>([
  ["national", "border-red-400 border-l-red-400"],
  ["competition", "border-blue-400 border-l-blue-400"],
  ["others", "border-grey-800 border-l-grey-800"]
]);

export function getColorFromCategory(category: string) {
  return categoryColors.has(category) ? categoryColors.get(category) : categoryColors.get("others");
}
