import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public openSideBar: boolean = false;
  public activeLanguage = 'en';

  constructor(private translate: TranslateService) {
    // default language
    this.translate.setDefaultLang(this.activeLanguage);
  }

  ngOnInit(): void { /*empty*/ }

  // update variable which controls side bar visibility
  public openOrCloseNav(): void {
    this.openSideBar = !this.openSideBar;
    console.log('open side bar:', this.openSideBar);
  }

  // switch language
  public switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }
}
