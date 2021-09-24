import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private translateService: TranslateService) {}

  setLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}
