import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNovamenteComponent } from './teste-novamente.component';

describe('TesteNovamenteComponent', () => {
  let component: TesteNovamenteComponent;
  let fixture: ComponentFixture<TesteNovamenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteNovamenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteNovamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
