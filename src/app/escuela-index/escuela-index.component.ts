import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscuelaService } from '../services/escuela.service';

@Component({
  selector: 'app-escuela-index',
  templateUrl: './escuela-index.component.html',
  styleUrls: ['./escuela-index.component.css']
})
export class EscuelaIndexComponent implements OnInit {
  
  list;
  constructor(
    private route: ActivatedRoute,
    private escuelaService: EscuelaService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.escuelaService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.escuelaService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
