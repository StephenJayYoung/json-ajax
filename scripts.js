$.ajax({
  url: "index.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});