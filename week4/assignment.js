/*
*
*/
var albums_template, photos_template;

//variables to store the current displayed album and photo
var current_album = animals_data.category[0];

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data, content){
	var html    = template(data);
	console.log(html);
	$(content).html(html);
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

	source = $("#photos-template").html();
	photos_template = Handlebars.compile(source);

	// when pages ready show all the albums
	showTemplate(albums_template, animals_data, '#content');
	// when pages ready show all photos of current album
	showTemplate(photos_template, current_album, '#photo-blocks');

	// click one album, show all photos of the album
	$(".album-thumbnail").click(function (){
		// get the index (position in the array)
		// of the album we clicked on
		// "this" is the element that was clicked on
		// data("id") gets the attribute data-id
		// (which we set to the index of the album in
		// the array - @index)
		var index = $(this).data("id");

		// set the current album to this album
		current_album = animals_data.category[index];

		//display the photos template
		showTemplate(photos_template, current_album, '#photo-blocks');
	});
});
