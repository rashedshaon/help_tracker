import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignCreatePage } from './campaign-create.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignCreatePageRoutingModule {}
