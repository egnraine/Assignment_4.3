import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit
{
  solos: any;
  options: any = ['PML', 'Instrument', 'Composer', 'Grade'];
  instruments: any = ['Violin', 'Viola', 'Cello', 'String Bass'];

  constructor
  (
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) { }

  searchForm = this.formBuilder.group
  ({
      input: '',
      optionName: [''],
  });

  filterForm = this.formBuilder.group
  ({
      instrumentName: ['']
  });

  ngOnInit() 
  {
    this.taskService.getMusic().subscribe((solos: any) =>
    {
      this.solos = solos;
      this.searchForm.reset();
      this.filterForm.reset();

      // console.log(solos);
    })
  }

  // Search Option
  onSubmit(): void
  {
    const input = this.searchForm.controls['input'].value;
    const option = this.searchForm.controls['optionName'].value;

    if (option == "PML")
    {
      this.taskService.getPml().subscribe((solos: any) =>
      {
        this.solos = solos;
        this.searchForm.reset();
      })
    }

    else if (option == "Instrument")
    {
      this.taskService.getInstrument(input).subscribe((solos: any) =>
      {
        this.solos = solos;
        this.searchForm.reset();
      })
    }
    
    else if (option == "Composer")
    {
      this.taskService.getComposer(input).subscribe((solos: any) =>
      {
        this.solos = solos;
        this.searchForm.reset();
      })
    }

    else if (option == "Grade")
    {
      this.taskService.getGrade(input).subscribe((solos: any) =>
      {
        this.solos = solos;
        this.searchForm.reset();
      })
    }

    else
    {
      this.taskService.getMusic().subscribe((solos: any) =>
      {
        this.solos = solos;
      })
    }
  }


  // Filter by Instrument
  onFilter(): void
  {
    const instrument = this.filterForm.controls['instrumentName'].value;
    
    this.taskService.getDiff(instrument).subscribe((solos: any) =>
    {
      this.solos = solos;
      this.filterForm.reset();
    })
  }
}
