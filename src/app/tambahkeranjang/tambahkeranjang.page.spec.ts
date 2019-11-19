import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahkeranjangPage } from './tambahkeranjang.page';

describe('TambahkeranjangPage', () => {
  let component: TambahkeranjangPage;
  let fixture: ComponentFixture<TambahkeranjangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahkeranjangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahkeranjangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
