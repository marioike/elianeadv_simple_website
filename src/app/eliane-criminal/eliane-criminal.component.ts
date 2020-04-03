import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'


@Component({
  selector: 'app-eliane-criminal',
  templateUrl: './eliane-criminal.component.html',
  styleUrls: ['./eliane-criminal.component.css']
})
export class ElianeCriminalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }
}
