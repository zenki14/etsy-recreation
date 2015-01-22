
var itemGrid = $('.itemGrid'), item_image, item_title, item_shop, item_price, item_currency, daftPunk_listing, hover_img;

daftPunk.forEach(function (item) {

  item_title = "<p class='nameText'>" + item.title + "</p>";

  item.Images.forEach(function(pics) {
      item_image = "<img class='productImgs' src='" + pics.url_fullxfull + "' />'";
    });

  hover_img = "<div class='foodBox'><img class='heart' src='https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png' />" + "<img class='hamburger' src='https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png' /></div>";

  item_shop = "<span class='shopTitle'>" + item.Shop.shop_name + "</span>";

  item_price = "<p class='isRight'>" + item.price + "</p>";


  item_currency = "<p class='isRight'>" + item.currency_code + "</p>";

  // Build Each Listing
  daftPunk_listing = "<li class='mainProducts'>" + item_image + hover_img + item_title + item_shop + item_currency + item_price +  "</li>";

  // Append Each Item to The Grid
  itemGrid.append(daftPunk_listing);

});