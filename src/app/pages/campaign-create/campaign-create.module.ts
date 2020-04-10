import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignCreatePageRoutingModule } from './campaign-create-routing.module';

import { CampaignCreatePage } from './campaign-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignCreatePageRoutingModule
  ],
  declarations: [CampaignCreatePage]
})
export class CampaignCreatePageModule {}
