export interface IHour {
  available: boolean;
  from: number;
  to: number;
}

export interface IWeek {
  monday?: IHour[];
  tuesday?: IHour[];
  wednesday?: IHour[];
  thursday?: IHour[];
  friday?: IHour[];
  saturday?: IHour[];
  sunday?: IHour[];
}
