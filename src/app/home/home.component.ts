import { Component, OnInit } from '@angular/core';
import { auth_header, signature } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(auth_header);
    console.log(signature);
  }

}
