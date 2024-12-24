import {Component, input, InputSignal} from '@angular/core';
import {MatAnchor} from '@angular/material/button';
import {Post} from '../models/post.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-post-preview',
  imports: [
    MatAnchor,
    RouterLink
  ],
  templateUrl: './post-preview.component.html',
  styleUrl: './post-preview.component.scss'
})
export class PostPreviewComponent {
  post: InputSignal<Post | undefined> = input();
}
