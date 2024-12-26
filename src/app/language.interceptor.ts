import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';


export const languageInterceptor: HttpInterceptorFn = (req, next) => {
  const language = localStorage.getItem('language') || 'en';
  let clonedRequest = req.clone();
  clonedRequest = clonedRequest.clone({
    setParams: {
      locale: language
    }
  });
  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Logging Interceptor Functional Error:', error);
      return throwError(()=> error);
    })
  );
}
