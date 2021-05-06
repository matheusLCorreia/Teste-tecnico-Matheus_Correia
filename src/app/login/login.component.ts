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
    /*let form_data = {
      password: this.password,
      user: this.user
    }*/
    
    if(this.user == "matheus@hotmail.com" && this.password == "123"){
      window['spinner'].show();
      setTimeout(() => {
        window['spinner'].hide();
        Swal.fire('Sucesso', 'Login efetuado com sucesso!', 'success').then((value) => {
          this.route.navigate(['aplicacao/pesquisa-hashtags']);
        });
      }, 2000);
    }
    else{
      Swal.fire('Erro', 'Usuário não encontrado.', 'error');
    }
    
    
  }
}
