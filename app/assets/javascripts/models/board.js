window.TC.Models.Board = Backbone.Model.extend({
	url: "/api/boards",
	
	lists: function() {
	    this._lists = this._lists ||
	    new TC.Collections.Lists([], { board: this});
	    return this._lists;
	  },
  
	  parse: function(payload) {
	    if (payload.lists) {
	      this.lists().set(payload.lists, { parse: true });
	      delete payload.lists;
	    }
    
	    return payload;
	  }
	
});