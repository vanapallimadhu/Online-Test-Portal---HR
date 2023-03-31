import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { questionservice } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class questioncomponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentquestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctanswer: number = 0;
  inCorrectanswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  constructor(private questionservice: questionservice) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllquestions();
    this.startCounter();
  }
  getAllquestions() {
    this.questionservice.getquestionjson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }
  nextquestion() {
    this.currentquestion++;
  }
  previousquestion() {
    this.currentquestion--;
  }
  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctanswer++;
      setTimeout(() => {
        this.currentquestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentquestion++;
        this.inCorrectanswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentquestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllquestions();
    this.points = 0;
    this.counter = 60;
    this.currentquestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentquestion / this.questionList.length) * 100).toString();
    return this.progress;

  }
}
