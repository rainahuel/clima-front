import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeathermapService {

  apiKey = "ff1fcd2fc95add21e87c8f1c85388553"

  constructor(private http: HttpClient) { }

  
  obtenerClima() {
    return this.http.get(env.urlBaseDos + `2193733,3871336,2657896,2147714,4197000,2643743&units=metric&appid=${this.apiKey}`)
  }

  guardarCordenadas(body) {
    return this.http.post('http://localhost:3001/cordenadas', body)
  }

}
