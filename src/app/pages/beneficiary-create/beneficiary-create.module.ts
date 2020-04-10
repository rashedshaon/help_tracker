import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiaryCreatePageRoutingModule } from './beneficiary-create-routing.module';

import { BeneficiaryCreatePage } from './beneficiary-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiaryCreatePageRoutingModule
  ],
  declarations: [BeneficiaryCreatePage]
})
export class BeneficiaryCreatePageModule {}
