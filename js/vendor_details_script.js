function contentPanelImage(evt, contentId) {
    
    let i, tabContentImage, tablinksImage;
    
    tabContentImage = document.getElementsByClassName("imageTab-content");
    
    for (i = 0; i < tabContentImage.length; i++) {
        
      tabContentImage[i].style.display = "none";
  
    }
    
    tablinksImage = document.getElementsByClassName("image_tablinks");
  
    for (i = 0; i < tablinksImage.length; i++) {
  
      tablinksImage[i].className = tablinksImage[i].className.replace(" active_image", "");
  
    }
  
    document.getElementById(contentId).style.display = "block";
  
    evt.currentTarget.className += " active_image";
}