import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaDeContatos: ContatoModel [] = [];
  @Output() idClicado = new EventEmitter();

  constructor(private dataBaseService: ContatosDataBaseService) { }

  ngOnInit() {
    //sempre que houver mudança em enviarContato(subscribe faz isso) ele atualiza 
    //a lista de contatos com os novos valores
    this.dataBaseService.enviarContato.subscribe(contatos=>this.listaDeContatos = contatos);
  }

  contatoClicado(item:number){    
    this.idClicado.emit(item);
  }
}