import { Component, OnInit } from '@angular/core';
import {Plate} from 'src/app/plate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public available:Array<Plate> = [];

  public list:Array<Plate> = [];

  public successCheckin: boolean = false;

  ngOnInit() {
    this.available.push(new Plate("Pizza", 2,0.21,"fas fa-pizza-slice"));
    this.available.push(new Plate("Hamburguer",5,0.21,"fas fa-hamburger"));
    this.available.push(new Plate("Apple",1,0.05,"fas fa-apple-alt"));
    this.available.push(new Plate("Fish",4,0.10,"fas fa-fish"));
    this.available.push(new Plate("chicken",3,0.21,"fas fa-drumstick-bite"));
  }

  public addProduct(product: Plate){
    this.list.push(product);
  }

  public removeProduct(product : Plate){
    const index = this.list.indexOf(product, 0);
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  public total():number{
    // Reduce function 
    return this.list.reduce((a, b)=>{ return a + b.price*(1+b.tax); },0);
  }

  public checkin():void{
    this.list = [];
    this.successCheckin = true;
    setTimeout(()=>this.successCheckin = false,1500);
  }
}


