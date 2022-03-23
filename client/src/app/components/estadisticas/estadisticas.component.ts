import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { jsPDF } from "jspdf";
import { Html2CanvasOptions } from 'jspdf';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  doc = new jsPDF();

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
  labels: [ 'Jabones', 'Cremas', 'Sueros', 'Tonicos', 'Maquillaje', 'Mascarillas', 'Accesorios' ],
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Productos Vendidos' }
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
  labels: [ [ 'Enero' ], [ 'Marzo' ], 'Febrero' ],
  datasets: [ {
    data: [ 2000, 4120, 1200 ]
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

  generatePDF(){
    //this.doc.text("Hello world!", 10, 10);
    //this.doc.save("a4.pdf");
    const DATA: any = document.getElementById('chart');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
    };
    html2canvas(DATA, options).then(
      (canvas) =>{
        const img = canvas.toDataURL ('image/PNG');
        const bufferX = 15;
        const bufferY = 15; 
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX; 
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      }
    )
    .then((docResult)=>{
      docResult.save(`${new Date().toISOString}_reporte.pdf`);

    })

  }
}
