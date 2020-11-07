import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowSlotComponent } from './tv-show-slot.component';

describe('TvShowSlotComponent', () => {
  let component: TvShowSlotComponent;
  let fixture: ComponentFixture<TvShowSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
