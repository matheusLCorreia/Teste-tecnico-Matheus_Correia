import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-hashtags',
  templateUrl: './pesquisa-hashtags.component.html',
  styleUrls: ['./pesquisa-hashtags.component.css']
})
export class PesquisaHashtagsComponent implements OnInit {
  public hashtag: string;
  constructor() { }

  ngOnInit(): void {
  }

  pesquisar(){
    console.log("pesquisando")
  }
}
