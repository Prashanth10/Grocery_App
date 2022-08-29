import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  product : any;
  id:any;
  constructor(private productService: DataService, private activatedRouteService: ActivatedRoute) { 
    this.id = this.activatedRouteService.snapshot.paramMap.get('id');
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe((response:any) =>{
      this.product = response.data;
    })
  }

  ngOnInit(): void {
  }

}
