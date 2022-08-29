import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];
  constructor(private categoryService: DataService, private router: Router) {
    this.categoryService.getCategory().subscribe((response:any) => {
      this.categories = response.data;
    })
  }
  ngOnInit(): void {
  }

  onClickHandler(category: any){
    this.router.navigate(['products/'+category]);
  }

}
