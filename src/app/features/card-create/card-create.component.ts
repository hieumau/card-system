import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../../shared/model/card";
import {CardService} from "../../shared/service/card.service";

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {
  card: Card = new Card()
  mode: string // create or edit

  cardId: any

  constructor(private cardService: CardService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    var url = this.router.url;
    if (url.endsWith('/edit')) {
      this.mode = 'edit'
    } else if (url.endsWith('/add')) {
      this.mode = 'create'
    }

    if (this.mode == 'create') {
      this.card = new Card()
    }
    if (this.mode == 'edit') {
      this.cardId = this.route.snapshot.paramMap.get('id');
      console.log(this.cardId)
      // get card by id here
    }
  }

  createCard() {
    this.validate()
    this.cardService.createCard(this.card).then(result => {
      this.snackBar.open('Create card successfully!', '', {duration: 3000})
    })
  }

  updateCard() {
    this.validate()
    this.cardService.createCard(this.card).then(result => {
      this.snackBar.open('Update card successfully!', '', {duration: 3000})
    })
  }

  private validate() {

  }

  summit() {
    if (this.mode == 'edit') {
      this.updateCard()
    }
    if (this.mode == 'create') {
      this.createCard()
    }
  }

  delete() {
    this.cardService.deleteCard(this.card._id.$oid).then(result => {
      console.log(result)
      this.snackBar.open('Delete card successfully.', '', {duration: 5000})
      this.router.navigate(['cards'])
    })
  }
}
