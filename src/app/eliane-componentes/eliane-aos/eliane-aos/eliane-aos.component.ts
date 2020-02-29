import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-eliane-aos',
  templateUrl: './eliane-aos.component.html',
  styleUrls: ['./eliane-aos.component.css']
})
export class ElianeAosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init();

  }

}
