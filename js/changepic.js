//Change project images
$( ".img-thumbnail" ).click(function() {
    var img_src = this.src;
    var start = img_src.search('h250/') + 5;
    var end = img_src.search('.jpg');
    var img_src = img_src.substring(start, end);        
    img_src = getExtension(img_src);
    var textIndex = imgArray.indexOf(img_src);          

    $('#screen-text').text(screenName[textIndex]);        
    $('#img-main').attr('src', imgPath + img_src);
  });      

  function getExtension(pic_name){          
    var jpg = pic_name + '.jpg';
    var png = pic_name + '.png';
    var gif = pic_name + '.gif';
    var imgReturn;    
    
    if(imgArray.indexOf(jpg) > -1)
      imgReturn = jpg;        
    else if(imgArray.indexOf(png) > -1)
      imgReturn = png;
    else
      imgReturn = gif;
    
    return imgReturn;     
  }

  //Adjust bar text for mobile
  function changeBarText(){
    var width = $(window).width();    
    if(width > 520)
      $('.navbar-brand').text('Vanderlei Mendes {desenvolvedor} - Portfolio');        
    else
      $('.navbar-brand').text('Vanderlei - portfolio');
  }

  $(window).resize(function(){
    changeBarText();
  });  

  changeBarText();