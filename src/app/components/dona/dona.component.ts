import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
})
export class DonaComponent {
  @Input() title: string = 'Sin titulo';

  @Input('labels') public doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];
  @Input('data') public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#00821C', '#09DB36', '#024D0F'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
