TC.Views.CardNew = Backbone.View.extend({
	template: JST["cards/new"],
	
	events: {
		"submit form": "submit"
	},
	
	initialize: function(options) {
		this.list = options.list
	},
	
	render: function() {
		var renderedContent = this.template( { list: this.list });
		
		this.$el.html(renderedContent);
		return this;
	},
	
	submit: function(event) {
		event.preventDefault();
		var view = this;
		var params = $(event.currentTarget).serializeJSON().card;
		
		var card = new TC.Models.Card(params)
		debugger;
		card.save({}, {
			success: function() {view.list.cards().add(list)}
		})
	}
})