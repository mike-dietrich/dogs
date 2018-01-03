function fade_out() {
  document.getElementById("mydiv").style.display = 'none';
//console.log("hi")
}
setTimeout(fade_out, 5000)

// console.log("hi")

function randompupper(data){
  // let number = json.message.length;
  // let photo = Math.floor(Math.random() * number);
  // console.log(randomdogphotos.message[photo]);
  // console.log(data);
  console.log(data.message);
  document.getElementById("dog").src = data.message;
}

// (async getpuppers => {
//   try {
//     var response = await fetch('https://dog.ceo/api/breeds/image/random');
//     // var data = await response.json().then(randompupper());
//     // response.json().then(randompupper(data));
//     promise.then(getpuppers(result))
//     {
//       console.log(result);
//     }
//     function err
//       console.log()
//     });
//     })
//     console.log(response.json());
//   } catch (e) {
//     console.log("Wooof Wooof")
//   }
// })();

fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((data) => randompupper(data))

window.location.reload()



// window.onload = function() {
//   document.getElementById('dog').src= randompupper(data);
//   console.log(randompupper())
//
// };

// async function getpuppers() {
//   try {
//     let response = await fetch('https://dog.ceo/dog-api/#breeds-list/api/breeds/image/random')
//     let getpuppers = await response.json()
//     render.getpuppers
//   }
//     catch(error) {
//       console.log();
//     }
// }





// window.onload = choosePic;
// var myPicture = randomdogphotos();
// function choosePic() {
//      var randomNum = Math.floor(Math.random() * myPicture.length);
//      document.getElementById("myPicture").src = myPicture[randomNum];
// }
// choosePic()
