import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit {

  @Input() searchBtnEnabled = true;
  @Input() clearBtnEnabled = true;
  @Input() expandable = false
  @Input() expandContent: TemplateRef<any>;

  @Output() onSearch = new EventEmitter();
  @Output() onClear = new EventEmitter();

  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;

  }

}
