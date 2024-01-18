import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comserver',
  standalone: true,
  imports: [],
  templateUrl: './comserver.component.html',
  styleUrl: './comserver.component.css'
})
export class ComserverComponent implements OnInit{

  message!:any;

  constructor(private http:HttpClient){}

  ngOnInit():void{
    let response = this.http.get("http://localhost:8081/welcome",{responseType:'text'});
    response.subscribe((data) => this.message = data);
  }
  
}
