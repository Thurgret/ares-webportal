import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  wargearDiscardString: null,
  armourOptionString: null,
  weaponOptionString: null,
  shieldOptionString: null,
  
  didInsertElement: function() {
    this._super(...arguments);
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },
  
  onUpdate: function() {



    this.char.custom.armour_selection = this.armourOptionString;
    this.char.custom.weapon_selection = this.weaponOptionString;
    this.char.custom.shield_selection = this.shieldOptionString;
    this.char.custom.wargear_discard_selection = this.wargearDiscardString;
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    // return { goals: this.get('char.custom.goals') };
    return {
      armour_selection: this.get('char.custom.armour_selection'),
      weapon_selection: this.get('char.custom.weapon_selection'),
      shield_selection: this.get('char.custom.shield_selection'),
      wargear_discard_selection: this.get('char.custom.wargear_discard_selection')
    };
  }
});
