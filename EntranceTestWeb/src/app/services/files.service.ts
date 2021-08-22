import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private _router: Router,
    private _http: HttpClient
  ) { }

  uploadFile(fileDTO: File):  Observable<any>  {
    const formData = new FormData();
    formData.append('file', fileDTO, fileDTO.name);
    const apiBaseUrl = environment.apiBaseUrl;
    const urlTree = this._router.createUrlTree(['api/files']);
    const requestUrl = `${apiBaseUrl}${urlTree.toString()}`;
    return this._http.post(requestUrl, formData, {reportProgress: true, observe: 'events'});
  }

  getAllFiles(): Promise<any> {
    const apiBaseUrl = environment.apiBaseUrl;
    const urlTree = this._router.createUrlTree(['api/files'],{
        queryParams: {
            perPage:10000,
            page:1
        }
      });
    const url = apiBaseUrl + urlTree.toString();
    return this._http.get<any>(url).toPromise();
  }
  getFile(fileId: number):  Promise<any> {
    const apiBaseUrl = environment.apiBaseUrl;
    const urlTree = this._router.createUrlTree(['api/files',fileId]);
    const url = apiBaseUrl + urlTree.toString();
    return this._http.get<any>(url, {
      responseType: 'blob' as 'json',
      reportProgress: true,
  }).toPromise();;
  }
}
