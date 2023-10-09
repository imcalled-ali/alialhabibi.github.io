$(document).ready(function() {
    $('.fade').each( function(i){
    $(this).animate({'opacity':'1'},800);
  });
});

tailwind.config = {
    theme: {
      extend: {
      colors: {
        bgcl: '#FAF3E3',
        primary: '#ECE9E1',
        secondary: '#3D3D3D',
        extra: '#d6d3cb',
        white: '#ffffff',
      }
      }
    }
  }

  