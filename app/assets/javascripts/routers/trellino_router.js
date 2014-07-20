TC.Routers.TrellinoRouter = Backbone.Router.extend({
	routes: {
		"": "boardsIndex",
		"boards/new": "boardNew",
		"boards/:id": "boardShow"
	},
	
	boardsIndex: function() {
		var view = new TC.Views.BoardsIndex( {boards: TC.Collections.boards} )
		
		TC.Collections.boards.fetch();
		$("body").html(view.render().$el)
	},
	
	boardNew: function () {
		var newView = new TC.Views.BoardNew();
		$("body").html(newView.render().$el)
	},
	
	boardShow: function(id) {
		// This doesn't work unless you're navigating from the index page
		var model = TC.Collections.boards.getOrFetch(id);
		model.lists().fetch()
		var showView = new TC.Views.BoardShow({model: model});
		
		$("body").html(showView.render().$el)
	}
})