import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooMapComponent } from './zoo-map.component';

describe('ZooMapComponent', () => {
  let component: ZooMapComponent;
  let fixture: ComponentFixture<ZooMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZooMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
