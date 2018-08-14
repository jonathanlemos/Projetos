import { Component, OnInit, Input } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit{

  constructor(private dataBaseService: ContatosDataBaseService){}
  
  @Input() contato: ContatoModel;

  ngOnInit(){

  }

}
