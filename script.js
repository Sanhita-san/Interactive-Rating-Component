function rate() {
  const rating = $("input[type='radio'][name='rating']:checked").val();
  $("#rating-card").css("display", "none");
  $("#thankyou-card").css("display", "grid");
  $("#chip").text(`You selected ${rating} out of 5`);
}
