import { Component, OnInit, ɵConsole } from '@angular/core';
import { HostListener } from '@angular/core';

for (let i = 112; i < 124; i++) {
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { 
    for (let i = 112; i < 124; i++) {
      this.notTypableChar.push(i)
    }
  }

  ngOnInit(): void {
  }

  emailType = ["gmail", "freemail", "citromail"]
  specialNeedChar = ["@", "."]
  emailEnd = ["com", "hu"]


  notTypableChar = [13, 8, 9, 37, 38, 39, 40, 107, 109, 106, 111, 144, 46, 35, 34, 45, 36, 33, 27,]

  char = false

  num: any

  data= ''
  text = ''
  
  keyFor = true

  onClick(event: any) {
    this.char = true
  }

  getData (event: any){
    console.log("Data: ", this.data) 
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.char){
      if (event.keyCode == 13) {
        this.text += event.key
        console.log(event.keyCode)
        if (this.text.length >= 30){
          this.text = this.text.substr(1)
        }
        this.data += event.key
      }
      if (event.keyCode  == 8){
        this.text = this.text.slice(0, -1)
        console.log("Esc: ", event.key)
      }
    }
  } 

  getNum(event){
    console.log(this.num)
  }


  checkEmail(event){
    console.log("mindig")
  }

}
