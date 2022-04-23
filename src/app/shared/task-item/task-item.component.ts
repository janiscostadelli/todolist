import { Component, Input, OnInit } from '@angular/core'

export interface Task {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  tasks: Task[] = [
    {
      name: 'Limpar a casa',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Estudar Angular',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Cozinhar',
      updated: new Date('1/28/16'),
    },
  ];
  tasksNotes: Task[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  @Input() isToday: boolean = false;
  @Input() isLate: boolean = false;
  constructor() { }

  ngOnInit(): void { }


}
