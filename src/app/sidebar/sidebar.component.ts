import { Component, OnInit, Input } from '@angular/core';
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
  @Input() timer: number[];

  constructor(private pmaService: PmaService) {}

  //Gets stages list
  ngOnInit(): void {
    this.stageList = this.pmaService.getStageList();
  }

  //Returns stage duration/timer as a formatted string
  durationString(stage: stageModel): string {
    if (stage.progress === 'InProgress')
      return `${this.timer[0]}d:${this.timer[1]}h:${this.timer[2]}m:${this.timer[3]}s`;
    return `${moment(stage.startDate).format('Do MMM')} - ${moment(
      stage.endDate
    ).format('Do MMM')}`;
  }
}
