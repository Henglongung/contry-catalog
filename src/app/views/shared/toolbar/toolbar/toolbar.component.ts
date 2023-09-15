import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() onSubmitSearch = new EventEmitter<{
    name: string,
    sorting: string,
  }>();

  isFilterOptionOpen = false;

  isOpenDialog = false;

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      name: [],
      sorting: [],
    });
  };


  buildSearchArgs() {
    let value = { ...this.searchForm.value };

    return value;
  }

  submitSearch() {
    this.onSubmitSearch.emit(this.buildSearchArgs());
  };

  toggleFilter() {
    this.isFilterOptionOpen = !this.isFilterOptionOpen;
  };

  clearFilter() {
    this.searchForm.reset();
  };

  exportArgs = () => {
    return this.buildSearchArgs();
  }

  ngOnInit(): void {
  }

}
