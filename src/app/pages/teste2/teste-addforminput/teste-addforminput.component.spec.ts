import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteAddforminputComponent } from './teste-addforminput.component';

describe('TesteAddforminputComponent', () => {
  let component: TesteAddforminputComponent;
  let fixture: ComponentFixture<TesteAddforminputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteAddforminputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteAddforminputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
