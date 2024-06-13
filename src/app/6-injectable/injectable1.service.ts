import { Injectable } from '@angular/core';

@Injectable()
export class Injectable1Service {
  private myComment: string = '';
  constructor() {
    this.myComment = 'One';
  }

  public getMyComment(): string {
    return this.myComment;
  }
}
