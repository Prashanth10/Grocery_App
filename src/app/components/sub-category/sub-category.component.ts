import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategories : any[] = [];
  catId : any;

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute) {
    this.catId = this.activateRoute.snapshot.paramMap.get('catId');
    this.dataService.getSubCategoryByCatId(this.catId).subscribe((response:any) =>{
      this.subCategories = response.data;
    })
   }

  ngOnInit(): void {
  }

}
