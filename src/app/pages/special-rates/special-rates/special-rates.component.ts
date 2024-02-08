import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RateService } from '../rates.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-special-rates',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './special-rates.component.html',
  styleUrl: './special-rates.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SpecialRatesComponent {
  selectedSize: string = '20FT';
  selectedType: string = 'dry';
  data: any;
  freeDays: any;
  allData = [] as Array<any>;
  pageSize: number = 9;
  pageIndex: number = 1;
  showAll = false;
  activeName: string | null = null;

  get dataToDisplay() {
    if (this.showAll) {
      return this.data;
    } else {
      return this.data.slice(0, 9);
    }
  }

  sizes = [
    {
      id: '20FT',
      name: '20FT',
    },
    {
      id: '40FT',
      name: '40FT',
    },
    {
      id: '40FT HC',
      name: '40FT HC',
    },
  ];

  types = [
    {
      id: 'dry',
      name: 'DRY',
    },
    {
      id: 'reefer',
      name: 'REEFER',
    },
  ];

  constructor(private rateService: RateService) {}

  ngOnInit(): void {
    this.getRates();
  }


  carrierName = [
    'COSCO',
    'CMA CGM',
    'MAERSK',
    'PIL',
    'ZIM',
    'OOCL',
    'MSC',
    'ONE',
    'ESL',
    'EVERGREEN',
    'HAPAG LLOYD',
  ];

  getCarrierName(name: string) {
    this.activeName = name;
    this.data = this.allData.filter((item: any) => {
      if (item.carrier_name == name) {
        return item;
      }
    });
  }

  getRates() {
    this.rateService
      .getRates(
        this.selectedSize,
        this.selectedType,
        this.pageSize,
        this.pageIndex
      )
      .subscribe((res: any) => {
        if (res) {
          this.allData = res.data.rates;
          this.data = this.allData.filter((item: any) => {
            if (item.carrier_name == 'COSCO') {
              return item;
            }
          });
        }
      });
  }
}
