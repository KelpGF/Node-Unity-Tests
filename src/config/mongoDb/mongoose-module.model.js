const mongoose = require('mongoose');

class MongooseModule {
	/** @type {String} */
	#_connectionString;

	/** @type {String} */
	appName;

	/** @type {mongoose.Mongoose} */
	#_dbInstance;

	/** @type {Array<{schema:mongoose.Schema,name:String}>} */
	#_schemas = [];

	/** @type {{[key:String]:mongoose.Model}} */
	#_models = {};

	/**
	 *  @param {String} connectionString
	 *  @param {String} appName
	 */
	constructor(connectionString, appName) {
		this.#_connectionString = connectionString;
		this.appName = appName;
	}

	init() {
		try {
			this.#_dbInstance = mongoose.createConnection(this.#_connectionString, { appName: this.appName });

			console.log(`${this.appName} database connected`);
		} catch (err) {
			console.error(`${this.appName} database error - ${err}`);
		}
	}

	/**
	 * * Register Schemas in database
	 * @param {Array<{name:String,schema:Object}>} schemas
	 */
	makeSchemas(schemas) {
		schemas.forEach((data) => {
			this.#_schemas.push({ name: data.name, schema: mongoose.Schema(data.schema) });
		});

		this.#_registerSchemas();
	}

	#_registerSchemas() {
		this.#_schemas.forEach((schema) => {
			this.#_models[schema.name] = this.#_dbInstance.model(schema.name, schema.schema);
		});
	}

	/**
	 * * Get mongoose collection
	 * @param {String} model
	 * @returns {mongoose.Model}
	 */
	getCollection(model) {
		const collection = this.#_models[model];

		if (!collection) throw new mongoose.Error(`Collection not exist in Database ${this.appName}`);

		return collection;
	}
}

module.exports = MongooseModule;
