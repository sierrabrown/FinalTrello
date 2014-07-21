TC.Views.CardShow = Backbone.View.extend({
	template: JST["cards/show"],
	
	initialize: function (options) {
		this.card = options.card
	},
	
	render: function() {
		var renderedContent = this.template( { card: this.card } )
		
		this.$el.html(renderedContent)
		return this;
	}
});
