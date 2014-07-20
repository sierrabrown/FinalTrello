TC.Views.ListNew = Backbone.View.extend({
	template: JST["lists/new"],
	
	events: {
		"submit form": "submit"
	},
	
	initialize: function(options) {
		this.board = options.board
	},
	
	render: function() {
		var renderedContent = this.template( { board: this.board });
		
		this.$el.html(renderedContent);
		return this;
	},
	
	submit: function(event) {
		event.preventDefault();
		var view = this;
		var params = $(event.currentTarget).serializeJSON().list;
		
		var list = new TC.Models.List(params)
		list.save({}, {
			success: function() {view.board.lists().add(list)}
		})
	}
})