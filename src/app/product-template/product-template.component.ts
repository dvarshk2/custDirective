import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iobj, Iproduct } from '../shared/model/data';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {
@Input()  pInput !: Iproduct;
@Output() statusEmitter: EventEmitter<Iobj> = new EventEmitter<Iobj>();
  constructor() { }

  ngOnInit(): void {
  }
  onStatusHandler(stats:string, pId:string){
    let obj: Iobj ={
      status : stats,
      id :pId,
    }
    this.statusEmitter.emit(obj);
  }
}
