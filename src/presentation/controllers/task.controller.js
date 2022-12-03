const { SchemasName } = require('../../config/mongoDb/constants');
const NodeTests = require('../../config/mongoDb/node-test/NodeTests.module');
const BaseController = require('./base.controller');

class TaskController extends BaseController {
	routePath = '/tasks';

	#_tasksCollection() {
    return NodeTests.getInstance().getCollection(SchemasName.TASK)
  };

	makeRoutes() {
		return super.makeRoutes([{ path: '/', method: 'get', cb: this.findAll.bind(this) }]);
	}

	async findAll(req, res) {
		const allTasks = await this.#_tasksCollection().find();

		res.send(allTasks);
	}
}

module.exports = TaskController;
