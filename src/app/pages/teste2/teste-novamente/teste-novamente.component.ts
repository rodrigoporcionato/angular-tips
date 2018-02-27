import { Component, OnInit } from '@angular/core';
import { PriceModel } from '../../../model/PriceModel';

@Component({
  selector: 'app-teste-novamente',
  templateUrl: './teste-novamente.component.html',
  styleUrls: ['./teste-novamente.component.css']
})
export class TesteNovamenteComponent implements OnInit {
  public priceModel: PriceModel[];
  constructor() {
  }

  ngOnInit() {
    this.priceModel = [];
    this.newItem();
  }

  addNew() {
    this.newItem();
  }
  remove(model) {
      const item = this.priceModel.filter(x => {
        return x.Id === model.Id;
      });
      console.log(item);
  }


  newItem() {

    let index = this.priceModel.length === 0 ? 0 : this.priceModel.length;
    index++;
    this.priceModel.push(
      new PriceModel(
        index,
        '0',
        '0',
        0,
        0,
        0,
        0,
        0,
        0,
        1.2,
        0,
        0,
        0,
        0,
        0,
        0,
        1.9,
        0,
        0,
        0,
        new Date()
      )
    );
  }

}
