TC.Views.ListShow = Backbone.View.extend({
	
	template: JST["lists/show"],
	
	
	initialize: function (options) {
		this.list = options.list
		this.listenTo(this.list, "sync", this.render)
		//this.listenTo(this.list.cards(), "sync add", this.render)
		//this.listenTo(this.list, "sync", this.render)
		// this.listenTo(this.model.cards(), "sync add", this.render)
	},
	
	render: function() {
		var renderedContent = this.template( { list: this.list} )
		this.$el.html(renderedContent);
		this.list.cards().fetch();
		this._renderCards(this.list.cards().list.collection)
		return this;
	},
	
	_renderCards: function(cards) {
		cards.each( function(card) {
			var cardShowView = new TC.Views.CardShow( { card: card})
			this.$(".cards").append(cardShowView.render().$el)
		})

	}
});
