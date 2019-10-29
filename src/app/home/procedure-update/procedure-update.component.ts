import { Component, OnInit } from '@angular/core';
import { ProcedureDataService } from '../../services/procedure-data.service';
import { ActivatedRoute } from '@angular/router';
import { IProcedure } from '../../models/procedure';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-procedure-update',
  templateUrl: './procedure-update.component.html',
  styleUrls: ['./procedure-update.component.scss']
})
export class ProcedureUpdateComponent implements OnInit {

  currentProcedure: IProcedure;
  updateForm : any;
  constructor(private procedureDataService: ProcedureDataService, 
              private route: ActivatedRoute, 
              private formBuilder: FormBuilder) {
                this.buildForm();

    this.procedureDataService.getProcedureById(this.route.snapshot.params['id'])
    .subscribe((procedure: any)=>{
      this.currentProcedure = procedure;
    })
  }

  ngOnInit() {
  }

  buildForm(){
    this.updateForm = this.formBuilder.group({
      nom: ['', Validators.required],
      region: ['', Validators.required],
      description: ['', Validators.required],
      courant: ['', Validators.required],
      foyer: ['', Validators.required],
      duree_acquisition: ['', Validators.required],
      filtre_aditionnel: ['', Validators.required],
      frequence_acquisition: ['', Validators.required],
      nombre_sequence_indices: ['', Validators.required],
      tension: ['', Validators.required]

    })
  }

  update(){
    console.log(this.updateForm.value);
  }

}
