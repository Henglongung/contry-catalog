import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { CountryService } from 'src/app/internal/ws';
import { AuxDialogComponent } from '../../aux-dialog/aux-dialog/aux-dialog.component';

@Component({
  selector: 'app-country-catalog-dialog',
  templateUrl: './country-catalog-dialog.component.html',
  styleUrls: ['./country-catalog-dialog.component.scss']
})
export class CountryCatalogDialogComponent implements OnInit {

  @ViewChild(AuxDialogComponent) dialog: AuxDialogComponent;

  readonly NAME_QUERY_PARAM = "name";
  value: any[] = [];



  constructor(private route: ActivatedRoute, private service: CountryService) { }

  ngOnInit(): void {

    this.route.queryParamMap.pipe(
      map(params => {
        var selected = params.get(this.NAME_QUERY_PARAM);
        return selected
      }),
      switchMap((selected) => {
        return this.service.getCountryByName(selected as string)
      }),
      tap((resp) => {
        this.value = resp;
      })

    ).subscribe();
  }


}
