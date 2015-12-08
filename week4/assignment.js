/*
*
*/
var albums_template;

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	console.log(html);
	$('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#albums-template").html();
	albums_template = Handlebars.compile(source);
	console.log(source);
	showTemplate(albums_template, animals_data);
});
