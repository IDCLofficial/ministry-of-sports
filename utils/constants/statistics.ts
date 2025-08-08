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
    value: 6,
    label: 'Service Categories'
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Land Titles Processed Annually'
  },
  {
    value: 3,
    label: 'Key Partner Agencies'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 5,
    label: 'Ongoing Urban Development Projects'
  },
  {
    value: 12,
    label: 'Housing Estates Completed'
  },
  {
    value: 27,
    label: 'LGAs with Digital Land Records'
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Land Titles Digitized'
  }
];
