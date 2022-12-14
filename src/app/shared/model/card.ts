export class Card {
  _id: CardId
  Name: string
  Type: string
  Level: string
  Race: string
  Attribute: string
  ATK: string
  DEF: string
}

export interface CardId{
  $oid: string
}
