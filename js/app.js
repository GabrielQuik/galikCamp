$(".info_button")
  .hover(
    function() {
      $(this).animate(
        {
          fontSize: "20.5px"
        },
        300
      );
      $("i").animate(
        {
          top: "10px"
        },
        300
      );
    },
    function() {
      $(this).animate(
        {
          fontSize: "20px"
        },
        300
      );
      $("i").animate(
        {
          top: "0"
        },
        300
      );
    }
  )
  .click(function() {
    $(window).scrollTop(window.innerHeight);
  });

$(".paroller").paroller({
  factor: -0.2,
  type: "background",
  direction: "vertical"
});
