import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartopComponent } from './navbartop.component';

describe('NavbartopComponent', () => {
  let component: NavbartopComponent;
  let fixture: ComponentFixture<NavbartopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbartopComponent]
    });
    fixture = TestBed.createComponent(NavbartopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
