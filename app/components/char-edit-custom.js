import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  wargearDiscardString: null,
  currentArmourOptionString: null,
  weaponOptionString: null,
  shieldOptionString: null,
  wargearWearString: null,
  wargearWieldString: null,
  wargearDropString: null,
  wargearStoreString: null,
  
  didInsertElement: function() {
    this._super(...arguments);
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },
  
  onUpdate: function() {



    this.char.custom.current_armour_selection = this.currentArmourOptionString;
    this.char.custom.weapon_selection = this.weaponOptionString;
    this.char.custom.shield_selection = this.shieldOptionString;
    this.char.custom.wargear_discard_selection = this.wargearDiscardString;

    this.char.custom.wargear_wear_selection = this.wargearWearString;
    this.char.custom.wargear_wield_selection = this.wargearWieldString;
    this.char.custom.wargear_drop_selection = this.wargearDropString;
    this.char.custom.wargear_store_selection = this.wargearStoreString;
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    // return { goals: this.get('char.custom.goals') };
    return {
      current_armour_selection: this.get('char.custom.current_armour_selection'),
      weapon_selection: this.get('char.custom.weapon_selection'),
      shield_selection: this.get('char.custom.shield_selection'),
      wargear_discard_selection: this.get('char.custom.wargear_discard_selection'),
      wargear_wear_selection: this.get('char.custom.wargear_wear_selection'),
      wargear_wield_selection: this.get('char.custom.wargear_wield_selection'),
      wargear_drop_selection: this.get('char.custom.wargear_drop_selection'),
      wargear_store_selection: this.get('char.custom.wargear_store_selection')
    };
  }
});
