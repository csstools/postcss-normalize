// tooling
const postcss = require('postcss');

// convert a json object into a postcss object
module.exports = (json) => {
	// convert the current object into a postcss object
	const node = postcss[json.type](
		// use the cloned json
		Object.assign(
			{},
			json,
			json.nodes ? { nodes: [] } : {}
		)
	);

	// if the json object has nodes
	if (json.nodes) {
		// append the nodes as postcss objects
		node.append(
			json.nodes.map(module.exports)
		);
	}

	// return the postcss object
	return node;
};
