export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 27,
    label: 'LGAs Served in Imo State'
  },
  {
    value: 8,
    label: 'Ministry Departments'
  },
  {
    value: 600,
    suffix: '+',
    label: 'Athletes Registered for Competitions'
  },
  {
    value: 17,
    label: 'Sports Disciplines Supported'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 10,
    label: 'Major Infrastructure Projects'
  },
  {
    value: 6,
    label: 'Strategic Development Programs'
  },
  {
    value: 2000,
    suffix: '+',
    label: 'Youth Marathon Participants'
  },
  {
    value: 42,
    label: 'Medals Won at Niger Delta Games'
  }
];
