// tooling
const postcss = require('postcss');

// convert a json object into a postcss object
module.exports = (json) => {
	// if the object has a nodes array
	if (Array.isArray(json.nodes)) {
		// convert the objects in that array into postcss objects
		json.nodes = json.nodes.map(module.exports);
	}

	// return a clone of the current object into a postcss object
	return json.type in postcss ? Object.assign({}, postcss[json.type](json)) : null;
};
