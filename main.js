$(document).ready(function () {
  // When the document is ready
  $(".div2").hide();
  let count=0;
  $("li").click(function () {
    $("li").removeClass("active");
    
    // Add the active class to the clicked li
    $(this).addClass("active");
    count= $(this).text();
    var clickedLi = $(this);
    var previousLiElements = clickedLi.prevAll();

    // Loop through each previous li and get their text
    previousLiElements.each(function() {
    
      $(this).addClass("active");
      
    });
  });
  // Attach a click event handler to the button with id "myButton"
  $(".bt-sub").click(function () {
    // This function will run when the button is clicked
    $(".count-text").text(count);
    $(".div2").show();

    // You can replace the alert with your custom code
  });
});
