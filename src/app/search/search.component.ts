import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from '../characters/character/shared/characters-api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  character: any[] = [];
  loading: boolean;
  constructor(private service: CharactersApiService) { }

  Search(termino: string){
    console.log(termino);
    
    this.loading = true;
    this.service.getCharacter(termino)
    .subscribe((data: any)=>{
      console.log(data);
      this.loading = false;
     return this.character = data;
     
    })
   
  }

  ngOnInit() {
    this.Search('');
  }

}
