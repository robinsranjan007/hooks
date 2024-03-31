import { Component, OnInit,Input, DoCheck, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterContentInit,AfterViewInit{
  title = 'hooks';
  data!:string;


constructor()
{
console.log('I am the parent components constructor')
}
  


  ngOnInit(): void {

    console.log('I am the parent component ngonit')
   
  }
 
  sendData(val:string)
  {
    this.data=val;
 
  }

  ngAfterContentInit()
  {
    console.log('ngafterconetnerinit i am being called from the parent')
  }
 
  ngAfterViewInit()
  {
    console.log('after all the child component is called')
  }



}
