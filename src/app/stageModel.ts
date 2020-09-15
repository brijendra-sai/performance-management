class task {
  title: string;
  isDone: boolean;
}

export class stageModel {
  name: string;
  taskList: task[];
  startDate: Date;
  endDate: Date;
  progress: string;
}
