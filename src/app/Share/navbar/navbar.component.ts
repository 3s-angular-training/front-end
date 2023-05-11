import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public searchTerm: string = '';
  public totalItems: number = 0;
  selectedGender: string | null = null;
  products: any[] | undefined;
  @Output() genderSelected = new EventEmitter<any>();

  constructor(private prd: ColorService) { }

  ngOnInit(): void {
    this.prd.getProduct().subscribe((res: any[]) => {
      this.products = res;
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.prd.search.next(this.searchTerm);
  }

  searchGender(gender: string) {
    this.selectedGender = gender;
    this.genderSelected.emit(this.selectedGender);
    console.log(gender);
    this.prd.filterType.next(gender)
  }
}
