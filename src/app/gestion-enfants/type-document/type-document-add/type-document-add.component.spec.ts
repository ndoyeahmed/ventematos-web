import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDocumentAddComponent } from './type-document-add.component';

describe('TypeDocumentAddComponent', () => {
  let component: TypeDocumentAddComponent;
  let fixture: ComponentFixture<TypeDocumentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDocumentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDocumentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
