import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndiceService } from '../services/indice.service';

@Component({
  selector: 'app-indice-index',
  templateUrl: './indice-index.component.html',
  styleUrls: ['./indice-index.component.css']
})
export class IndiceIndexComponent implements OnInit {


  list;
  constructor(
    private route: ActivatedRoute,
    private indiceService: IndiceService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.indiceService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.indiceService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
  
}
