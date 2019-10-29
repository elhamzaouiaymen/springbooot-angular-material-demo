import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedureDataService } from '../../services/procedure-data.service';
import { IProcedure } from '../../models/procedure';
import { MatTableDataSource } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';


const ELEMENT_DATA: any[] = [
  {id: 1, nom: 'Hydrogen'},
  {id: 2, nom: 'Helium'},
  {id: 3, nom: 'Lithium'},
  {id: 4, nom: 'Beryllium'},
  {id: 5, nom: 'Boron'},
  {id: 6, nom: 'Carbon'},
  {id: 7, nom: 'Nitrogen'},
  {id: 8, nom: 'Oxygen'},
  {id: 9, nom: 'Fluorine'},
  {id: 10, nom: 'Neon'},
];

@Component({
  selector: 'app-procedure-list',
  templateUrl: './procedure-list.component.html',
  styleUrls: ['./procedure-list.component.scss']
})

export class ProcedureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'actions'];
  dataSource: MatTableDataSource<any>;

  procedure: IProcedure;
  addProcedureForm: any; 

  constructor(private router: Router, private procedureDataService: ProcedureDataService,
              private formBuilder: FormBuilder) {

                this.buildForm();

    this.dataSource =  new MatTableDataSource(ELEMENT_DATA);
    this.procedure = {
      nom: '',
      courant: 0,
      date: '',
      description: '',
      disatance_foyer_recepteur: 0,
      duree_acquisition: '',
      filtre_additionel: '',
      foyer: '',
      frequence_acquisition: '',
      nb_sequence_indices: '',
      taille_de_champ: 0,
      tension: 0,
      version: '',

    }
  }

  addProcedure(){
    if(this.addProcedureForm.valid){
      this.procedureDataService.createProcedure(this.addProcedureForm.value)
      .subscribe((response)=>{
        console.log(response);
      })
    }
  }

  buildForm(){
    this.addProcedureForm = this.formBuilder.group({
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

  applyFilter(filterValue: string) {
    const tableFilters = [];
    tableFilters.push({
      id: 'nom',
      value: filterValue
    });


    this.dataSource.filter = JSON.stringify(tableFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.initFilter();
    //this.getAllProcedures();

  }

  initFilter(){
    this.dataSource.filterPredicate = 
    (data: any, filtersJson: string) => {
        const matchFilter = [];
        const filters = JSON.parse(filtersJson);
  
        filters.forEach(filter => {
          const val = data[filter.id] === null ? '' : data[filter.id];
          matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
        });
          return matchFilter.every(Boolean);
      };
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
