import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustonInputComponent } from './components/custon-input/custon-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateProductComponent } from './components/add-update-product/add-update-product.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustonInputComponent,
    LogoComponent,
    AddUpdateProductComponent
  ],
  exports: [
    HeaderComponent,
    CustonInputComponent,
    LogoComponent,
    ReactiveFormsModule,
    AddUpdateProductComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
