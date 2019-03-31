import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishdownloadComponent } from './finishdownload.component';

describe('FinishdownloadComponent', () => {
  let component: FinishdownloadComponent;
  let fixture: ComponentFixture<FinishdownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishdownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
