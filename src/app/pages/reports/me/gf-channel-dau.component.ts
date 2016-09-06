import { Component,OnInit} from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

import {Observable} from 'rxjs/Observable';
import { EasyqService } from '../../../shared/easyq.service.ts';

@Component({
  selector: 'simple-chart-example',
  directives: [CHART_DIRECTIVES],
  template: `
        <chart *ngIf="options" [options]="options"></chart>
    `,
  styles: [
    `
      chart {
        display: block;
      }
      button {
        display: block;
        width: 100%;
        height: 25px;
      }
  `
  ],
  providers: []
})
export class GfChannelDau implements OnInit {

  private options:HighchartsOptions;

  constructor(private easyqService:EasyqService) {
  }

  ngOnInit():void {

    let map = new Map<string,string>();
    map.set('103453445','ME热舞频道');
    map.set('103463393','ME声优官频');
    map.set('102472427', 'ME奇趣频道');
    map.set('103033285', 'ME音乐官频');

    Observable.forkJoin(
      Array.from(map.keys()).map(
        i => this.easyqService.getData({
          table: 'bproduct_me_channel_dau',
          filter: '(channel_uid=' + i + ')',
          order: 'date desc',
          limit: 10
        })
      )).subscribe((recordsArr) => {

        let dates:string[];

        recordsArr = recordsArr.map(records => {

          records.reverse();

          let points:number[] = records.map(record => {return record.dau});

          dates = records.map(record => {return record.date});

          let channelUid = records[0].channel_uid;
          return {
            name : map.get(channelUid.toString()),
            data: points
          };
        });

        this.options = {
          title: {text: '官方频道DAU'},
          xAxis:{
            categories: dates
          },
          yAxis: {
            title: {
              text: "用户数"
            }
          },
          series: recordsArr
        };
      }
    )
  }

}