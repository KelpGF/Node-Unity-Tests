const { SchemasName } = require('./constants');
const Task = require('./node-test/models/task');
const NodeTests = require('./node-test/NodeTests.module');

class MongooseModule {
	static initDatabases() {
		NodeTests.getInstance('mongodb+srv://root:123@mongokelvin.5kpqp.mongodb.net/test').init();
		NodeTests.getInstance().makeSchemas([{ schema: Task, name: SchemasName.TASK }]);
	}
}

module.exports = MongooseModule;
