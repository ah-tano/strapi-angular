import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  post: Post = {} as Post;
  private rest: RestService = inject(RestService);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.rest.getPost(id)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(p => this.post = p);
    }
  }
}
