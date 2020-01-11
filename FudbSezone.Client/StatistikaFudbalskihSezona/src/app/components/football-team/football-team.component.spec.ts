import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballTeamComponent } from './football-team.component';

describe('FudbalskiKlubComponent', () => {
  let component: FootballTeamComponent;
  let fixture: ComponentFixture<FootballTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
