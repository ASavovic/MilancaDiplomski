import { HttpClient, HttpHandler } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService, TOAST_CONFIG } from 'ngx-toastr';

import { FileUploadDisplayComponent } from './file-upload-display.component';

describe('FileUploadDisplayComponent', () => {
  let component: FileUploadDisplayComponent;
  let fixture: ComponentFixture<FileUploadDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,ToastrModule.forRoot() ],
      declarations: [ FileUploadDisplayComponent ],
      providers:[HttpClient,HttpHandler
      ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('test function getExtensionFile', () => {
    expect(component.getExtensionOfFile("random.name.of.file.txt")).toBe('txt');
  });
  //one that will fail
  it('test function getExtensionFile', () => {
    expect(component.getExtensionOfFile("random.name.of.file.txt")).toBe('.file');
  });

  it('test function refreshFilesInTables', () => {
    expect(component.refreshFilesInTables()).toBe([]);
  });

});
