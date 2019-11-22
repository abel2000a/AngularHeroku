import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaculService } from '../services/facul.service';

@Component({
  selector: 'app-facul-index',
  templateUrl: './facul-index.component.html',
  styleUrls: ['./facul-index.component.css']
})
export class FaculIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private faculService: FaculService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.faculService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.faculService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
}
