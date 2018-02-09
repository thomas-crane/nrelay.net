import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Message } from '../models/message';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DbService {

  private log: Message[];

  messageLog: Subject<Message[]>;

  constructor(private db: AngularFireDatabase) {
    this.log = [];
    this.messageLog = new Subject();
    this.db.list<Message>('message-log').stateChanges(['child_added', 'child_removed']).subscribe((info) => {
      if (info.type === 'child_removed') {
        this.log.pop();
      } else {
        this.log.unshift(info.payload.val());
      }
      this.messageLog.next(this.log);
    });
  }

}
