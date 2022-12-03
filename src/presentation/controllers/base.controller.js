const router = require('express').Router;

class BaseController {
	routePath = '/';

	#_router = router();

	/**
	 * @param {String} path
	 * @param {Array<{path:String,method:'get'|'post'|'put'|'delete',cb:Function}>} content
	 */
	makeRoutes(content) {
		content.forEach((data) => {
			this.#_router[data.method](data.path, data.cb);
		});

		return this.#_router;
	}
}

module.exports = BaseController;
