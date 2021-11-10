const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['is-authenticated'] = require('../middleware/is-authenticated.js')
middleware['is-authenticated'] = middleware['is-authenticated'].default || middleware['is-authenticated']

export default middleware
