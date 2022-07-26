// const body = document.getElementById('body')
const body = document.querySelector('#body');


let themeColor = window.localStorage.getItem('tema');
console.log(themeColor);
if ( themeColor ) {
  selectTheme(themeColor);
  updateRadio(themeColor);
} else {
  selectTheme('system');
  updateRadio('system');
}


function selectTheme(theme){
  switch (theme) {
    case 'dark':
      console.log('aplicar dark');
      body.classList.remove('light','system');
      body.classList.add('dark');
      window.localStorage.setItem('tema','dark');
      break;
    case 'light':
      console.log('aplicar light');
      body.classList.remove('dark','system');
      body.classList.add('light');
      window.localStorage.setItem('tema','light');
      break;
    case 'system':
      console.log('aplicar system');
      body.classList.remove('dark','light');
      body.classList.add('system');
      window.localStorage.setItem('tema','system');
      break;
  
    default:
      break;
  }
}

function updateRadio( value ) {
  switch (value) {
    case 'dark':
      console.log('dark');
      document.getElementById('radioDark').checked = true;
      document.getElementById('radioLight').checked = false;
      document.getElementById('radioSystem').checked = false;
      break;
    case 'light':
      console.log('light');
      document.getElementById('radioLight').checked = true;
      document.getElementById('radioDark').checked = false;
      document.getElementById('radioSystem').checked = false;
      break;
    case 'system':
      console.log('sytem');
      document.getElementById('radioSystem').checked = true;
      document.getElementById('radioLight').checked = false;
      document.getElementById('radioDark').checked = false;
      break;
    default:
      console.log('default');
      document.getElementById('radioSystem').checked = true;
      document.getElementById('radioLight').checked = false;
      document.getElementById('radioDark').checked = false;
      break;
  }
}





const radios = document.querySelectorAll('input[name="theme"]');
radios.forEach( x => {
  x.addEventListener('change', function(){
    // console.log(this.value);
    selectTheme(this.value)
    // switch (this.value) {
    //   case 'dark':
    //     // console.log('aplicar dark');
    //     body.classList.remove('light');
    //     body.classList.add('dark');
    //     window.localStorage.setItem('tema','dark');
    //     break;
    //   case 'light':
    //     // console.log('aplicar light');
    //     body.classList.remove('dark');
    //     body.classList.add('light');
    //     window.localStorage.setItem('tema','light');
    //     break;
    
    //   default:
    //     break;
    // }
    // window.localStorage.setItem('theme',this.value)
  })
});


// window.addEventListener('DOMContentLoaded', function(){

// })