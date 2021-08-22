import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss'],
})
export class FileTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'size', 'uploadDateTime', 'download'];
  @Input() fileElements: FileElement[] = new Array();

  dataSource = new MatTableDataSource<FileElement>();
  constructor(
    private readonly _filesService: FilesService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.dataSource.data = this.fileElements;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  downloadFile(id: number, path: string): void {
    console.log("Click");
    this._filesService
      .getFile(id)
      .then((response) => {
        this.download(response, path);
      })
      .catch((error) => {
        this.toastr.error(error.message, 'Error');
      });
  }
  download(data: any, path: string) {
    if (data) {
      let dataType = data.type;
      let binaryData = [];
      binaryData.push(data);
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      if (path)
          downloadLink.setAttribute('download', path.split("\\")[2]);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      this.toastr.success('File successfully downloaded!', 'Success');
    }
  }

  formatBytes(bytes: any, decimals: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
export interface FileElement {
  id: number;
  name: string;
  size: number;
  uploadDateTime: string;
  path: string;
}
