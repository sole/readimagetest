var readimage = require('readimage');
var fs = require('fs');

var dataDir = './data';
var images = ['surffall.jpg'];

images.forEach(function(image) {
	var imagePath = dataDir + '/' + image; // urgh
	var imageData = fs.readFileSync(imagePath);
	readimage(imageData, makeOnImageRead(image));
});

function makeOnImageRead(imageName) {
	return function(err, buffer) {

		console.log('read results for', imageName, err, buffer);
	};
}
