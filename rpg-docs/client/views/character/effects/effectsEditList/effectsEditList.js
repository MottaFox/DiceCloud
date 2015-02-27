Template.effectsEditList.helpers({
	effects: function(){
		var cursor = Effects.find({sourceId: this.sourceId});
		return cursor;
	}
});

Template.effectsEditList.events({
	"tap #addEffectButton": function(){
		Effects.insert({
			charId: this.charId,
			sourceId: this.sourceId,
			operation: "add",
			type: this.type
		});
	},
});