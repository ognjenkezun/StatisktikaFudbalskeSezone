import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSeasonDetailsComponent } from './table-season-details.component';

describe('TableSeasonDetailsComponent', () => {
  let component: TableSeasonDetailsComponent;
  let fixture: ComponentFixture<TableSeasonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSeasonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSeasonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
