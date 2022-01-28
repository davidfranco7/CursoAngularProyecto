import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../persona';
import { PersonasService } from '../servicios/personas.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit {

  @Input() personas: Array<Persona> = [];

  constructor(private personasService : PersonasService, private route : ActivatedRoute, private http: HttpClient) {
    
    this.http.get<any>('https://reqres.in/api/users?page=2').subscribe(res => {
    this.personas = res.data;
  });
    
   }

  ngOnInit(): void {
  }

}
