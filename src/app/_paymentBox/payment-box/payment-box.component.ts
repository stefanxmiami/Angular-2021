import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-box',
  templateUrl: './payment-box.component.html',
  styleUrls: ['./payment-box.component.css']
})
export class PaymentBoxComponent implements OnInit {

  name = 'admin';
  card = '1111 1111 1111 1111';
  dateMonth = '12';
  dateYear = '21';
  cvc = '111';

  nameField = '';
  cardField = '';
  dateMonthField = '';
  dateYearField = '';
  cvcField = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.name === this.nameField && this.card === this.cardField && this.dateMonth === this.dateMonthField
      && this.dateYear === this.dateYearField && this.cvc === this.cvcField){

      localStorage.setItem('authenticated', "true");
      this.router.navigateByUrl('homepage');
    }
  }


}
