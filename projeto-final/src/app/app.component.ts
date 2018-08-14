import { Component } from '@angular/core';
import { ContatoModel } from '../app/modelos/contato-model';
import { ContatosDataBaseService } from '../app/servicos/contatos-data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContatosDataBaseService]
})
export class AppComponent {
  title = 'Projet Final';
  contatoclicado : ContatoModel;

  constructor(private dataBaseService: ContatosDataBaseService){}

  enviarDetalhe(id):void{
    debugger
    this.contatoclicado = this.dataBaseService.getContato(id);
  }
}
