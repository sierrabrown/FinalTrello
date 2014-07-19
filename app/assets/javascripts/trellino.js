window.TC = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function (){
		var view = new TC.Views.BoardsIndex( {boards: TC.Collections.boards} )
		TC.Collections.boards.fetch({
			success: function () {
				view.render()
				$("body").append(view.$el)
			}
		});
	}
};

$(TC.initialize);