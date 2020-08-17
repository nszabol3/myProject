import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }


  data = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
    ]),
    password: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")
    ])
  })

  change = true 

  buttonChange (event){
    console.log(event)  

    if (event.target.className == "button2") {
      if (this.change){
        console.log("if", this.change)
        event.target.style.marginLeft = "13px";
        this.change = !this.change
      }
      else{
        console.log("else ", this.change)
        event.target.style.marginRight = "13px";
        event.target.style.marginLeft = "0px"
        this.change = !this.change
      }
    }
  }

}
