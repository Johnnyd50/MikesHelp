import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdgComponent } from './jdg.component';

describe('JdgComponent', () => {
  let component: JdgComponent;
  let fixture: ComponentFixture<JdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
