import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscadorService } from '../services/buscador.service';

@Component({
  selector: 'app-buscador-index',
  templateUrl: './buscador-index.component.html',
  styleUrls: ['./buscador-index.component.css']
})
export class BuscadorIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private buscadorService: BuscadorService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.buscadorService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.buscadorService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
  
}
