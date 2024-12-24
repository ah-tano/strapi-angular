import {Component, DestroyRef, inject, OnDestroy} from '@angular/core';
import {Editor, NgxEditorModule} from 'ngx-editor';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {RestService} from '../rest.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-myths',
  imports: [
    NgxEditorModule,
    FormsModule,
    MatButton
  ],
  templateUrl: './myths.component.html',
  styleUrl: './myths.component.scss'
})
export class MythsComponent implements OnDestroy  {
  editor: Editor = new Editor();
  html = '';
  private rest: RestService = inject(RestService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  save(): void {
    this.rest.saveMyth(this.html)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
