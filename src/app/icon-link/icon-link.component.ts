import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss']
})
export class IconLinkComponent implements OnInit {

  constructor() { }
@Input() name: string | undefined;
@Input() altText: string | undefined;
  ngOnInit(): void {
    this.name = `/assets/units/${this.name}`;
    this.altText = this.altText != undefined ? this.altText : "Unit Icon";


  }

}
