TC.Views.BoardsIndex = Backbone.View.extend({
	
	template: JST["boards/index"],
	
	events: {
		"click button#refresh": "refresh"
	},
	
	initialize: function (options) {
		this.boards = options.boards;
	},
	
	refresh: function() {
		var view = this;
		this.boards.fetch({
			success:function () { view.render(); }
		})
	},
	
	render: function() {
		var renderedContent = this.template({ boards: this.boards });
		this.$el.html(renderedContent);
		return this;
	}
	
})