/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

document.querySelector('button').addEventListener('click', function(){
  
  let myInput =  document.querySelector('input').value


  fetch(`https://api.unsplash.com/search/photos/?client_id=6b99c44af3b5ecf26972b41b9e4651ec31dfc4a8c13be8a8ca48eb34d8c4f8da&query=${myInput}`)
  .then(response => {
    response.json().then(json => {
      console.log(json);
      // DO SOMETHING WITH THE JAVASCRIPT OBJECT
    });
  });

})


function resetContent(){
  document.querySelector('.col1').innerHTML = ''
  document.querySelector('.col2').innerHTML = ''
}


function populateLeft(json){
  for(let i = 0; i < 5; i++){
    const template = `<img src="${json.results[i].urls.small}">`
    const myDiv = document.createElement('div')
    myDiv.innerHTML = template;
  
    document.querySelector('.col1').appendChild(myDiv)
  }
}


function populateRight(json){
  for(let i = 5; i < json.results.length; i++){
    const template = `<img src="${json.results[i].urls.small}">`
    const myDiv = document.createElement('div')
    myDiv.innerHTML = template;
  
    document.querySelector('.col2').appendChild(myDiv)
  }
}