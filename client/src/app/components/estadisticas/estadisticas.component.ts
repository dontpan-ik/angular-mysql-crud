import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

// grafica barras 
public barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  scales: {
    x: {},
    y: {
      min: 10
    }
  },
  plugins: {
    legend: {
      display: true,
    },
    datalabels: {
      anchor: 'end',
      align: 'end'
    }
  }
};
public barChartType: ChartType = 'bar';
public barChartPlugins = [
  DataLabelsPlugin
];

public barChartData: ChartData<'bar'> = {
  labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  ]
};

// events
public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  console.log(event, active);
}

//grafica pie
 // Pie
 public pieChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    datalabels: {
      formatter: (value, ctx) => {
        if (ctx.chart.data.labels) {
          return ctx.chart.data.labels[ctx.dataIndex];
        }
      },
    },
  }
};
public pieChartData: ChartData<'pie', number[], string | string[]> = {
  labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
  datasets: [ {
    data: [ 300, 500, 100 ]
  } ]
};
public pieChartType: ChartType = 'pie';
public pieChartPlugins = [ DataLabelsPlugin ];

changeLabels(): void {
  const words = [ 'hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
    'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
    'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
    'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
    'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny' ];
  const randomWord = () => words[Math.trunc(Math.random() * words.length)];
  this.pieChartData.labels = new Array(3).map(_ => randomWord());

  this.chart?.update();
}

addSlice(): void {
  if (this.pieChartData.labels) {
    this.pieChartData.labels.push([ 'Line 1', 'Line 2', 'Line 3' ]);
  }

  this.pieChartData.datasets[0].data.push(400);

  this.chart?.update();
}

removeSlice(): void {
  if (this.pieChartData.labels) {
    this.pieChartData.labels.pop();
  }

  this.pieChartData.datasets[0].data.pop();

  this.chart?.update();
}

changeLegendPosition(): void {
  if (this.pieChartOptions?.plugins?.legend) {
    this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
  }

  this.chart?.render();
}

toggleLegend(): void {
  if (this.pieChartOptions?.plugins?.legend) {
    this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
  }

  this.chart?.render();
}

  navbar: any = {
    id: 6,
    title: "Estadisticas",
  }
  title = "Estadisticas";
  constructor() { }

  ngOnInit(): void {
  }

}
