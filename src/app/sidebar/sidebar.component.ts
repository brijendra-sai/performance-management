import { Component, OnInit } from '@angular/core';
import { PmaService } from '../pma.service';
import { stageModel } from '../stageModel';
import * as moment from 'moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  stageList: stageModel[];
  counter: string = '5d:4h:3m:34s';

  constructor(private pmaService: PmaService) {}

  //Gets stages list
  ngOnInit(): void {
    this.stageList = this.pmaService.getStageList();
  }

  //Returns stage duration as formatted string
  durationString(stage: stageModel): string {
    return `${moment(stage.startDate).format('Do MMM')} - ${moment(
      stage.endDate
    ).format('Do MMM')}`;
  }
}
