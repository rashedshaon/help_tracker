import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiaryCreatePage } from './beneficiary-create.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiaryCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiaryCreatePageRoutingModule {}
