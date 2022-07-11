import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbededVideoComponent } from './embeded-video.component';

describe('EmbededVideoComponent', () => {
  let component: EmbededVideoComponent;
  let fixture: ComponentFixture<EmbededVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbededVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbededVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
