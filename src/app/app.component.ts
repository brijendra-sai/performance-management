import { Component, OnInit } from '@angular/core';
import { PmaService } from './pma.service';
import * as moment from 'moment';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'performance-management';
  sidebarOpen = true;
  profileOpened = false;

  subscription: Subscription;
  counter: string;
  currStageName: string;

  constructor(private pmaService: PmaService) {}

  //Toggles side bar
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  //Toggles profile dropdown
  toggleDropdown() {
    this.profileOpened = !this.profileOpened;
  }

  //returns remaining time till endDate
  timer(endDate) {
    var curr = moment();
    var d: any = endDate.diff(curr, 'days');
    if (d === 0) {
      if (endDate.diff(curr, 'days', true) < 0) d = '-0';
    }
    var hr = Math.abs(endDate.diff(curr, 'hours') % 24);
    var m = Math.abs(endDate.diff(curr, 'minutes') % 60);
    var s = Math.abs(endDate.diff(curr, 'seconds') % 60);
    this.counter = `${d}days ${hr}h ${m}m ${s}s`;
  }

  //calls timer function and updates countdown every once second
  ngOnInit() {
    const currStage = this.pmaService.getCurrStageEndTime();
    this.currStageName = currStage.name;
    const endDate = moment(currStage.endDate);

    this.timer(endDate);
    const source = interval(3000);
    this.subscription = source.subscribe(() => {
      this.timer(endDate);
    });
  }
}
