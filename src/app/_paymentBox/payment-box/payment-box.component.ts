import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";



@Component({
  selector: "app-payment-box",
  templateUrl: "./payment-box.component.html",
  styleUrls: ["./payment-box.component.css"],
})
export class PaymentBoxComponent implements OnInit {

  @Output() onDonation = new EventEmitter<number>();

  name = "admin";
  card = "1111 1111 1111 1111";
  dateMonth = "12";
  dateYear = "21";
  cvc = "111";


  nameField = "";
  cardField = "";
  dateMonthField = "";
  dateYearField = "";
  cvcField = "";
  fundsField = "";

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.name === this.nameField &&
      this.card === this.cardField &&
      this.dateMonth === this.dateMonthField &&
      this.dateYear === this.dateYearField &&
      this.cvc === this.cvcField
    ) {
      //return 5$
        this.onDonation.emit(+this.fundsField);
    }
  }
}
