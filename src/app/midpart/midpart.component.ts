import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-midpart',
  templateUrl: './midpart.component.html',
  styleUrls: ['./midpart.component.scss']
})
export class MidpartComponent implements OnInit {
  globalStat: any;
  countryStat: any;
  cols: any[];
  colsGlobal: any[];
  constructor(private getDataService: TestService) { }

  ngOnInit() {
    
    this.getDataService.getGlobalStats().subscribe((res) => {
      this.globalStat = res;
      console.log('World', this.globalStat);
    });

    this.colsGlobal = [
      { field: 'total_cases', header: 'Total Cases' },
      { field: 'new_cases', header: 'New Cases' },
      { field: 'active_cases', header: 'Active Cases' },
      { field: 'new_deaths', header: 'New deaths' },
      { field: 'total_recovered', header: 'Total recovered' },
      { field: 'total_deaths', header: 'Total deaths' },
    ];    

    this.getDataService.getCountryStats().subscribe((res: any) => {
      this.countryStat = res.countries_stat;
      console.log('Country', this.countryStat);
    });

    this.cols = [
      { field: 'country_name', header: 'Country' },
      { field: 'cases', header: 'Cases' },
      { field: 'active_cases', header: 'Active Cases'},
      { field: 'deaths', header: 'Deaths' },
      { field: 'total_recovered', header: 'Recovered' },
      { field: 'new_cases', header: 'New cases today' },
      { field: 'new_deaths', header: 'New deaths today' },
    ];
  }
}
