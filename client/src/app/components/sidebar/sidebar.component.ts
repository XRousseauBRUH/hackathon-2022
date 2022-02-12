import { Component, Input, OnChanges, OnInit } from '@angular/core';
//import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() subMenuState;
  showMenu: boolean = true
  request: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log("inside ngOnChanges with subMenuState: ",this.subMenuState );
    this.showMenu = this.subMenuState
  }

  public onSubmit(){
    console.log(this.request)
  }

}
