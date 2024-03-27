import Component from '@ember/component';
import { inject as service } from '@ember/service';



export default Component.extend({
  tagName: '',
  attributeString: null,
  firstCombatProficiencyString: null,
  secondCombatProficiencyString: null,
  culturalFavouredSkillString: null,
  callingFavouredSkillFirstString: null,
  callingFavouredSkillSecondString: null,
  distinctiveFeatureFirstString: null,
  distinctiveFeatureSecondString: null,

  armourOptionString: null,
  weaponOptionString: null,
  shieldOptionString: null,

  
  didInsertElement: function() {
    this._super(...arguments);
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },

  onUpdate: function() {
    this.char.custom.attributeoption = this.attributeString;
    this.char.custom.firstWeaponProficiency = this.firstCombatProficiencyString;
    this.char.custom.secondWeaponProficiency = this.secondCombatProficiencyString;
    this.char.custom.cultural_favoured_skill_selection = this.culturalFavouredSkillString;
    this.char.custom.calling_favoured_skill_first_selection = this.callingFavouredSkillFirstString;
    this.char.custom.calling_favoured_skill_second_selection = this.callingFavouredSkillSecondString;
    this.char.custom.distinctive_feature_first_selection = this.distinctiveFeatureFirstString;
    this.char.custom.distinctive_feature_second_selection = this.distinctiveFeatureSecondString;


    this.char.custom.armour_selection = this.armourOptionString;
    this.char.custom.weapon_selection = this.weaponOptionString;
    this.char.custom.shield_selection = this.shieldOptionString;

    return {

      attributeoption: this.get('char.custom.attributeoption'),
      first_weapon_proficiency: this.get('char.custom.firstWeaponProficiency'),
      second_weapon_proficiency: this.get('char.custom.secondWeaponProficiency'),
      cultural_favoured_skill_selection: this.get('char.custom.cultural_favoured_skill_selection'),
      calling_favoured_skill_first_selection: this.get('char.custom.calling_favoured_skill_first_selection'),
      calling_favoured_skill_second_selection: this.get('char.custom.calling_favoured_skill_second_selection'),
      distinctive_feature_first_selection: this.get('char.custom.distinctive_feature_first_selection'),
      distinctive_feature_second_selection: this.get('char.custom.distinctive_feature_second_selection'),
      armour_selection: this.get('char.custom.armour_selection'),
      weapon_selection: this.get('char.custom.weapon_selection'),
      shield_selection: this.get('char.custom.shield_selection')


    };
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    // return { goals: this.get('char.custom.goals') };
  }
});
