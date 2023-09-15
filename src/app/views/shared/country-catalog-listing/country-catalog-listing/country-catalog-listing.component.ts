import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CountryService } from 'src/app/internal/ws';


@Component({
  selector: 'app-country-catalog-listing',
  templateUrl: './country-catalog-listing.component.html',
  styleUrls: ['./country-catalog-listing.component.scss']
})
export class CountryCatalogComponent implements OnInit {

  readonly NAME_QUERY_PARAM = "name";

  @Output() onFetching = new EventEmitter<boolean>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  itemTotal: number = 0;
  pageSizeOptions = [25, 50, 75];
  pagePublisher = new Subject<PageEvent & { sizable: boolean }>();
  searchArgs: { name: string; sorting: string; };

  dataSource = new MatTableDataSource<any>([]);

  displayColumns = [
    'display',
    'name',
    'characterCountryCode',
    'nativeName',
    'callingCode'
  ];

  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.pagePublisher.asObservable().pipe(
      tap(() => {
        this.onFetching.emit(true);
      }),
      switchMap(({ pageSize, pageIndex, sizable }) => {
        return this.countryService.getCountryCatalogs().pipe(
          map((value) => {
            return { value: value, pageIndex: pageIndex, pageSize: pageSize };
          })
        )
      }),
      tap(({ value, pageIndex, pageSize }) => {

        var isSearch = false;
        var searchValue: any = value;
        if (typeof this.searchArgs.name === 'string' && this.searchArgs.name.length > 0) {
          var filteredValue = value.filter((country: any) => {
            var dataToInclude = country.name.official ?? "";
            var searchTerm = this.searchArgs.name.toLocaleLowerCase();

            return dataToInclude.toLocaleLowerCase().includes(searchTerm);
          });
          searchValue = filteredValue;
          isSearch = true;

        }

        var sortedValue;
        if (this.searchArgs.sorting == "dsc") {
          sortedValue = this.getDecendingValue(searchValue);
        } else {
          sortedValue = this.getAscendingValue(searchValue)
        }


        if (isSearch) {
          this.dataSource = new MatTableDataSource<any>(sortedValue);
          this.itemTotal = searchValue.length;
        } else {
          this.dataSource = new MatTableDataSource<any>(sortedValue.slice(pageIndex * pageSize, pageSize + (pageIndex * pageSize)));
          this.itemTotal = value.length || this.itemTotal;
        }


      }),
      tap(() => {
        this.onFetching.emit(false);
      }),

    ).subscribe();
  }

  onPage(pe: PageEvent) {
    this.pagePublisher.next({ ...pe, sizable: false });
  };

  submitSearch(searchArgs: any) {

    this.searchArgs = searchArgs;
    // Clear pages
    this.dataSource = new MatTableDataSource<any>([]);
    this.itemTotal = 0;
    this.paginator.pageIndex = 0;

    this.pagePublisher.next({
      pageIndex: 0,
      sizable: true,
      pageSize: this.paginator.pageSize
    } as PageEvent & { sizable: boolean; });
  };

  getAscendingValue(value: any) {
    return value.sort((a: any, b: any) => {
      if (b.name.official.localeCompare(a.name.official) == 1) {
        return -1;
      }

      return 1;
    });
  }

  getDecendingValue(value: any) {
    return value.sort((a: any, b: any) => b.name.official.localeCompare(a.name.official)
    );
  }

}
