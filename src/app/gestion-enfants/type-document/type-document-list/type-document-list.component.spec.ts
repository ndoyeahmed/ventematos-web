import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDocumentListComponent } from './type-document-list.component';

describe('TypeDocumentListComponent', () => {
  let component: TypeDocumentListComponent;
  let fixture: ComponentFixture<TypeDocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
