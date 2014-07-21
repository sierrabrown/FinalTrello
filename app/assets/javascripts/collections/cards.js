TC.Collections.Cards = Backbone.Collection.extend({
	model: TC.Models.Card,
	url: function() {
		return this.list.url + "/" + this.list.id + "/cards"
	},
	
	initialize: function (models, options) {
		this.list = options.list;
	}
})