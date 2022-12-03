const TaskController = require('./task.controller');

class ControllerModule {
	/** @type {import('./base.controller')[]} */
	#_controllers = [];

	/** @param {import('express').Express} app */
	constructor(app) {
		this.#_controllers.push(new TaskController());

		this.generateRoutes(app);
	}

	/** @type {import('./base.controller')[]} */
	generateRoutes(app) {
		this.#_controllers.forEach((controller) => {
			app.use(controller.routePath, controller.makeRoutes());
		});
	}
}

module.exports = ControllerModule;
