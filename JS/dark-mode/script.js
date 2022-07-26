// (function(){

window.addEventListener('DOMContentLoaded', function(){

  const root = document.documentElement;

  let b = document.getElementsByTagName('body');
  // console.dir(root);
  let themeColor = window.localStorage.getItem('theme');
  console.log('color is:'+themeColor);

  switch (themeColor) {
    case 'dark':
      b[0].classList.remove('light','system');
      b[0].classList.add('dark');
      break;
    case 'light':
      b[0].classList.remove('dark','system');
      b[0].classList.add('light');
      break;
    case 'system':
      b[0].classList.remove('dark','light');
      b[0].classList.add('system');
      break;
  
    default:
      break;
  }



  const radios = document.querySelectorAll('input[name="theme"]');
  
  radios.forEach( x => {
    x.addEventListener('change', function(){

      // (this.value == 'dark') ? root.style.setProperty('--topbar-color', 'black') : root.style.setProperty('--topbar-color', 'lightgray'); 
      let body = document.getElementsByTagName('body');

      // if (this.value == 'dark') {
      //   body[0].classList.remove('light');
      //   body[0].classList.add('dark');
      // } else {
      //   body[0].classList.remove('dark');
      //   body[0].classList.add('light');
      // }
      
      switch (this.value) {
        case 'dark':
          body[0].classList.remove('light','system');
          body[0].classList.add('dark');
          window.localStorage.setItem('theme','dark')
          break;
        case 'light':
          body[0].classList.remove('dark','system');
          body[0].classList.add('light');
          window.localStorage.setItem('theme','light')
          break;
        case 'system':
          body[0].classList.remove('dark','light');
          body[0].classList.add('system');
          window.localStorage.setItem('theme','system')
          break;
      
        default:
          break;
      }
      
      
    });
  })

  

// })()

});