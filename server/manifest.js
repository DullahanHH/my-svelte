const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","global.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-5c0ccd93.js","imports":["_app/immutable/start-5c0ccd93.js","_app/immutable/chunks/index-4ea82ed6.js","_app/immutable/chunks/singletons-bd8d30db.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-ae3d2d36.js'),
			() => import('./chunks/1-5115d4c7.js'),
			() => import('./chunks/2-c958fa6a.js'),
			() => import('./chunks/3-8213024f.js'),
			() => import('./chunks/4-70a455f3.js'),
			() => import('./chunks/5-fd2c65b6.js'),
			() => import('./chunks/6-f7ca6e0a.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/ceotr",
				pattern: /^\/ceotr\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/gamejam",
				pattern: /^\/gamejam\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/other",
				pattern: /^\/other\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/personal",
				pattern: /^\/personal\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
