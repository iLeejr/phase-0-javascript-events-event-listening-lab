function addingEventListener() {
}

function clickAlert() {
    alert('I was clicked!');
  }
  
 
  function addingEventListener() {
    const button = document.getElementById('button');
    if (button) { 
      button.addEventListener('click', clickAlert);
    }
  }
  
  addingEventListener();
  