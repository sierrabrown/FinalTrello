TC.Models.List = Backbone.Model.extend({
	url: "api/lists",
	
  cards: function () {
    if(!this._cards) {
      this._cards = new TC.Collections.Cards([], { list: this });
    }
    return this._cards;
  },

  parse: function (response) {
    if(response.cards) {
      this.cards().set(response.cards, { parse: true });
      delete response.cards;
    }
    return response;
  }
})