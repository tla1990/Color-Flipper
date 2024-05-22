//VARIABLES
const colors = {
    'dark red': {hex: '8b0000', rgb: 'rgb(139, 0, 0)'},
    'yellow': {hex: '#ffff00', rgb: 'rgb(255,255,0)'},
    'dark orange': {hex: '#ff8c0', rgb: 'rgb(255,165,0)'}, 
    'dodger blue': {hex: '#1e90ff', rgb: 'rgb(30, 144, 255)'}, 
    'rebecca purple': {hex: '#663399', rgb: 'rgb(102, 51, 153)'}, 
    'indigo': {hex: '#4b0082', rgb: 'rgb(75, 0, 130)'}, 
    'violet': {hex: '#ee82ee', rgb: 'rgb(238, 130, 238)'}, 
    'spring green': {hex: '#00ff7f', rgb: 'rgb(0, 255, 127)'}, 
    'coral': {hex: '#f7f50', rgb: 'rgb(255, 127, 80)'}, 
    'turquoise': {hex: '#40e0d0', rgb: 'rgb(64, 224, 208)'} 
    };
  
// HTML Elements 
const body = document.querySelector('#background');
const btn = document.querySelector('.color-btn');
const color = document.querySelector('.colors');
const text = document.querySelector('.text');
const hex = document.querySelector('.hex');
const rgb = document.querySelector('.rgb');
  
// COLOR FLIPPER FUNCTION
  
// Btn Function to start color flipper 
  
  btn.addEventListener('click', function() { 
      // Select random color for color flipper
      const colorKeys = Object.entries(colors);
      let randomColorEntry = colorKeys[Math.floor(Math.random() * colorKeys.length)];
      let colorText = randomColorEntry[0];
      let removeSpaces = colorText.replace(" ", "");
    
      // Determine hex value to random color
      let colorHex = randomColorEntry[1].hex;
    
      // Determine rgb value for random color
      let colorRgb = randomColorEntry[1].rgb;
    
      // Adding color to text window 
      color.innerHTML = colorText.toUpperCase();
  
      // Apply random color to text and body background 
      color.style.color = removeSpaces;
      body.style.background = removeSpaces;
  
      // Click 'Text' link to reveal color's text value
       text.addEventListener('click', function() { 
          color.innerHTML = colorText.toUpperCase(); 
          color.style.color = removeSpaces;
          body.style.background = removeSpaces;
       });
    
      // Click 'Hex' link to reveal color's hex value
       hex.addEventListener('click', function() { 
          color.innerHTML = colorHex; 
          color.style.color = colorHex;
          body.style.background = colorHex;
       }); 
    
      // Click 'RGB' link to reveal color's rgb value
      rgb.addEventListener('click', function() { 
          color.innerHTML = colorRgb; 
          color.style.color = colorRgb;
          body.style.background = colorRgb;
       });
  });
  
  
  
  
  
  
    
    
  
  
  
  
  
      
  