import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { PesquisaHashtagsService } from './pesquisa-hashtags.service';

@Component({
  selector: 'app-pesquisa-hashtags',
  templateUrl: './pesquisa-hashtags.component.html',
  styleUrls: ['./pesquisa-hashtags.component.css']
})
export class PesquisaHashtagsComponent implements OnInit {
  /*Hashtags: https://www.appgeek.com.br/hashtags-populares-instagram/#:~:text=Hashtags%20mais%20usadas%20para%20ganhar%20curtidas%20e%20seguidores,%23tagsforlikes%209%20%23f4f%2010%20%23l4l%20Mais%20itens...%20*/
  public hashtag: string;
  public list_hashtags: any[] = ['#cool', '#awesome', '#fitness', '#travel', '#trip', '#summer', '#holiday', '#work', '#brasil'];
  public result_search: any[] = [];
  public msg: string = "";
  
  constructor(private service: PesquisaHashtagsService) { }

  ngOnInit(): void {
    
    // let teste = this.http.get('https://api.twitter.com/2/tweets/search/recent', {
    //   headers: {
    //     'User-Agent': 'v2RecentSearchJS',
    //     'authorization': `Bearer ${environment.bearer}`
    //   }
    // }).subscribe((res) => {
    //   console.log(res);
    // });

    // console.log(teste);
  }

  pesquisar(){
    if(this.hashtag.length <= 2 && this.hashtag.length != 0){
      this.msg = "Digite ao menos 3 letras para concluir a pesquisa.";
      this.result_search = [];
    }
    else if(this.hashtag.length == 0){
      this.msg = "";
      this.result_search = [];
    }
    else{
      this.msg = "";
      this.result_search = [];

      this.list_hashtags.forEach((element) => {
        if(element.indexOf(this.hashtag.toLowerCase()) != -1){
          this.result_search.push(element);
        }
      });
    }
  }

  salvarHashs(){
    window['spinner'].show();
    setTimeout(() => {
      window['spinner'].hide();
      Swal.fire("Sucesso", "Hashtags salvas com sucesso!", "success");
    }, 2000);
  }
}
