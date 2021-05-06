import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth_header, signature } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  abrir = false;
  constructor(public route: Router) { }

  ngOnInit(): void {
    // console.log(auth_header);
    // console.log(signature);

    // setInterval((res) =>{
    //   this.abrir = !this.abrir;
    // }, 2000);
  }
  goToLocation(rota){
    if(rota != this.route.url){
      window['spinner'].show();
      setTimeout(() => {
        this.route.navigate([rota]);
        window['spinner'].hide();
      }, 500);
    }
  }

}
