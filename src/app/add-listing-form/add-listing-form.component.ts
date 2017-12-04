import { Component, OnInit, ViewChild } from '@angular/core';
import {CribsService} from '../services/cribs.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {


  @ViewChild('newCribForm') newCribForm;
  propertyTypes : Array<string> = ['House','Condo','Villa']

  constructor(private cribService: CribsService) { }

  ngOnInit() {

    // this.propertyTypes.push('Condo');
    // this.propertyTypes.push('Home')
  }


  onCribSubmit(data):void{
    
    this.cribService.addCrib(data);
    this.newCribForm.reset();
  }

}
