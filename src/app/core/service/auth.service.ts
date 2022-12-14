import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../shared/model/user.model";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | null;
  tokenSubject = new BehaviorSubject<any>(null)
  baseUrl = environment.apiUrl

  private readonly TOKEN_KEY = 'token';

  constructor(private router: Router,
              private httpClient: HttpClient,
              private apiService: ApiService) {
    this.setToken(localStorage.getItem(this.TOKEN_KEY))
  }

  get isLoggedIn(): boolean {
    let token = this.getToken()
    return token !== 'null'
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public signOut() {
    this.router.navigate(['login'])
    this.setToken(null);
  }

  private setToken(token: any) {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.token = token
    this.tokenSubject.next(this.token);
  }

  public login(user: User): Promise<{ access: string }> {
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl + '/login', {
        email: user.email,
        password: user.password
      }).subscribe((value: any) => {
          this.setToken(value.access)
          resolve(value)
        },
        error => {
          reject(error)
        })
    })
  }

  public register(user: User): Promise<{ id: string }> {
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl + '/register', user)
        .subscribe((value: any) => {
            resolve(value)
          },
          error => {
            reject(error)
          })
    })
  }

}
