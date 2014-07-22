TC.Views.BoardShow = Backbone.View.extend({
	
	template: JST["boards/show"],
	
	events: {
	  'click #showForm': 'dialogBox'
	},
  
	
  dialogBox: function() {
    $( "#newForm" ).dialog({
      modal: true,
      height: 300,
      width: 400,
      backgroundcolor: 'red',
    });
  },
  
	initialize: function () {
		this.collection = this.model.lists();
		this.listenTo(this.model, "sync", this.render),
		this.listenTo(this.collection, "add", this.render)
	},
	
	render: function() {
		var renderedContent = this.template( { board: this.model} )		
		this.$el.html(renderedContent);	
		this._renderLists(this.collection);
    this._sortIt();
		this._renderNewList();
		return this;
	},
	
	_renderLists: function(lists) {
		var that = this;
		lists.each( function(list) {
			var listShowView = new TC.Views.ListShow( { list: list})
      that.$("#all-the-lists").append(listShowView.render().$el)
		})
	},
	
	_renderNewList: function() {
		var newForm = new TC.Views.ListNew( {board: this.model} )
		this.$("#newForm").append(newForm.render().$el)
	},
  
  
  _sortIt: function() {
     this.$("#all-the-lists").sortable()
     this.$(".cards").sortable()
  }
  
});

// 1. Initiate board fetch
// 2. Initiate board lists fetch
// 3. Renders BoardShow View <= no relevant data yet
// 4. Board fetch completes and sync event fires on the board
// 5. Boardshow view re-render in respons to the sync
// 6. Comments fetch completes, sync event fires on comments
// 7. no one listens for this
