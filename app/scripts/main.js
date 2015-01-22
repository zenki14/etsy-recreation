var itemGrid, itemImage, itemTitle, itemShop, itemPrice, itemCurrency;

// , daftListing, hoverImg;

itemContainer = $('.itemGrid')

etsyItems.results.forEach(function (item) {

  itemTitle = "<p class='nameText'>" + item.title + "</p>";

  item.Images.forEach(function (pics) {
      itemImage = "<img class='productImgs' src='" + pics.url_fullxfull + "' />'";
    });

  hover_img = "<div class='foodBox'><img class='heart' src='https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png' />" + "<img class='hamburger' src='https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png' /></div>";

  itemShop = "<span class='shopTitle'>" + item.Shop.shop_name + "</span>";

  itemPrice = "<p class='isRight'>" + item.price + "</p>";


  itemCurrency = "<p class='isRight'>" + item.currency_code + "</p>";

  // Build Each Listing
  daft_listing = "<li class='mainProducts'>" + itemImage + hoverImg + itemTitle + itemShop + itemCurrency + itemPrice +  "</li>";

  // Append Each Item to The Grid
  itemGrid.append(daftListing);

});