TC.Collections.Boards = Backbone.Collection.extend({
	url: "api/boards",
	model: TC.Models.Board
})

window.TC.Collections.boards = new TC.Collections.Boards