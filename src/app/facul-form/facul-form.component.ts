import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FaculService } from '../services/facul.service';

@Component({
  selector: 'app-facul-form',
  templateUrl: './facul-form.component.html',
  styleUrls: ['./facul-form.component.css']
})
export class FaculFormComponent implements OnInit {

  
  
    faculForm: FormGroup;
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private formBuild: FormBuilder,
      private faculService: FaculService,

    ) {}
    ngOnInit() {
      this.faculForm = this.formBuild.group({
        id: [''],
        facultad_nombre: ['', [Validators.required]],
        facultad_sede: ['', [Validators.required]],
        
      });
      const id = this.route.snapshot.paramMap.get('id');
      if (id != null) {
        this.faculService.getById(id).subscribe(response => {
          this.faculForm.setValue(response);
          console.log(response);
        });
      }

    }
    save() {
      console.log(this.faculForm.value);
      let id = this.route.snapshot.paramMap.get('id');
      if (id != null) {
        this.faculService.update(id, this.faculForm.value).subscribe(response => {
          console.log("UPDATE ",response);
        });
      }else{
        this.faculService.add(this.faculForm.value).subscribe(response => {
          console.log("ADD ",response);
        });
      }
      this.router.navigate(['/facultad']);
    }

}
