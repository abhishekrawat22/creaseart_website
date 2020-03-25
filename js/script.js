

function tableContentPanel(evt, contentId) {
    
  let i, tableTabcontent, tableTabLinks;
  
  tableTabcontent = document.getElementsByClassName("tableTab-content");
  
  for (i = 0; i < tableTabcontent.length; i++) {
      
    tableTabcontent[i].style.display = "none";

  }
  
  tableTabLinks = document.getElementsByClassName("tableTabLinks");

  for (i = 0; i < tableTabLinks.length; i++) {

    tableTabLinks[i].className = tableTabLinks[i].className.replace(" active", "");

  }

  document.getElementById(contentId).style.display = "block";

  evt.currentTarget.className += " active";

  let itemPrice = document.getElementsByClassName('item_price')[0];
  let itemPriceTotal = document.getElementsByClassName('item_price_total')[0];
  let priceTotal = document.getElementsByClassName('priceTotal')[0];

  const calculate = () => {
    priceTotal[0].innerHTML = parseInt(itemPrice.value) * parseInt(itemPriceTotal.value);
  }

}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}