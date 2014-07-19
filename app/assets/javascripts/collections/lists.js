window.TC.Collections.Lists = Backbone.Collection.extend({
	model: TC.Models.List,
	url: function() {
		return this.board.url() + "/lists"
	},
	
	initialize: function (models, options) {
		this.board = options.board;
	}
})