/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     old=document.getElementById("image").innerHTML
     same = document.getElementById("image").style.backgroundImage
     
      document.getElementById("image").innerHTML=previewPic.alt
      document.getElementById("image").style.background="url("+previewPic.src+")" ;
       }
    
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
        document.getElementById("image").innerHTML = old
        document.getElementById("image").style.backgroundImage=same;
        document.getElementById("image").style.backgroundColor="#8e68ff";
           
       }