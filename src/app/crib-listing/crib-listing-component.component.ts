import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { CribsService } from '../services/cribs.service';



@Component({
  selector: 'app-crib-listing-component',
  templateUrl: './crib-listing-component.component.html',
  styleUrls: ['./crib-listing-component.component.css']
})
export class CribListingComponentComponent implements OnInit {

  cribs : Array<any>;
  error : string;
 
  constructor(private http: Http,
              private cribsService : CribsService) { }

  ngOnInit() {
    
    this.cribsService.getAllCribs()
              .subscribe(data => this.cribs = data,
              error => this.error = error.statusText );


    this.cribsService.newCribSubject.subscribe(
    //  data => this.cribs.push(data)
    data => this.cribs= [data, ...this.cribs]
    );
  }

}
