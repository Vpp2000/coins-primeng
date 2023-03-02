import { Component } from '@angular/core';
import {Coin} from "../../types/coin.interface";
import {CoinsService} from "../../services/coins.service";

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent {
  coins!: Coin[]
  filteredCoins: Coin[] = [];
  columns: string[] = ['#', 'Coin', 'Price', 'Price Change', '24H Volume'];

  constructor(private coinService:CoinsService) {
  }

  ngOnInit() {
    this.coinService.getCoins$().subscribe(coins => {
      this.coins = coins;
      this.filteredCoins = coins;
    }
    )
  }
}
