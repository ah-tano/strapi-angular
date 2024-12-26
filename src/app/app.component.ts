import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RestService} from './rest.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatIcon} from '@angular/material/icon';
import {GlobalSetting} from './models/global-setting.model';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAnchor, MatIcon, RouterLink, MatButton, MatMenu, MatMenuTrigger, MatMenuItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  globalData: GlobalSetting | undefined;
  lang = 'Eng';
  private rest: RestService = inject(RestService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      if (savedLang === 'en') {
        this.lang = 'Eng';
      }
      if (savedLang === 'uk') {
        this.lang = 'Укр';
      }
    }
    this.rest.getGlobalSetting()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((g) => {
        this.globalData = g;
      });
  }

  changeLanguage(lang: string) {
    this.lang = lang
    localStorage.setItem('language', lang === 'Укр' ? 'uk' : 'en');
    window.location.reload();
  }
}
