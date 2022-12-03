const Task = {
	name: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
};

module.exports = Task;
