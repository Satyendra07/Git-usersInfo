import { Component, OnInit } from '@angular/core';
import { GitInfoService } from './git-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private gitService : GitInfoService){
  }

  ngOnInit(){
     this.gitService.getUsers().subscribe(value =>{
       this.users = JSON.stringify(value);
       this.usersCount = this.users.length;
     })
  }
  title = 'app';
  users : any;
  usersCount : any
  sattuBogas : any;
}
