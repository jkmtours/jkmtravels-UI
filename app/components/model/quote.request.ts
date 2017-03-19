export class QuoteRequest {

  from: string;
  to: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  groupSize: number;
  oneWay: boolean;


  constructor(private quoteInfo: any) {
    this.from = quoteInfo.from;
    this.to = quoteInfo.to;
    this.startDate = quoteInfo.startDate;
    this.endDate = quoteInfo.endDate;
    this.startTime = quoteInfo.startTime;
    this.endTime = quoteInfo.endTime;
    this.groupSize = quoteInfo.groupSize;
    this.oneWay= quoteInfo.oneWay;


  }

  save() {
    // HTTP request would go here
    console.log(this.from, this.to, this.startDate, this.endDate,
        this.startTime, this.endTime, this.groupSize, this.oneWay);
  }
}
