import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentaddComponent } from './adherentadd.component';

describe('AdherentaddComponent', () => {
  let component: AdherentaddComponent;
  let fixture: ComponentFixture<AdherentaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdherentaddComponent]
    });
    fixture = TestBed.createComponent(AdherentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
