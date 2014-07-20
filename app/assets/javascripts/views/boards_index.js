TC.Views.BoardsIndex = Backbone.View.extend({
	
	template: JST["boards/index"],
	
	events: {
		"click button#refresh": "refresh",
		"click button.remove": "remove"
	},
	
	initialize: function (options) {
		this.boards = options.boards;
		this.listenTo(this.boards, "sync", this.render)
	},
	
	refresh: function() {
		this.boards.fetch();
	},
	
	render: function() {
		var renderedContent = this.template({ boards: this.boards });
		this.$el.html(renderedContent);
		return this;
	},
	
	remove: function(event) {
		var boardId = event.target.getAttribute('data-atr')
		var board = this.boards.get(boardId);
		board.destroy()
	}
	
})