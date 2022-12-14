import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../core/service/auth.service";
import {Card} from "../../shared/model/card";
import {PageData} from "../../shared/model/page-data";
import {CardService} from "../../shared/service/card.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cardList: Card[] = []
  pageIndex: number = 0;
  page: PageData<Card> = new PageData<Card>()

  constructor(private cardService: CardService,
              private snackBar: MatSnackBar,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.page.per_page = 9
    this.page.data = []
    this.page.total = 0
    this.page.page = 0
    this.reload()
  }

  reload() {
    this.cardService.getListCard().then(result => {
      this.cardList = result
      this.updatePaginate()
    })
  }
  isLoggedIn() {
    var loggedIn = this.authService.isLoggedIn;
    return loggedIn
  }

  deleteCard(id: string) {
    this.cardService.deleteCard(id).then(result => {
      console.log(result)
      this.snackBar.open('Delete card successfully.', '', {duration: 5000})
      this.reload()
    })
  }

  handlePageEvent(e: PageEvent) {
    this.page.page = e.pageIndex
    this.page.per_page = e.pageSize
    this.updatePaginate()
  }

  updatePaginate() {
    this.page.total = this.cardList.length
    let data = this.cardList.slice((this.page.page) * this.page.per_page!!, (this.page.page + 1) * this.page.per_page!!);
    this.page.data = data
  }
}
