import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  departments: Department[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`https://hr-timesheet-test.firebaseio.com/departments.json`);
}
}
