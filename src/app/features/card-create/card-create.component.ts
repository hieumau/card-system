import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Card} from "../../shared/model/card";
import {CardService} from "../../shared/service/card.service";

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {
  card: Card = new Card()

  constructor(private cardService: CardService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

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
}
