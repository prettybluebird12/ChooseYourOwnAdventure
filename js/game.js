// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You find a magic wand!",
            choices: [
                {
                    text: "Keep it!",
                    nextLevel: "fairyCastle",
                },

                {
                    text: "Walk away. Could be dangerous",
                    nextLevel: "wizard",
                },
            ]
        },

        fairyCastle: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You are transported to a fairy castle and are greeted by the Queen of Faries",
            choices: [
                {
                    text: "Threaten her and demand to be sent home",
                    nextLevel: "fairyJail",
                },
            ]
        },

        wizard: {
            message: "A wizard appears and chalenges you to a duel beliving that you are his nemisis in disquise",
            choices: [
                {
                    text: "Fight him",
                    nextLevel: "death",
                },
                {
                  text:"Run Away",
                  nextLevel:"mundaneLife",
                },
                
            ]
        },
             death: {
            message: "You tried to fight, but he burnt you to a crisp with his fire spell.",
            choices: [
                {
                    text:"Start Over",
                    nextLevel: "startover",
                    
                },
                ]
        },
        fairyJail:{
            message:"Once you threatened her, her guards seized your arms. You shall rot in fairy jail for your insults.",
        choices:[
            {
                text:"Start Over",
        nextLevel:"startover",
            
        },
       ]
    },
    mundaneLife:{
        message:"You live another",
        choices:[
            {
                text:"Start over",
            nextLevel:"startover",
                
            }
            ]
        
    },
    }
};
