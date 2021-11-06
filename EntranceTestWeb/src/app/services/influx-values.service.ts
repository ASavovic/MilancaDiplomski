import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfluxValuesService {

  constructor(
    private _router: Router,
    private _http: HttpClient
  ) { }

  getAllMeasurements(dateStart:any,dateEnd:any): Promise<any> {
    const apiBaseUrl = environment.apiBaseUrl;
    const urlTree = this._router.createUrlTree(['api/values'],{
      queryParams: {
        dateStart,
        dateEnd
      }
    });
    const url = apiBaseUrl + urlTree.toString();
    return this._http.get<any>(url).toPromise();
  }
}
