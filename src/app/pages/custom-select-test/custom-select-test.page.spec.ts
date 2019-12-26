import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSelectTestPage } from './custom-select-test.page';

describe('CustomSelectTestPage', () => {
  let component: CustomSelectTestPage;
  let fixture: ComponentFixture<CustomSelectTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSelectTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSelectTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
