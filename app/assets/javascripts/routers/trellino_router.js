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
		var model = TC.Collections.boards.get(id)
		debugger;
		var showView = new TC.Views.BoardShow({model: model});
		
		$("body").html(showView.render().$el)
	}
})