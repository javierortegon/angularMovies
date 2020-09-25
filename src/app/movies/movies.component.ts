import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {MoviesServiceService} from '../services/movies-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesData: any[] = [];
  public movieForm: FormGroup;

  constructor(
    private moviesService:MoviesServiceService
  ) { 
    this.movieForm = new FormGroup({
      'name': new FormControl(''),
      'description': new FormControl('')
    })
  }

  sendForm(){

    let movideData ={
      "name": this.movieForm.get('name').value,
      "description": this.movieForm.get('description').value,
      "id_user": 1
    }

    this.moviesService.createServiceMovie(movideData).subscribe(
      data=>{
        if( data !== null && data !==undefined){
          console.log("pelicula registrada");
        }else{
          console.log("pelicula no registrada");
        }
      },error => {
        console.log("Error: " + error);
      }
    );

    this.ngOnInit();
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.moviesService.showServiceMovie().subscribe(
      data =>{
        this.moviesData = data['movies'];
      },error =>{
        console.log("Error: " + error);
      }
    )
  }

}
