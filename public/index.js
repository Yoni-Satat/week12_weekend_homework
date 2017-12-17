const app = function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const createDoors = document.querySelector('#create-doors');
  createDoors.addEventListener('click', function() {
    doorNumberOne('blue');
    doorNumberTwo('blue');
    doorNumberThree('blue');
  });

  const doorNumberOne = function(fill) {
    context.fillStyle = fill;
    context.fillRect(75,125,200,350);
  }

  const doorNumberTwo = function(fill) {
    context.fillStyle = fill;
    context.fillRect(325,125,200,350);
  }

  const doorNumberThree = function(fill) {
    context.fillStyle = fill;
    context.fillRect(575,125,200,350);
  }

}


document.addEventListener('DOMContentLoaded', app);
