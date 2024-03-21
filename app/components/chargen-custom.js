import Component from '@ember/component';
import { inject as service } from '@ember/service';



export default Component.extend({
  tagName: '',
  attributeString: null,
  
  didInsertElement: function() {
    this._super(...arguments);
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },

  onUpdate: function() {
    return {

      attributeoption: this.get('char.custom.attributeoption')

    }
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    // return { goals: this.get('char.custom.goals') };
    return {};
  }
});
