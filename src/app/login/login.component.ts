import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string;
  public user: string;

  constructor(protected route: Router) { }

  ngOnInit(): void {
  }

  logar(){
    // fazer requisição aqui
    let form_data = {
      password: this.password,
      user: this.user
    }
    console.log(form_data);
    Swal.fire('Sucesso', 'Login efetuado com sucesso!', 'success');
    this.route.navigate(['aplicacao']);
  }
}
