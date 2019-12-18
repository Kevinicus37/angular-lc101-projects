import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       rocketImage.style.bottom = 10 + 'px';
       this.takeOffEnabled=false;
    }
 }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'Shuttle has landed.';
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled=true;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px'
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
        let movement = parseInt(rocketImage.style.left) - 10 + 'px';
        rocketImage.style.left = movement;
        this.width = this.width - 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    } else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    this.checkSpace(rocketImage);
  }

  checkSpace(rocketImage){
    if (this.height <= 0){
      this.handleLand(rocketImage);
    } else if (this.height > 330000 || this.width < 10000 || this.width > 460000){
      this.color = 'red';
    } else if (this.height > 300000 || this.width < 30000 || this.height <= 40000 || this.width > 420000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
    
  }

}
