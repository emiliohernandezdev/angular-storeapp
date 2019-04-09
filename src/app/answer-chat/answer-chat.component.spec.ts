import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerChatComponent } from './answer-chat.component';

describe('AnswerChatComponent', () => {
  let component: AnswerChatComponent;
  let fixture: ComponentFixture<AnswerChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
