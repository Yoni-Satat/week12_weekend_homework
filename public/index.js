

const app = function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  let doorColor = "yellow";
  context.fillStyle = doorColor;

  let doors = [
    {
      "color":  doorColor,
      "shape":  context.fillRect(75,125,200,350),
      "number": 1,
      "prize": false
    },
    {
      "color":  doorColor,
      "shape":  context.fillRect(325,125,200,350),
      "number": 2,
      "prize": false
    },
    {
      "color":  doorColor,
      "shape":  context.fillRect(575,125,200,350),
      "number": 3,
      "prize": false
    }
  ]

  const hostOpenDoor = document.querySelector('#host');
  hostOpenDoor.addEventListener('click', function() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

      doors.forEach(function(door){
        if(door.number === randomNumber) {
          console.log(door);
          console.log(randomNumber);
          console.log(this);
          doorColor = "red";
          context.fillStyle = doorColor;


        }
      });
  });





  // end of app()
}

document.addEventListener('DOMContentLoaded', app);
