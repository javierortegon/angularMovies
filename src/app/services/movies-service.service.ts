import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(
    private http: HttpClient
  ) { }

  createServiceMovie(movie: any):any{
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' :'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTNmNDM4ZTNiMmU1MTRkZDBmMTVmMjRhMjA4NmE4MjBjNDJhOWU2MTJmZmE4ZTU5YzIzMDg3ZTMwYTZhZmE2ZDcxMTFjNzZiMGY4ZTU4MzEiLCJpYXQiOjE2MDA0Mzg3NjQsIm5iZiI6MTYwMDQzODc2NCwiZXhwIjoxNjMxOTc0NzY0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mFlxuFXRIS1v3lB-vzwvYq5JA-f0OLB-Px_xmlqwTXrJPVVps459jBkCBHPbsuBb5YEZQt0tFuI0ZuFnBFJ2Tc8YKnsGTN7G8o-u5afYy1JVJdwM8DgDoORDXfmHLa5RirWOQDWBxpdB4htSAv4JMq4CFEp_Q6hkCpIiwS008lngFOPzOYUO9068FQ_Llj1TbgibC-8_9XDqDf1eN4OKrr1dYnJsdD6hIDecckfxxW7pw59yx7z0RzhPSP4agGFuvxz81UZzeG7VFYIcEzxYw1qmOrNIa6Pyd1o7Tr0p8m8u4aLW4HrTAluU148ktforbnhCTmw8O-TEnA--zpkauzjsWgbd_HHgxvTb7UpCWI2SoZ6SzsNf8Gn6_BRiX3t59A5QKTJwPBuZ1_CwBfRm16U80V7XEVt--Ns2wiKRRCpyKJeX35Frtwzb8aw2E_XniWThfApFhQN2dBq7Sa3_QRkrQ6o6SPBv276cnDjyGyEtyN0Bgb8Hey-4qXZoPfdX-uMGcblfRESbsb_Un8E3jo8w5F-ZMcYySzx32XP3MgnI63r1cf5D_NMsYc9nGliI2VvoERt4MwsOxdxF3rIkClCggFuWPqQHhy_hG8XVoKT1c38B74Kl-1vuNe7sfqfY-oybNYppmzawJc9liOL91a68_y0idOHULz6lYLXWKyc' 
    });
    return this.http.post('http://localhost/movies/public/api/movies/create',movie, {headers :httpHeaders });
  }

  showServiceMovie():any{
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' :'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTNmNDM4ZTNiMmU1MTRkZDBmMTVmMjRhMjA4NmE4MjBjNDJhOWU2MTJmZmE4ZTU5YzIzMDg3ZTMwYTZhZmE2ZDcxMTFjNzZiMGY4ZTU4MzEiLCJpYXQiOjE2MDA0Mzg3NjQsIm5iZiI6MTYwMDQzODc2NCwiZXhwIjoxNjMxOTc0NzY0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mFlxuFXRIS1v3lB-vzwvYq5JA-f0OLB-Px_xmlqwTXrJPVVps459jBkCBHPbsuBb5YEZQt0tFuI0ZuFnBFJ2Tc8YKnsGTN7G8o-u5afYy1JVJdwM8DgDoORDXfmHLa5RirWOQDWBxpdB4htSAv4JMq4CFEp_Q6hkCpIiwS008lngFOPzOYUO9068FQ_Llj1TbgibC-8_9XDqDf1eN4OKrr1dYnJsdD6hIDecckfxxW7pw59yx7z0RzhPSP4agGFuvxz81UZzeG7VFYIcEzxYw1qmOrNIa6Pyd1o7Tr0p8m8u4aLW4HrTAluU148ktforbnhCTmw8O-TEnA--zpkauzjsWgbd_HHgxvTb7UpCWI2SoZ6SzsNf8Gn6_BRiX3t59A5QKTJwPBuZ1_CwBfRm16U80V7XEVt--Ns2wiKRRCpyKJeX35Frtwzb8aw2E_XniWThfApFhQN2dBq7Sa3_QRkrQ6o6SPBv276cnDjyGyEtyN0Bgb8Hey-4qXZoPfdX-uMGcblfRESbsb_Un8E3jo8w5F-ZMcYySzx32XP3MgnI63r1cf5D_NMsYc9nGliI2VvoERt4MwsOxdxF3rIkClCggFuWPqQHhy_hG8XVoKT1c38B74Kl-1vuNe7sfqfY-oybNYppmzawJc9liOL91a68_y0idOHULz6lYLXWKyc' 
    });
    return this.http.get('http://localhost/movies/public/api/movies/show', {headers :httpHeaders });
  }

}
