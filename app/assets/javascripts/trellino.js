window.TC = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function (){
		new TC.Routers.TrellinoRouter();
		
		Backbone.history.start({})
		//var view = new TC.Views.BoardsIndex( {boards: TC.Collections.boards} )
		
		//$("body").append(view.render().$el)
		// TC.Collections.boards.fetch({
// 			success: function () {
// 				view.render()
// 				$("body").append(view.$el)
// 			}
// 		});
	//var newView = new TC.Views.BoardNew();
	//$("body").append(newView.render().$el)
	}
};

$(TC.initialize);