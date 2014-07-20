TC.Views.BoardShow = Backbone.View.extend({
	
	template: JST["boards/show"],
	
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render),
		this.listenTo(this.model.lists(), "sync add", this.render)
	},
	
	render: function() {
		var lists = this.model.lists()
		var renderedContent = this.template( { board: this.model, lists: this.lists})
		
		this.$el.html(renderedContent);
		
		// TODO: Don't like rebuilding the new view on every render
		var listNewView = new TC.Views.ListNew( { board: this.model})
		this.$(".list-new").html(listNewView.render().$el)
		
		return this;
	}
});

// 1. Initiate board fetch
// 2. Initiate board lists fetch
// 3. Renders BoardShow View <= no relevant data yet
// 4. Board fetch completes and sync event fires on the board
// 5. Boardshow view re-render in respons to the sync
// 6. Comments fetch completes, sync event fires on comments
// 7. no one listens for this