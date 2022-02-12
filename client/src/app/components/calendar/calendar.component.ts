import { Component, OnInit } from '@angular/core';

const MAP_MONTH = new Map<number, string>([
  [1, 'January'],
  [2, 'February'],
  [3, 'March'],
  [4, 'April'],
  [5, 'May'],
  [6, 'June'],
  [7, 'July'],
  [8, 'August'],
  [9, 'September'],
  [10, 'October'],
  [11, 'November'],
  [12, 'December'],
]);

const MAP_DAY = new Map<number, string>([
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday'],
]);

const MEAL_LIST = [
  { name: 'lasagne', image: 'lasagne.jpg', data: 'datalasagne' },
  { name: 'spagat', image: 'spagat.jpg', data: 'dataspagat' },
  { name: 'ravio', image: 'ravio.jpg', data: 'dataravio' },
];

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  days: any;
  mealLists: any[];
  subMenuState: boolean = false;
  constructor() {
    this.mealLists = MEAL_LIST;
    this.days = [
      {
        year: checkDate(0)[2].toString(),
        month: MAP_MONTH.get(checkDate(0)[1]),
        day: checkDate(0)[0].toString(),
        nbDayInWeek: MAP_DAY.get(d.getDay() % 7),
      },
      {
        year: checkDate(1)[2].toString(),
        month: MAP_MONTH.get(checkDate(1)[1]),
        day: checkDate(1)[0].toString(),
        nbDayInWeek: MAP_DAY.get((d.getDay() + 1) % 7),
      },
      {
        year: checkDate(2)[2].toString(),
        month: MAP_MONTH.get(checkDate(2)[1]),
        day: checkDate(2)[0].toString(),
        nbDayInWeek: MAP_DAY.get((d.getDay() + 2) % 7),
      },
      {
        year: checkDate(3)[2].toString(),
        month: MAP_MONTH.get(checkDate(3)[1]),
        day: checkDate(3)[0].toString(),
        nbDayInWeek: MAP_DAY.get((d.getDay() + 3) % 7),
      },
      {
        year: checkDate(4)[2].toString(),
        month: MAP_MONTH.get(checkDate(4)[1]),
        day: checkDate(4)[0].toString(),
        nbDayInWeek: MAP_DAY.get((d.getDay() + 4) % 7),
      },
      {
        year: checkDate(5)[2].toString(),
        month: MAP_MONTH.get(checkDate(5)[1]),
        day: checkDate(5)[0].toString(),
        nbDayInWeek: MAP_DAY.get((d.getDay() + 5) % 7),
      },
      {
        year: checkDate(6)[2].toString(),
        month: MAP_MONTH.get(checkDate(6)[1]),
        day: checkDate(6)[0].toString(),
        nbDayInWeek: MAP_DAY.get((d.getDay() + 6) % 7),
      },
    ];
  }

  ngOnInit(): void {}
  burgerClicked(evnt) {
    this.subMenuState = evnt;
    console.log(
      'inside burgerClicked: pls. change showMenu to be:',
      this.subMenuState
    );
  }
}

const d: Date = new Date();
d.getDay().toString(); // day of the week (ex: 1 (qui serait dimanche))
d.getDate().toString(); // day of the month (ex: 12)
d.getMonth().toString(); // month of the year (ex: 2)
d.getFullYear().toString(); // year (ex: 2022)

function checkDate(plusDay: number) {
  let newMonth = d.getMonth() + 1;
  let newYear = d.getFullYear();
  let newDay = d.getDate();

  if (
    d.getMonth() === 4 ||
    d.getMonth() === 7 ||
    d.getMonth() === 9 ||
    d.getMonth() === 11
  ) {
    if (d.getDate() + plusDay > 30) {
      newMonth += 1;
      newDay = d.getDate() + plusDay - 30;
    } else {
      newDay += plusDay;
    }
  } else if (d.getMonth() === 2) {
    if (d.getDate() + plusDay > 28) {
      newMonth += 1;
      newDay = d.getDate() + plusDay - 28;
    } else {
      newDay += plusDay;
    }
  } else if (
    d.getMonth() === 1 ||
    d.getMonth() === 3 ||
    d.getMonth() === 5 ||
    d.getMonth() === 6 ||
    d.getMonth() === 8 ||
    d.getMonth() === 10 ||
    d.getMonth() === 12
  ) {
    if (d.getDate() + plusDay > 31) {
      newMonth += 1;
      newDay = d.getDate() + plusDay - 31;
    } else {
      newDay += plusDay;
    }
  }

  if (newMonth > 12) {
    newYear += 1;
    newMonth = newMonth - d.getMonth();
  }

  return [newDay, newMonth, newYear];
}
