var readimage = require('readimage');

var dataDir = './data';
var images = ['surffall.jpg'];

images.forEach(function(image) {
	var imagePath = dataDir + image; // urgh
	readimage(imagePath, makeOnImageRead(image));
});

function makeOnImageRead(imageName) {
	return function(buffer) {
		console.log('read results for', imageName, buffer);
	};
}
