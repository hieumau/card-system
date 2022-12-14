import {Component, OnInit} from '@angular/core';
import {Card} from "../../shared/model/card";
import {CardService} from "../../shared/service/card.service";

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {
  card: Card = new Card()

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
  }

  createCard() {
    if (this.card.Name != null && this.card.Name.toString().trim().length > 0) {

    }

    this.cardService.createCard(this.card).then(result => {
      console.log(result)
    })
  }
}
