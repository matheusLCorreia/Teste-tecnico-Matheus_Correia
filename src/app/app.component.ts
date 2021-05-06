import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hashtags-twitter';

  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit() {
    // document.getElementById('#body').style.backgroundColor = 'black';
    Object.defineProperty(window, 'spinner', { value: this.spinner, enumerable: true, writable: true, configurable: true });
  }
}
