import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  attributeString: null,
  
  didInsertElement: function() {
    this._super(...arguments);
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },

  model: function(params) {
    let api = this.gameApi;
    return RSVP.hash({
         attributeoptions:  api.request('attributeOptions', { id: this.get('session.data.authenticated.id') }),
       })
       .then((model) => EmberObject.create(model));
},
  
  onUpdate: function() {
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    // return { goals: this.get('char.custom.goals') };
    return {};
  }
});
