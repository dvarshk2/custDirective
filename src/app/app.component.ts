import { Component } from '@angular/core';
import { Iobj, Iproduct } from './shared/model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custDirective';
  productArr :Iproduct[] = [];

  onObjHandler(obj : Iproduct){
    this.productArr.push(obj);
    console.log(this.productArr);    
  }
  changeStatus(eve : Iobj){
    this.productArr.forEach(ele=>{
      if(ele.id === eve.id){
        ele.status = eve.status;
      }
    })
  }
}
