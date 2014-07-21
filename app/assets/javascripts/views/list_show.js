TC.Views.ListShow = Backbone.View.extend({
	
	template: JST["lists/show"],
	
	
	initialize: function (options) {
		this.list = options.list
		this.collection = this.list.cards()
		this.listenTo(this.list, "sync", this.render)
		this.listenTo(this.collection, "add", this.addCard)
	},
	
	render: function() {
		var renderedContent = this.template( { list: this.list} )
		this.$el.html(renderedContent);
		this._renderCards()
		this._renderNewCard()
		return this;
	},
	
	addCard: function (card) {
		var view = new TC.Views.CardShow( {
			card: card
		})
		this.$(".cards").append(view.render().$el)
	},
	
	_renderCards: function() {
		//Why do we bind here?
		this.list.cards().each(this.addCard.bind(this))
	},
	
	_renderNewCard: function() {
		var view = new TC.Views.CardNew( {list: this.list} )
		this.$(".card-new").append(view.render().$el)
	}
	
});
