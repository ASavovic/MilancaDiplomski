import { Component, OnInit } from '@angular/core';
import { InfluxValuesService } from '../../../../services/influx-values.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  multi: any[]=[];

  view: [number, number] = [1100, 450];
  constructor(private readonly _influxValuesService: InfluxValuesService) {}
  //picker options
  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  public currentHour: number = this.today.getHours();
  public currentMinute: number = this.today.getMinutes();
  public currentSecond: number = this.today.getSeconds();
  public dateStart: Date = new Date(
    this.currentYear - 1,
    this.currentMonth,
    14,
    0,
    0,
    0
  );
  public dateEnd: Date = new Date(new Date().setDate(19));
  public minDate: Date = new Date(
    this.currentYear - 1,
    this.currentMonth,
    7,
    0,
    0,
    0
  );
  public maxDate: Date = new Date(
    this.currentYear,
    this.currentMonth,
    27,
    this.currentHour,
    this.currentMinute,
    this.currentSecond
  );
  ngOnInit() {
    console.log(this.dateStart.toUTCString(), this.dateEnd.toUTCString());
    
    this.getData(this.dateStart.toUTCString(), this.dateEnd.toUTCString());
  }
  //graph options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Timeline';
  yAxisLabel: string = 'Memory Used';
  timeline: boolean = true;

  //////
  loading: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onFilterSelectedRange() {
    console.log(this.dateStart.toUTCString(), this.dateEnd.toUTCString());
    this.getData(this.dateStart.toUTCString(), this.dateEnd.toUTCString());
  }

  onLastDayCLick() {}
  onLastSevenDaysClick() {}
  onLastMonthClick() {}
  onLastYearClick() {}
  onLifetimeClick() {}
  getData(dateStart: string, dateEnd: string) {
    this.loading = true;
    this._influxValuesService
      .getAllMeasurements(dateStart, dateEnd)
      .then((res) => {
        this.multi = res;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //this.multi = [];
        this.loading = false;
      });
  }
}
