import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-index',
  templateUrl: './datos-index.component.html',
  styleUrls: ['./datos-index.component.css']
})
export class DatosIndexComponent implements OnInit {

  constructor(
    
    private formBuild: FormBuilder,
    
    ) {}

  ngOnInit() {
  }

}
