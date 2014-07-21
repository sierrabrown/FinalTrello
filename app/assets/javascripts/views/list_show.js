TC.Views.ListShow = Backbone.View.extend({
	
	template: JST["lists/show"],
	
	
	initialize: function (options) {
		this.list = options.list
		this.listenTo(this.list, "sync", this.render)
		//this.listenTo(this.list, "sync", this.render)
		// this.listenTo(this.model.cards(), "sync add", this.render)
	},
	
	render: function() {
		var renderedContent = this.template( { list: this.list} )
		this.$el.html(renderedContent);
		return this;
	},
	
	// _renderLists: function(lists) {
	// 	lists.each( function(list) {
	// 		var cardShowView = new TC.Views.CardShow( { card: card})
	// 	})
	//
	// }
});
