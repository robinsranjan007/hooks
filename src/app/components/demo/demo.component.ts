import { AfterContentChecked, 
  AfterContentInit, 
  Component, 
  ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit ,OnChanges ,DoCheck,AfterContentInit,AfterContentChecked{
 
@Input() inputelement!:string

@ViewChild('temp') temper!:ElementRef

@ContentChild('ref') referring! : ElementRef

@ViewChild('refpara') refpara!:ElementRef


 constructor()
 {
  console.log('I am the demo constructor')
  console.log(this.inputelement,'this is the @input element inside the constructor')
 }
 
  ngDoCheck(): void {
     console.log('ngdo check has been called from inside the child componet')
  }
 
  ngOnChanges(changes: SimpleChanges): void {
     
    console.log('I am the onchanges inside the child component' ,this.inputelement)
    console.log(changes)
  }
  
  ngOnInit(): void {
     
console.log('i am the ngonit inside the child')
console.log('this is the input element inside the demo',this.inputelement)

// console.log(this.temper.nativeElement.innerHtml)
// this will give error cause ngOnit runs beofre the inialization of the view

  }


  ngAfterContentInit(): void {
     console.log('ngAfterContentInit is called')
     console.log(this.referring.nativeElement)
  }

  ngAfterContentChecked()
  {
    console.log('this is CONTENT CHECKED',this.referring.nativeElement,'this is VIEWCHILD')
  }


ngAfterViewInit()
{
  console.log('this is ngafterview',this.refpara.nativeElement.innerText)
}


ngAfterViewChecked()
{
  console.log('this is NGAFTERVIEWCHECKED')
}

clickme()
{
    console.log('i am being clicked')

}

}
