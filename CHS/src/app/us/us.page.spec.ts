import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsPage } from './us.page';

describe('UsPage', () => {
  let component: UsPage;
  let fixture: ComponentFixture<UsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
