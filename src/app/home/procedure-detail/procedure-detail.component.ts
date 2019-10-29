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

  constructor(private activatedRoute : ActivatedRoute, 
              private procedureDataService: ProcedureDataService) {
    this.getCurrentProcedure();
  }

  ngOnInit() {
    this.currentProcedure = {
      nom: "Prcédure xyz",
      description: `Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip 
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
      officia deserunt mollit anim id est laborum`
    }
  }

  getCurrentProcedure(){
    this.procedureDataService.getProcedureById(this.activatedRoute.snapshot.params['id'])
    .subscribe((p: IProcedure)=>{
      this.currentProcedure = p;
    });
  }

}
