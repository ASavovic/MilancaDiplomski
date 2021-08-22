import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';   
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  @Output () upload:EventEmitter<File>=new EventEmitter();
  constructor( private readonly _filesServide: FilesService,
    private toastr: ToastrService) { }

  
  ngOnInit(): void {
          
  }

  files: any[] = [];

  onFileDropped($event:any) {
    this.prepareFilesList($event);
  }
  callParent(): void {
    this.upload.emit();
  }

  fileBrowseHandler(e:Event) {
    let listOfFiles = (<HTMLInputElement>e.target).files;
      this.prepareFilesList(listOfFiles);
  }


  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  prepareFilesList(files: any) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      this._filesServide.uploadFile(item).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){

          if(event &&  event?.loaded && event?.total)
          {
            item.progress = Math.round(100 * event?.loaded /event?.total );
            if (event.loaded ===event.total){
              this.toastr.success("File succesfully uploaded!",'Success');
              this.callParent();
            }
          } 
        }
    },
    error=>{
      console.log(error);
      this.toastr.error(error.message,'Error');
      this.files.pop();
    });
  }
  
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
