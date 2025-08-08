export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 27,
    label: 'LGAs Covered in Imo State'
  },
  {
    value: 10,
    label: 'Specialized Departments'
  },
  {
    value: 15,
    label: 'Key Development Projects'
  },
  {
    value: 20,
    suffix: '+',
    label: 'Partner Organizations'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 8,
    label: 'Ongoing Projects'
  },
  {
    value: 7,
    label: 'Completed Projects'
  },
  {
    value: 3,
    label: 'Oil-Producing LGAs'
  },
  {
    value: 15,
    label: 'Community Engagements'
  }
];
