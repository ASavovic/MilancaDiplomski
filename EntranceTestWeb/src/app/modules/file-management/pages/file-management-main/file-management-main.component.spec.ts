import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagementMainComponent } from './file-management-main.component';

describe('FileManagementMainComponent', () => {
  let component: FileManagementMainComponent;
  let fixture: ComponentFixture<FileManagementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileManagementMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
