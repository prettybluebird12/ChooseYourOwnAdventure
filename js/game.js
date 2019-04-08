// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
             background_image:"https://theoriginalpartybagcompany.co.uk/wp-content/uploads/2017/09/princess-fairy-wand-by-mimi-lula.jpg",
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
    
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You are transported to a fairy castle and are greeted by the Queen of Faries",
            choices: [
                {
                    text: "Threaten her and demand to be sent home",
                    nextLevel: "fairyJail",
                },
                {
                  text:"Ask to know secrets of the fairy realm",  
                  nextLevel:"Quest",
                },
            ]
        },

        wizard: {
            message: "A wizard appears and challenges you to a duel beliving that you are his nemisis in disquise",
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
                 background_image:"fire.gif",
            message: "You tried to fight, but he burnt you to a crisp with his fire spell.",
            choices: [
                {
                    text:"Start Over",
                    nextLevel: "start",
                },
                ]
        },
        Quest:{
            message:"The Queen says that in order to find learn the secrets you must go on a quest. Find her a dragon egg and you will become a fairy.",
            choices:[
                {
                    text:"Take the quest",
                    nextLevel:"thePath",
                },
                {
                    text:"Sorry I don't feel like questing today",
                    nextLevel:"fairyJail",
                },
                ]
        },
        fairyJail:{
            message:"The Queen is angered by your ungratefulness, her guards seized your arms. *You shall rot in fairy jail for your insults* she says",
            choices:[
                {
                    text:"You are imprisoned",
                    nextLevel:"start",
            
                },
            ]
        },
        mundaneLife:{
            message:"You live another boring day.",
            choices:[
                {
                    text:"Start over",
                    nextLevel:"start",
                
                },
            ]
        },
        thePath:{
            message:"You have left the fairy castle on a horse galloping down a path. You come to a fork in the path. Which path dou you take?",
            choices:[
                {
                    text:"Path with dense forest that will take a week to cover",
                    nextLevel:"DenseForest",
                },
                {
                    text:"I choose the path with less dense forest that will take 3 days to cover",
                    nextLevel:"ClearForest",
                },
           ] 
        },
        DenseForest:{
           message:"You travel for a week. You are sweaty tired and hungry. What do you do next?",
           choices:[
               {
                    text:"Kill the frog nearby to eat it",
                    nextLevel:"poison",
               },
               {
                    text:"KEEP GOING!",
                    nextLevel:"move",
               },
            ]
        },
        poison:{
            message:"You eat the frog.",
            choices:[
                {
                    text:"You are dead.",
                    nextLevel:"start",
                },
            ]
        },
        move:{
            message:"You find the dragon after another day of travel. How do you appaoach?",
            choices:[
            {
                text:"Attack with a yell",
                nextLevel:"dragonDeath",
            },
            {
                text:"Sneak up quietly",
                nextLevel:"ReturntoCastle",
            },
        
            ]
        },
        ClearForest:{
            message:"While walking around and admiring the beauty of the forest, you are attacked by a man-eating plant and you are eaten.",
            choices:[
                {
                    text: "You are dead",
                    nextLevel:"start",
                }]
        },
        ReturntoCastle:{
            message:"You return to the castle triumphantly and give the Queen the egg. In turn she blesses you with fairy wings. YOU WIN! and fly away on your new wings",
            choices:[
            {
                text:"Start Over",
                nextLevel:"start",
            },
            ]
        },
        dragonDeath:{
            background_image:"fire.gif",
            message:"Your screaming wakes the sleeping dragon and it attacks you burning your body.",
            choices:[
            {
                text:"You are dead.",
                nextLevel:"start",
            },
            ]
        }
    },
    };
