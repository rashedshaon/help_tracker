import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  block = 1;

  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit() {
  }

  othersLogin()
  {
    this.block = 1;
  }

  emailLogin()
  {
    this.block = 2;
  }

  signIn()
  {

  }

  changeLanguage()
  {
    if(this.translate.getDefaultLang() == 'en')
    {
      this.translate.setDefaultLang('bn');
      this.translate.use('bn').subscribe(()=>{
        //..
      });
    }else{
      this.translate.setDefaultLang('en');
      this.translate.use('en').subscribe(()=>{
        //..
      });
    }
  }
}
