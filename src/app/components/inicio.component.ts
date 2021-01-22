import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client'
import { WeathermapService } from '../services/weathermap.service';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ciudades: any


  constructor( private WeathermapService: WeathermapService) { }

  ngOnInit(): void {
    
    this.obtenerClima()
  }

  obtenerClima() {

    this.WeathermapService.obtenerClima().subscribe( (resp: any) => this.ciudades = resp.list )
    const data = {
      pais: this.ciudades.name,
      lat: this.ciudades.coord.lat,
      lon: this.ciudades.coord.lon
    }
    this.WeathermapService.guardarCordenadas(data).subscribe( resp => console.log(resp))

  }



 dataPrueba: any[] = [
  {
    ciudad: "santiago",
    hora: "20:00",
    temperatura: 21
},
{
    ciudad: "Zurich",
    hora: "17:00",
    temperatura: 21
},
{
    ciudad: "Auckland",
    hora: "12:00",
    temperatura: 21
},
{
    ciudad: "Sydney",
    hora: "10:00",
    temperatura: 21
},
{
    ciudad: "Londres",
    hora: "14:00",
    temperatura: 21
},
{
    ciudad: "Georgia",
    hora: "14:00",
    temperatura: 21
},
];


}
