TC.Collections.Boards = Backbone.Collection.extend({
	url: "api/boards",
	model: TC.Models.Board,
	
	getOrFetch: function(id) {
		var boards = this;		
		var board;
		
		if (board = this.get(id)) {
			board.fetch();
		} else {
			board = new TC.Models.Board({ id: id});
			board.fetch({
				success: function() {boards.add(board); }
			})
		}
	}
})

window.TC.Collections.boards = new TC.Collections.Boards