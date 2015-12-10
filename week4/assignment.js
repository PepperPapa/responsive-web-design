/*
*
*/
var albums_template, photos_template;

//variables to store the current displayed album and photo
var current_album = animals_data.category[0];
var active_album = 0;

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data, content){
	var html = template(data);

	// this is for debugging
	// console.log(html);

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
		active_album = index;

		// set the current album to this album
		current_album = animals_data.category[index];

		//display the photos template
		showTemplate(photos_template, current_album, '#photo-blocks');
	});

	  // the search functionality
    // this happens when a key is pressed
    // inside the search box
    $('#search_input').keypress(function (e) {

      // check if the key that was pressed
      // is the return key (it has id 13)
      // and only do the search if it is
      if (e.which == 13) {

        // get the search text which is the
        // contents of the search box
        var search_text = $('#search_input').val();

        // print the search box
        // (this is an example of using
        // console.log for debugging)
        console.log(search_text);
				// create a new array of data with only
			 // the data that contains the search string
			 var filteredData = {

				 // use the filter function which returns
				 // a new array that contains only the
				 // elements of data.images for which
				 // the function returns true
				 animals: animals_data.category[active_album].animals.filter(function(d){

					 // return true if the title contains
					 // the search text
					 if (d.name.search(search_text) > -1){
						 return true;
					 }

					 // if we reach here it means we haven't
					 // found a match so return false
					 return false;
				 })
			 	};

			 	// this is for debugging
			 	console.log(filteredData);

			 	// pass the newly filtered data into
	      // the template to generate new html
	      showTemplate(photos_template, filteredData, '#photo-blocks');
			}
		});
});
