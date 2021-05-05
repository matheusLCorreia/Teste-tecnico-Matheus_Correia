import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PesquisaHashtagsService } from './pesquisa-hashtags.service';

@Component({
  selector: 'app-pesquisa-hashtags',
  templateUrl: './pesquisa-hashtags.component.html',
  styleUrls: ['./pesquisa-hashtags.component.css']
})
export class PesquisaHashtagsComponent implements OnInit {
  public hashtag: string;
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
    console.log("pesquisando")
  }
}
