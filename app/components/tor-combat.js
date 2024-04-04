import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
  gameApi: service(),
  flashMessages: service(),
  tagName: '',
  selectSkillRoll: false,
  pcRollSkill: null,
  pcRollName: null,
  rollString: null,
  modifierString: null,
  favouredString: null,
  alternativeTNString: null,
  wearyString: null,
  miserableString: null,
  destinationType: 'scene',

  didInsertElement: function() {
    this._super(...arguments);
    let defaultAbility = this.torcombatabilities ? this.torcombatabilities[0] : '';
    this.set('rollString', defaultAbility);
  },


  actions: { 
    
    addCombatRoll() {
      let api = this.gameApi;
      let defaultAbility = this.torcombatabilities ? this.torcombatabilities[0] : '';
    
      // Needed because the onChange event doesn't get triggered when the list is 
      // first loaded, so the roll string is empty.
      let rollString = this.rollString || defaultAbility;
      let pcRollSkill = this.pcRollSkill;
      let pcRollName = this.pcRollName;
      let modifierString = this.modifierString;
      let favouredString = this.favouredString;
      let alternativeTNString = this.alternativeTNString;
      let wearyString = this.wearyString;
      let miserableString = this.miserableString;

      
      var sender;
      if (this.scene) {
        sender = this.get('scene.poseChar.name');
      }
        
      if (!rollString && !pcRollSkill) {
        this.flashMessages.danger("You haven't selected an ability to roll.");
        return;
      }
    
      if (pcRollSkill || pcRollName) {
        if (!pcRollSkill || !pcRollName) {
          this.flashMessages.danger("You have to provide all skill information to roll for a PC.");
          return;
        }
      }
      this.set('selectSkillRoll', false);
      this.set('rollString', null);
      this.set('pcRollSkill', null);
      this.set('pcRollName', null);
      this.set('favouredString', null);
      this.set('modifierString', null);
      this.set('alternativeTNString', null);
      this.set('wearyString', null);
      this.set('miserableString', null);

      var destinationId, command;
      if (this.destinationType == 'scene') {
        destinationId = this.get('scene.id');
        command = 'addSceneRoll';
      }
      else {
        destinationId = this.get('job.id');
        command = 'addJobRoll'
      }
      
      api.requestOne(command, { id: destinationId,
         roll_string: rollString,
         pc_name: pcRollName,
         pc_skill: pcRollSkill,
         favoured_string: favouredString,
         modifier_string: modifierString,
         alternative_tn_string: alternativeTNString,
         weary_string: wearyString,
         miserable_string: miserableString,
         sender: sender }, null)
      .then( (response) => {
        if (response.error) {
          return;
        }
      });
    },
  }  
});
