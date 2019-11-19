import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Events } from '@ionic/angular';
import { Chart } from "chart.js";
import { trigger, style, animate, transition } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core'
import * as moment from 'moment-timezone';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]
    )
  ],
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;
  private lineChart: Chart;
  public firstList = false;
  public secondList = false;
  public myDate = new Date().toISOString();
  public labelsList = [];
  public valuesList = [];
  constructor(public events: Events, private changeRef: ChangeDetectorRef) {
    events.subscribe('calUpdate', (calc, time) => {
      console.log('Calories', calc, 'at', time);
      this.pushValues(calc, time);
    });
  }

  pushValues(calc, time) {
    this.valuesList.push(calc);
    let str = moment(time).tz('America/Pangnirtung').format('h:mm A');
    this.labelsList.push(str);
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: this.labelsList,
        datasets: [
          {
            label: "# of calories",
            data: this.valuesList,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false
              }
            }
          ]
        }
      }
    });
  }

  toggleList(tabNum) {
    switch (tabNum) {
      case 1: {
        this.firstList = !this.firstList;
        break;
      }
      case 2: {
        this.secondList = !this.secondList;
        break;
      }
    }
  }
  ngOnInit() {
    this.labelsList = ["8:00 AM", "8:30 AM", "8:45 AM", "10:00 AM", "12:00 PM", "12:30 PM"];
    this.valuesList = [250, 450, 1000, 500, 200, 300];
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: this.labelsList,
        datasets: [
          {
            label: "# of calories",
            data: this.valuesList,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false
              }
            }
          ]
        }
      }
    });
  }
}
