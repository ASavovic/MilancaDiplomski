import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private _router: Router,
    private _http: HttpClient
  ) { }

  uploadFile(fileDTO: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', fileDTO, fileDTO.name);
    const apiBaseUrl = environment.apiBaseUrl;
    const urlTree = this._router.createUrlTree(['api/files']);
    const requestUrl = `${apiBaseUrl}${urlTree.toString()}`;
    return this._http.post(requestUrl, formData, {reportProgress: true, observe: 'events'}).toPromise();
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
  getFile(beneficiaryId: string): Promise<any> {
    const apiBaseUrl = environment.apiBaseUrl;
    const urlTree = this._router.createUrlTree(["Beneficiary", beneficiaryId],{
      queryParams: {
        beneficiaryId: beneficiaryId
      }
    });
    const url = apiBaseUrl + urlTree.toString();
    return this._http.get<any>(url).toPromise();
  }
}
