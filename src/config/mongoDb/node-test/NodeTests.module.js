const MongooseModule = require('../mongoose-module.model');

class NodeTests extends MongooseModule {
	/** @type {NodeTests} */
	static instance;

	/**
	 *  @param {String} connectionString
	 *  @param {String} appName
	 */
	constructor(connectionString, appName) {
		super(connectionString, appName);
	}

	/**
	 *  @param {String} connectionString
	 *  @param {String} appName
	 */
	static getInstance(connectionString) {
		if (!connectionString && !NodeTests.instance)
			throw new Error(`Init ${NodeTests.name} Error - Connection string not informed`);

		if (!NodeTests.instance) NodeTests.instance = new NodeTests(connectionString, NodeTests.name);

		return NodeTests.instance;
	}
}

module.exports = NodeTests;
