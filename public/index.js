const app = function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const createDoors = document.querySelector('#create-doors');
  createDoors.addEventListener('click', function() {
    doorNumberOne();
    doorNumberTwo();
    doorNumberThree();
  });

  const doorNumberOne = function() {
    context.fillStyle = 'blue';
    context.fillRect(75,125,200,350);
  }

  const doorNumberTwo = function() {
    context.fillStyle = 'blue';
    context.fillRect(325,125,200,350);
  }

  const doorNumberThree = function() {
    context.fillStyle = 'blue';
    context.fillRect(575,125,200,350);
  }

}


document.addEventListener('DOMContentLoaded', app);
