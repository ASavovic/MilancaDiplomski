import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss']
})
export class FileTableComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() fileElements:FileElement[] = new Array();

  dataSource =new MatTableDataSource<FileElement>(this.fileElements);
  displayedColumns: string[] = ['name', 'size', 'uploadDateTime'];
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit(){
;
  }
  ngOnChanges(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort
  }
  formatBytes(bytes:any, decimals:any) {
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
  id:number
  name: string;
  size: number;
  uploadDateTime: string;
  path: string;
}
