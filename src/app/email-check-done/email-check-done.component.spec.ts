import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCheckDoneComponent } from './email-check-done.component';

describe('EmailCheckDoneComponent', () => {
  let component: EmailCheckDoneComponent;
  let fixture: ComponentFixture<EmailCheckDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCheckDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCheckDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
