import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ]
    )
  ],
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;
  @ViewChild("doughnutCanvas", { static: true }) doughnutCanvas: ElementRef;
  // @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;

  private barChart: Chart;
  private lineChart: Chart;
  private doughnutChart: Chart;

  public firstList = false;
  public secondList = false;
  public thirdList = false;
  public fourthList = false;
  public fifthList = false;

  constructor() { }

  toggleList(tabNum) {
    switch (tabNum) {
      case 1: {
        //statements; 
        this.firstList = !this.firstList;
        if (this.firstList) {
          this.secondList = false;
          this.thirdList = false;
          this.fourthList = false;
          this.fifthList = false;
        }
        break;
      }
      case 2: {
        //statements; 
        this.secondList = !this.secondList;
        if (this.secondList) {
          this.firstList = false;
          this.thirdList = false;
          this.fourthList = false;
          this.fifthList = false;
        }
        break;
      }
      case 3: {
        //statements; 
        this.thirdList = !this.thirdList;
        if (this.thirdList) {
          this.firstList = false;
          this.secondList = false;
          this.fourthList = false;
          this.fifthList = false;
        }
        break;
      }
      case 4: {
        //statements; 
        this.fourthList = !this.fourthList;
        if (this.fourthList) {
          this.firstList = false;
          this.secondList = false;
          this.thirdList = false;
          this.fifthList = false;
        }
        break;
      }
      case 5: {
        //statements; 
        this.fifthList = !this.fifthList;
        if (this.fifthList) {
          this.firstList = false;
          this.secondList = false;
          this.fourthList = false;
          this.thirdList = false;
        }
        break;
      }
    }
  }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
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

    // Line chart

    // Doughnut chart
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Junk Food", "Dairy", "Meat", "Fruits & Vegetables", "Grains/Protiens"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 25, 30, 10, 20, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true
        //       }
        //     }
        //   ]
        // }
      }
    });

  }
}
