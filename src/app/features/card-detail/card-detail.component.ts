import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../core/service/auth.service";
import {Card} from "../../shared/model/card";
import {CardService} from "../../shared/service/card.service";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  constructor(private cardService: CardService,
              private router: Router,
              private route: ActivatedRoute,
              public authService: AuthService,
              private snackBar: MatSnackBar) {
  }

  card: Card
  cardId: any

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(this.cardId).then(result => {
      this.card = result
    })
  }

  deleteCard() {
    this.cardService.deleteCard(this.card._id.$oid).then(result => {
      console.log(result)
      this.snackBar.open('Delete card successfully.', '', {duration: 5000})
      this.router.navigate(['cards'])
    })
  }

}
