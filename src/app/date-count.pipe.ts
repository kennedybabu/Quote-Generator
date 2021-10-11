import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  

  // transform(value: any): any {
  //   let today: Date = new Date()
  //   let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  //   let dateDifference = Math.abs(value - todayWithNoTime)
  //   const secondsInDay = 86400
  //   let dateDifferenceSeconds = dateDifference * 0.001
  //   let dateCounter = dateDifferenceSeconds/secondsInDay

  //   if(dateCounter >= 1 && value > todayWithNoTime){
  //     return dateCounter
  //   } else {
  //     return 0;
  //   }
  // }

  transform(value: any): any {
    let now:Date = new Date();
    let thisMoment:any = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var dateDifference = Math.abs(thisMoment - value);
    var days: number = Math.floor(dateDifference/(86400000))
    var hours: number = Math.floor(dateDifference/3600000);
    var minutes: number = Math.floor(dateDifference/60000)
    var seconds: number = Math.floor(dateDifference/1000)
    var statement: string = days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + "seconds ago" ;
    return days;
    
  }

}
