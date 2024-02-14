import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
})
export class Grafica1Component {
  public labels1: string[] = ['Pan', 'Refresco', 'Comida'];

  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [10, 15, 40],
        backgroundColor: ['#00821C', '#09DB36', '#024D0F'],
      },
    ],
  };
}
