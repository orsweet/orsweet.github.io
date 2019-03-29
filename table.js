$(document).ready(function(){
  let htmlMid = '';
  for(let i=0; i<5; i++) {
    htmlMid += '<tr>';
    for(let j=1; j<1001; j++){
      htmlMid += '<td>'+j+'</td>';
    }
    htmlMid += '</tr>';
  }

  $('#m-tab').html(htmlMid);
});