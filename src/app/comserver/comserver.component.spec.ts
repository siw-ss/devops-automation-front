import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComserverComponent } from './comserver.component';

describe('ComserverComponent', () => {
  let component: ComserverComponent;
  let fixture: ComponentFixture<ComserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComserverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
