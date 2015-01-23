var itemContainer, itemImage, itemTitle, itemShop, itemPrice, itemCurrency, daftListing, hoverImg, itemLink;


itemContainer = $(".itemGrid");

etsyItems.results.forEach(function (item) {

  // item..forEach(function (links) {
  //   itemLink = "<a class='item-links' href='" + item.url + "'></a>";
  // });

  // itemLink = "<a class='item-links' href=" + item.url + "></a>";

  itemTitle = "<p class='nameText'>" + item.title + "</p>";

  item.Images.forEach(function (pics) {
      itemImage = "<img class='productImgs' src='" + pics.url_fullxfull + "' />'";
    });

  hoverImg = "<div class='itemBox'><img class='heart' src='https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png' />" + "<img class='hamburger' src='https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png' /></div>";

  itemShop = "<span class='shopTitle'>" + item.Shop.shop_name + "</span>";

  itemPrice = "<p class='isRight'>" + item.price + "</p>";


  itemCurrency = "<p class='isRight'>"  + item.currency_code + "</p>";

  // Build itemGrid
  daftListing = "<li class='mainProducts'>" + itemImage + hoverImg + itemTitle + itemShop + itemCurrency + itemPrice +  "</li>";

  
  itemContainer.append(daftListing);

});