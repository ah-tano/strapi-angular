import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {GlobalSetting} from './models/global-setting.model';
import {LandingPage} from './models/landing-page.model';
import {Post} from './models/post.model';

export interface StrapiResponse<T> {
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = 'https://perfect-basketball-0542a357ff.strapiapp.com';
  private landingPageUrl = '/api/landing-page?populate[blocks][on][blocks.hero-section][populate]=*&populate[blocks][on][blocks.posts-section][populate][posts][populate][post][fields][0]=id';
  private mythsUrl = '/api/myths';
  private postsUrl = '/api/posts';
  private globalSettingUrl = '/api/global-setting?populate[topNavigation][populate]=*&populate[footer][populate]=*';

  getGlobalSetting(): Observable<GlobalSetting> {
    return this.http.get<StrapiResponse<GlobalSetting>>(`${this.baseUrl}${this.globalSettingUrl}`)
      .pipe(map(res => res.data));
  }

  getLandingPage(): Observable<LandingPage> {
    return this.http.get<StrapiResponse<LandingPage>>(`${this.baseUrl}${this.landingPageUrl}`)
      .pipe(map(res => res.data));
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<StrapiResponse<Post>>(`${this.baseUrl}${this.postsUrl}/${id}`)
      .pipe(map(res => res.data));
  }

  saveMyth(html: string): Observable<any> {
    const body = {
      data: {
        html
      }
    }
    return this.http.post(`${this.baseUrl}${this.mythsUrl}`, body);
  }
}
