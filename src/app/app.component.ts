
import { Component } from '@angular/core';
import { Satellite } from './satellite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then((response) => {
       response.json().then((data) => {

        let fetchedSatellites = data.satellites;
    
        for(let i = 0; i < fetchedSatellites.length; i++) {
          let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          this.sourceList.push(satellite);
        }
          this.displayList = this.sourceList.slice(0);
 }
)}
)};
  // step 8 search term//
    search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
      }
    this.displayList = this.sourceList.slice(0);

// assign this.displayList to be the array of matching satellites
// this will cause Angular to re-make the table, but now only containing matches
this.displayList = matchingSatellites;
}
    }
  }