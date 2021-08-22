import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FilesService } from '../../../../services/files.service';

@Component({
  selector: 'app-file-upload-display',
  templateUrl: './file-upload-display.component.html',
  styleUrls: ['./file-upload-display.component.scss'],
})
export class FileUploadDisplayComponent implements OnInit {
  subscription: any;
  constructor(
    private _filesService: FilesService,
    private toastr: ToastrService
  ) {
    this.files = new Array();
    this.recentlyUploadedfiles = new Array();
  }
  files: any[];
  refreshing: boolean = false;
  recentlyUploadedfiles: any[];
  ngOnInit(): void {
    this.refreshFilesInTables();
  }

  refreshFilesInTables(): any {
    this.refreshing = true;
    this._filesService
      .getAllFiles()
      .then((result) => {
        this.prepareArraysForTables(result);
      })
      .catch((error) => {
        console.log(error);
        this.toastr.error(error.message, 'Error');
      })
      .finally(() => {
        this.refreshing = false;
      });
  }
  prepareArraysForTables(array: any[]): void {
    if (array.length === 0) {
      return;
    }
    let arrays: any[][] = [];
    array.forEach((el) => {
      if (arrays.length === 0) {
        arrays.push(new Array(el));
      } else {
        let pushedInArrayFlag = false;
        arrays.forEach((arr) => {
          if (
            this.getExtensionOfFile(arr[0].name) ===
            this.getExtensionOfFile(el.name)
          ) {
            arr.push(el);
            pushedInArrayFlag = true;
          }
        });
        if (!pushedInArrayFlag) {
          arrays.push(new Array(el));
        }
      }
    });
    this.files = arrays;
  }
  getExtensionOfFile(fileName: string): string {
    return fileName.split('.').slice(-1)[0];
  }
}
