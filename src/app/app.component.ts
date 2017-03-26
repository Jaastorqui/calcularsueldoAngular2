import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private translate: TranslateService) {
      translate.addLangs(['es', 'en']);
      translate.setDefaultLang('es');
      translate.use('es');
    }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
