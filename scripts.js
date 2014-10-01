// $.ajax({
//   url: "file.json",
//   context: document.body
// }).done(function() {
// 	console.log('done');
//   $( this ).addClass( "done" );
// });

// Using the core $.ajax() method
$.ajax({
    url: "file.json",
    dataType : "json",
    success: function( json ) {
    	console.log(json);
      $( "<h1/>" ).text( json.glossary.title ).appendTo( "body" );
    }
});
