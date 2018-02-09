import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { growDown } from '../../../animations';

@Component({
  selector: 'nr-message-log',
  templateUrl: './message-log.component.html',
  styleUrls: ['./message-log.component.scss'],
  animations: [growDown]
})
export class MessageLogComponent implements OnInit {

  constructor(public db: DbService) { }

  ngOnInit() {
  }

}
