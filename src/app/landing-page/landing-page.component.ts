import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  // add this array
  sideBarInfoContent: Array<string> = ['Follow your interests.',
    'Hear what people are talking about.',
    'Join the conversation.'];

  selectedModal: string;

  constructor() { }

  ngOnInit(): void {
  }

  showSignUp() {
    this.selectedModal = 'SIGNUP';
  }

  showLogin() {
    this.selectedModal = 'LOGIN';
  }

}
