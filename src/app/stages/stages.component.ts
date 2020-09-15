import { Component, OnInit } from '@angular/core';
import { PmaService } from '../pma.service';
import { stageModel } from '../stageModel';
import * as moment from 'moment';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css'],
})
export class StagesComponent implements OnInit {
  stageList: stageModel[];

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
