import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona[] = []

  constructor(private http: HttpClient) {

   }


  getPersonas(): Array<Persona> {

  return this.personas;

  }
}
