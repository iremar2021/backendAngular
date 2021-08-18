import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string | undefined;
  @Input() nomeProduto: string | undefined;
  @Input()
  promocao: boolean = false;
  @Input() idProduto: number | undefined;
  @Input()
  dataValidade!: string;
  @Input() precoProduto: number | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
