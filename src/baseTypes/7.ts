/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek  {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  satuday = 'satuday',
  sunday = 'sunday'
}

function isWeekend(day: DayWeek): boolean {
  const lowerCaseDay = day.toLowerCase()
  return lowerCaseDay === DayWeek.satuday || lowerCaseDay === DayWeek.sunday;
};
