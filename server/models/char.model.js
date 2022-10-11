const mongoose = require("mongoose");

const CharSchema = {
  name: {
    type: String,
    required: [true, "Character Name is required"],
    minLength: [3, "Character's name must have at least 3 characters"],
  },
  strength:{
    type:String,
    required:[true,"strength is required"]
  },
  dexterity:{
    type:String,
    required:[true,"dexterity is required"]
  },
  constitution:{
    type:String,
    required:[true,"constitution is required"]
  },
  charisma:{
    type:String,
    required:[true,"charisma is required"]
  },
  intelligence:{
    type:String,
    required:[true,"intelligence is required"]
  },
  wisdom:{
    type:String,
    required:[true,"wisdom is required"]
  },
  classs:{
    type:String,
    required:[true,"A class is required"],
    enum:{
        values:[
            'Barbarian',
            'Bard',
            'Cleric',
            'Druid',
            'Fighter',
            'Monk',
            'Paladin',
            'Ranger',
            'Rogue',
            'Sorcerer',
            'Warlock',
            'Wizard',
        ],
        message:'{VALUE} is not supported'
        
    },
    required:[true,"Class is required"]
},

profPic:{
  type:String,
  required:[true,"Profile Picture is required"]
},


desc: {
  type: String,
  required: [true, "Character Backstory is required"],
  minLength: [3, "Character Backstory must have at least 3 characters"],
},


};

module.exports = mongoose.model("Char", CharSchema);