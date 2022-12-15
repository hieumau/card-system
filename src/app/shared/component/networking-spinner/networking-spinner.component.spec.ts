import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkingSpinnerComponent } from './networking-spinner.component';

describe('NetworkingSpinnerComponent', () => {
  let component: NetworkingSpinnerComponent;
  let fixture: ComponentFixture<NetworkingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworkingSpinnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
