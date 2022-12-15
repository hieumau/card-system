import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)

      .pipe(
        // retry(1),

        catchError((error: HttpErrorResponse) => {
          let errorMessage: string;
          errorMessage = error.error.message

          if (error.error) {
            if (error.error.message) {
              errorMessage = error.error.message
            } else {
              errorMessage = error.error.error
            }
          }

          this.snackBar.open(errorMessage, 'Close', {duration: 4000})
          return throwError(error);
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      )

  }
}
