import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService 
{
  constructor(private WebReqService: WebRequestService) { }

  getMusic()
  {
    return this.WebReqService.get('getAll');
  }


  // 5 Queries

  getComposer(composer: string|null)
  {
    return this.WebReqService.get(`getComposer/${composer}`);
  }

  getGrade(grade: string|null)
  {
    return this.WebReqService.get(`getGrade/${grade}`);
  }

  getInstrument(instrument: string|null)
  {
    return this.WebReqService.get(`getInstrument/${instrument}`);
  }

  getDiff(instrument: string|null)
  {
    return this.WebReqService.get(`getDiff/${instrument}`);
  }

  getPml()
  {
    return this.WebReqService.get('getPml');
  }

}
