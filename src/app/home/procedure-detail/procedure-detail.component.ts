import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcedureDataService } from '../../services/procedure-data.service';
import { IProcedure } from '../../models/procedure';

@Component({
  selector: 'app-procedure-detail',
  templateUrl: './procedure-detail.component.html',
  styleUrls: ['./procedure-detail.component.scss']
})
export class ProcedureDetailComponent implements OnInit {

  currentProcedureId: string;
  currentProcedure: IProcedure;

  constructor(private activatedRoute : ActivatedRoute, private procedureDataService: ProcedureDataService) { }

  ngOnInit() {
    this.getCurrentProcedure();
  }

  getCurrentProcedure(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.currentProcedureId = params['id'];
      this.procedureDataService.getProcedureById(this.currentProcedureId)
      .subscribe((p: IProcedure)=>{
        this.currentProcedure = p;
      });
    });
  }

}
