import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-check-done',
  templateUrl: './email-check-done.component.html',
  styleUrls: ['./email-check-done.component.scss']
})
export class EmailCheckDoneComponent implements OnInit {

  counter = 3;

  constructor() {

    let intervalId = setInterval(() => {

      this.counter = this.counter - 1;

      if(this.counter === 0) {
        clearInterval(intervalId)
        window.location.href = "/login"
      }

    }, 1000)
  }

  ngOnInit(): void {
  }



}
