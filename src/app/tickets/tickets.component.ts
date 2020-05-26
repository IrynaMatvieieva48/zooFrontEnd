import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TicketService} from "../shared/service/ticket.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers: [TicketService]
})
export class TicketsComponent implements OnInit {

  constructor(private router: Router, public ticketService: TicketService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.ticketService.selectedTicket = {
      _id: "",
      name: "",
      surname: "",
      email: "",
      type: "",
      price: null
    }
  }

  onSubmit(form: NgForm) {
    form.value.price = this.getPrice(form.value.type.toString());
    this.ticketService.postTicket(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }

  getPrice(type: string): number{
    if(type == 'Студентський') return 100;
    if(type == 'Шкільний') return 100;
    if(type == 'Пенсійний') return 75;
    return 150;
  }
}
