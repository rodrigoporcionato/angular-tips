import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPriceDetailComponent } from './pages-price-detail.component';

describe('PagesPriceDetailComponent', () => {
  let component: PagesPriceDetailComponent;
  let fixture: ComponentFixture<PagesPriceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesPriceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesPriceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
