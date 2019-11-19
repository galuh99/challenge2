import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahprodukPage } from './tambahproduk.page';

describe('TambahprodukPage', () => {
  let component: TambahprodukPage;
  let fixture: ComponentFixture<TambahprodukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahprodukPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahprodukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
