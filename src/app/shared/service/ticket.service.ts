import { Injectable } from '@angular/core';
import {Ticket} from "../models/ticket";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  selectedTicket: Ticket;
  readonly baseURL = 'http://localhost:3000/tickets';

  constructor(private http: HttpClient) { }

  postTicket(ticket: Ticket){
    return this.http.post(this.baseURL, ticket);
  }
}
