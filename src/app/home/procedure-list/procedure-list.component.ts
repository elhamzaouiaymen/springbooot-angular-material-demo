import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedureDataService } from '../../services/procedure-data.service';

export interface PeriodicElement {
  id: number,
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
];

@Component({
  selector: 'app-procedure-list',
  templateUrl: './procedure-list.component.html',
  styleUrls: ['./procedure-list.component.scss']
})

export class ProcedureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, private procedureDataService: ProcedureDataService) {}

  ngOnInit() {
    //this.getAllProcedures();
  }

  /*getAllProcedures(){
    this.procedureDataService.getAllProcedures().subscribe((data)=>{
    console.log(data)
      this.dataSource = data;
    })
  }*/

  goToDetail(idProcedure: number){
    this.router.navigate([`procedure/${idProcedure}`]);
  }

  updateProc(idProcedure: number){
    this.router.navigate([`procedure/update/${idProcedure}`]);
  }

  viewOldVersions(idProcedure: number){
    this.router.navigate([`procedure/${idProcedure}/versions`]);
  }

}
