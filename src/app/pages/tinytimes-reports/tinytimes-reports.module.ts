import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './tinytimes-reports.routing.ts';

import { EasyqService } from '../../../app/shared/service/easyq.service';

import { DataTableModule, SharedModule, PaginatorModule, CalendarModule } from 'primeng/primeng';


import { TinytimesReports } from './tinytimes-reports.component.ts';
import { Hour24ChannelDauComponent } from './me/hour-24-channel-dau.component.ts'
import { Hour24ChannelDetailComponent } from './me/hour-24-channel-details.component.ts'
import { Hour24ChannelDemoComponent } from './me/hour-24-channel-demo.component.ts'
import { Hour24ChannelDetailSmartComponent } from './me/hour-24-channel-details-smart.component'
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    DataTableModule,
    SharedModule,
    PaginatorModule,
    CalendarModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    TinytimesReports,
    Hour24ChannelDauComponent,
    Hour24ChannelDetailComponent,
    Hour24ChannelDemoComponent,
    Hour24ChannelDetailSmartComponent
  ],
  providers:[
    EasyqService
  ]
})
export default class TinytimesReportsModule {
}