TC.Collections.Lists = Backbone.Collection.extend({
	model: TC.Models.List,
	url: function() {
		return this.board.url +"/" + this.board.id + "/lists"
	},
  
  comparator: function(list) {
    return list.get('rank')
  },
	
	initialize: function (models, options) {
		this.board = options.board;
	}
})