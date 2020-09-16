import { Injectable } from '@angular/core';
import { stageModel } from './stageModel';
import { userModel } from './userModel';

@Injectable({
  providedIn: 'root',
})
export class PmaService {
  constructor() {}

  //User details(mock of api)
  user: userModel = {name: 'Brijendra'};

  //stages details (mock  of api)
  stageList: stageModel[] = [
    {
      name: 'Stage 1',
      taskList: [
        { title: 'Select feedback provider', isDone: true },
        { title: 'Review feedback receivers', isDone: true },
      ],
      startDate: new Date(2020, 10, 2),
      endDate: new Date(2020, 10, 3),
      progress: 'Completed',
    },
    {
      name: 'Stage 2',
      taskList: [
        { title: 'Feedback providers approval', isDone: true },
        { title: 'Review no. of appraisals', isDone: false },
      ],
      startDate: new Date(2020, 10, 4),
      endDate: new Date(2020, 10, 9),
      progress: 'InProgress',
    },
    {
      name: 'Stage 3',
      taskList: [{ title: 'Provide feedback', isDone: false }],
      startDate: new Date(2020, 10, 9),
      endDate: new Date(2020, 10, 11),
      progress: 'Yet to start',
    },
    {
      name: 'Stage 4',
      taskList: [{ title: 'Self Appraisal', isDone: false }],
      startDate: new Date(2020, 10, 12),
      endDate: new Date(2020, 10, 13),
      progress: 'Yet to start',
    },
    {
      name: 'Stage 5',
      taskList: [{ title: 'L1 consolidation & approvals', isDone: false }],
      startDate: new Date(2020, 10, 14),
      endDate: new Date(2020, 10, 15),
      progress: 'Yet to start',
    },
    {
      name: 'Stage 6',
      taskList: [{ title: 'L2+ consolidation & approvals', isDone: false }],
      startDate: new Date(2020, 10, 16),
      endDate: new Date(2020, 10, 17),
      progress: 'Yet to start',
    },
    {
      name: 'Stage 7',
      taskList: [{ title: 'Management reviews', isDone: false }],
      startDate: new Date(2020, 10, 18),
      endDate: new Date(2020, 10, 19),
      progress: 'Yet to start',
    },
    {
      name: 'Stage 8',
      taskList: [{ title: 'Release and discussions', isDone: false }],
      startDate: new Date(2020, 10, 20),
      endDate: new Date(2020, 10, 21),
      progress: 'Yet to start',
    },
  ];

  //returns user object
  getUser(): userModel {
    return this.user;
  }

  //returns stages list
  getStageList(): stageModel[] {
    return this.stageList;
  }

  //returns curr stage if any otherwise undefined
  getCurrStageEndTime(): stageModel {
    return this.stageList.find((stage) => stage.progress == 'InProgress');
  }
}
