import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.page.html',
  styleUrls: ['./liste-livre.page.scss'],
})
export class ListeLivrePage implements OnInit {
  livres : Livre[];
  constructor(private livreService: LivreService,private router :Router) { }

  ngOnInit() {
    this.livreService.listeLivre().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
  }

}
