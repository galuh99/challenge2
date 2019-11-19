import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahkeranjangPageRoutingModule } from './tambahkeranjang-routing.module';

import { TambahkeranjangPage } from './tambahkeranjang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahkeranjangPageRoutingModule
  ],
  declarations: [TambahkeranjangPage]
})
export class TambahkeranjangPageModule {}
