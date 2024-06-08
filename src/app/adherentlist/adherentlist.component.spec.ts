import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentlistComponent } from './adherentlist.component';

describe('AdherentlistComponent', () => {
  let component: AdherentlistComponent;
  let fixture: ComponentFixture<AdherentlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdherentlistComponent]
    });
    fixture = TestBed.createComponent(AdherentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
