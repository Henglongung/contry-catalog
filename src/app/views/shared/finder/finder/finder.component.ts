import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '../../../../internal/ws';
import { ToolbarComponent } from '../../toolbar/toolbar/toolbar.component';

@Component({
  selector: 'app-lab',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit, AfterViewInit {

  appLoading = {
    mode: 'linear',
    modal: false,
  };

  @ViewChild(ToolbarComponent) toolbar: ToolbarComponent;



  constructor(private ws: CountryService) { }
  ngAfterViewInit(): void {
    this.toolbar.submitSearch();
  }

  toggleProgressbar(visible: boolean) {
    if (visible) {
      this.appLoading.mode = 'linear'
    } else {
      this.appLoading.mode = 'undefined';
    };
  }


  ngOnInit(): void {

  }

  submit(toolbar: any) {
    toolbar.submitSearch("hello")
  }

}
