import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { DropzoneComponent } from './dropzone.component';

describe('DropzoneComponent', () => {
  let component: DropzoneComponent;
  let fixture: ComponentFixture<DropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,ToastrModule.forRoot() ],
      declarations: [ DropzoneComponent ],
      providers:[HttpHandler,HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test function formatBytes', () => {
    expect(component.formatBytes(1024,0)).toBe('1 KB');
  });
  //one that will fail
  it('test function formatBytes', () => {
    expect(component.formatBytes(2043,0)).toBe('3 MB');
  });
});
