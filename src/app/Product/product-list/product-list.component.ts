import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  products: any[] = [];
  searchkey: string = '';
  p: number = 1;
  filteredProducts: any[] = [];
  @Input() selectedGender: string = '';

  constructor(private prd: ColorService) { }
  ngOnDestroy(): void {
    this.prd.filterType.unsubscribe()
  }

  ngOnInit(): void {
    this.prd.getProduct().subscribe((res: any[]) => {
      this.products = res;
      this.filterProducts();
    });
    this.prd.filterType.subscribe((e) => {
      if (!!e) {
        this.products.filter((el) => {
          return el.gender = e
        })
      }
    })
  }

  ngOnChanges(): void {
    this.filterProducts();
  }

  filterProducts() {
    if (this.selectedGender) {
      this.filteredProducts = this.products.filter(item => item.gender === this.selectedGender);
    } else {
      this.filteredProducts = this.products;
    }
  }
}
