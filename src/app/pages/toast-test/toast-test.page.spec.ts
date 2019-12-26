import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToastTestPage } from './toast-test.page';

describe('ToastTestPage', () => {
  let component: ToastTestPage;
  let fixture: ComponentFixture<ToastTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
