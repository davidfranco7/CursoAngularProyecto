import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';
import { PersonasService } from '../servicios/personas.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit {

  @Input() personas: Array<Persona> = [];

  constructor(private personasService : PersonasService, private route : ActivatedRoute) {
    
    this.personas = personasService.getPersonas();
   }

  ngOnInit(): void {
  }

}
