import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.scss']
})
export class AppLoadingComponent implements OnInit {

  @Input() mode: string;
  @Input() modal = false;
  @Input() diameter = 100;
  @Input() linearWhen: boolean;
  @Input() circularWhen: boolean;
  @Input() modalWhen: boolean;

  constructor() { }

  ngOnInit(): void { }
}
