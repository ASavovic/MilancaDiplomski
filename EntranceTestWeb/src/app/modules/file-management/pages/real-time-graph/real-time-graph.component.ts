import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from '../../../../services/real-time.service';

@Component({
  selector: 'app-real-time-graph',
  templateUrl: './real-time-graph.component.html',
  styleUrls: ['./real-time-graph.component.scss']
})
export class RealTimeGraphComponent implements OnInit {

  constructor(public signalRService: SignalRService, private http: HttpClient) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();   
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:44367/api/chart',{
      params: {
        dateStart: new Date().toString(),
        
      }})
      .subscribe(res => {
        console.log(res);
      })
  }

}
