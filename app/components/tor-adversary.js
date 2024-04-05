import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
  gameApi: service(),
  flashMessages: service(),
  tagName: '',
  selectAdversaryRoll: false,
  pcTargetName: null,
  modifierString: null,
  favouredString: null,
  alternativeTNString: null,
  wearyString: null,
  miserableString: null,
  destinationType: 'scene',

  didInsertElement: function() {
    this._super(...arguments);
    let defaultAdversary = this.toradversaries ? this.toradversaries[0] : '';
    this.set('targetAdversaryString', defaultAdversary);
  },


  actions: { 
    
    addAdversaryRoll() {
      let api = this.gameApi;
      let defaultAdversaryRoll = this.toradversaryattacks ? this.toradversaryattacks[0] : '';
    
      // Needed because the onChange event doesn't get triggered when the list is 
      // first loaded, so the roll string is empty.
      let adversaryAttackString = this.adversaryAttackString || defaultAdversaryRoll;
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
        
   //   if (! && !pcRollSkill) {
     //   this.flashMessages.danger("You haven't selected an ability to roll.");
       // return;
     // }
    
//      if (pcRollSkill || pcRollName) {
  //      if (!pcRollSkill || !pcRollName) {
    //      this.flashMessages.danger("You have to provide all skill information to roll for a PC.");
      //    return;
  //      }
    //  }
      this.set('selectAdversaryRoll', false);
      this.set('pcTargetName', null);
      this.set('favouredString', null);
      this.set('modifierString', null);
      this.set('alternativeTNString', null);
      this.set('wearyString', null);
      this.set('miserableString', null);
      this.set('adversaryAttackString', null);

      var destinationId, command;
      if (this.destinationType == 'scene') {
        destinationId = this.get('scene.id');
        command = 'addAdversaryRoll';
      }
      else {
        destinationId = this.get('job.id');
        command = 'addJobRoll'
      }
      
      api.requestOne(command, { id: destinationId,
         adversary_attack_string: adversaryAttackString,
         pc_target_name: pcTargetName,
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
