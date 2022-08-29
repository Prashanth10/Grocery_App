import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  catId : any;

  constructor(private productDataService: DataService, private activateRouteService: ActivatedRoute) { 
    this.catId = this.activateRouteService.snapshot.paramMap.get('catId');
    this.productDataService.getProductsByCatID(this.catId).subscribe((response:any) =>{
      this.products = response.data;
    })
  }
  

  ngOnInit(): void {
  }

}
