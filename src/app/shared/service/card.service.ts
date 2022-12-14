import {HttpParams} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {ApiService} from "../../core/service/api.service";
import {Card} from "../model/card";
import {PageData} from "../model/page-data";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private apiService: ApiService) {
  }

  baseUrl: string = environment.apiUrl + '/'

  getListCard(): Promise<Card[]> {
    return new Promise((resolve, reject) => {
      this.apiService.get(this.baseUrl, 'show').subscribe((value: any) => {
          resolve(value)
        },
        error => {
          reject(error)
        })
    })
  }

  createCard(card: Card): Promise<{ id: string }> {
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl + 'add_card', card).subscribe((value: any) => {
          resolve(value)
        },
        error => {
          reject(error)
        })
    })
  }

  updateCard(card: Card): Promise<{ id: string }> {
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl + 'edit_card', card).subscribe((value: any) => {
          resolve(value)
        },
        error => {
          reject(error)
        })
    })
  }


  deleteCard(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl + 'delete', {id: id}).subscribe((value: any) => {
          resolve(value)
        },
        error => {
          reject(error)
        })
    })
  }
}
