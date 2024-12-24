import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatAnchor} from '@angular/material/button';
import {RestService} from './rest.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatIcon} from '@angular/material/icon';
import {GlobalSetting} from './models/global-setting.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAnchor, MatIcon, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  globalData: GlobalSetting | undefined;
  private rest: RestService = inject(RestService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.rest.getGlobalSetting()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((g) => {
        this.globalData = g;
      });
  }
}
