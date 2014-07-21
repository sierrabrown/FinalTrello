TC.Collections.Cards = Backbone.Collection.extend({
	model: TC.Models.Card,
	url: function() {
		return this.list.url + "/" + this.list.id + "/cards"
	},
  
  comparator: function(card) {
    return card.get('rank')
  },
	
	initialize: function (models, options) {
		this.list = options.list;
	}
})