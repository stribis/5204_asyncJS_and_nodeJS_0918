

async function displayData(){

  let response = await fetch('data.json');
  let data = await response.json();

  console.log(data);
}

displayData();
