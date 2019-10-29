import { Injectable } from '@angular/core';
import { IProcedure } from '../models/procedure';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcedureDataService {

  constructor(private httpClient: HttpClient) { }

  createProcedure(procedure: IProcedure): Observable<any>{
    return this.httpClient.post(environment.base_url + 'AddProcedure', procedure);
  }

  /* TODO - TO BE COMPLETED */
  updateProcedure(procedure: IProcedure): Observable<any>{
    return this.httpClient.put(environment.base_url + '', procedure);
  }

  getAllProcedures(): Observable<any>{
    return this.httpClient.get( environment.base_url + 'procedures');
  }

  getProcedureById(procedureId: string): Observable<any>{
    return this.httpClient.get( environment.base_url + `procedures/${procedureId}`);
  }


}
