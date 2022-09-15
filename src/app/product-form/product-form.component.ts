import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct } from '../shared/model/data';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product! : string;
  details! : string;
  productStatus : string = 'Order Placed';
@Output()  objEmitter : EventEmitter<Iproduct> = new EventEmitter<Iproduct>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddHandler(){
    let obj = {
      pname : this.product,
      pdetails: this.details,
      status : this.productStatus,
      id: this.uuid(),
    }
    this.objEmitter.emit(obj);       
  }
  uuid(mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') {
    return `${mask}`.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
