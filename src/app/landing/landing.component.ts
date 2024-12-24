import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {HeroBlock, LandingPage, PostsBlock} from '../models/landing-page.model';
import {NgTemplateOutlet} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {PostPreviewComponent} from '../post-preview/post-preview.component';

@Component({
  selector: 'app-landing',
  imports: [
    PostPreviewComponent,
    NgTemplateOutlet,
    MatButton,
    RouterLink,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  pageData: LandingPage | undefined;
  hero: HeroBlock | undefined;
  posts: PostsBlock = {} as PostsBlock;
  private rest: RestService = inject(RestService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.rest.getLandingPage()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(l=> {
        this.pageData = l;
        l.blocks.forEach(block => {
          if (block['__component'] === 'blocks.hero-section') {
            this.hero = block;
          }
          if (block['__component'] === 'blocks.posts-section') {
            this.posts = block;
          }
        });
      });
  }
}
