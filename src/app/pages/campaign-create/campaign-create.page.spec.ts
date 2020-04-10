import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampaignCreatePage } from './campaign-create.page';

describe('CampaignCreatePage', () => {
  let component: CampaignCreatePage;
  let fixture: ComponentFixture<CampaignCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
