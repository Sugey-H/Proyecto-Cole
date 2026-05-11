import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XPage } from './x.page';

describe('XPage', () => {
  let component: XPage;
  let fixture: ComponentFixture<XPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(XPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
