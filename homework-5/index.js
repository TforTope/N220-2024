    // this function takes in a user prompts and allowedAnswes and displays a string based on that
    //emample 
    // prompt: how may lives does a cat have
    // allowedAnswes: [2 ,5]
    // returns: "how may lives does a cat have \noption [2 ,5]"
    function getPrompt(prompt, allowedAnswers) {
      let options = "\n\noptions: ["
      for (let i = 0; i < allowedAnswers.length; i++) { 
        const answer = allowedAnswers[i];
        options += answer
        if (i < allowedAnswers.length -1) 
        options += ", "
      }
      if (allowedAnswers == null && allowedAnswers == undefined) return prompt
      return prompt + options + "]"
    }

    //displayes prompt 
    // msg is the message that will displayed
    // allowedAnswes are the only answers that will be accepted if the answer is not in alloweed answer display the prompt again
    function callPrompt(msg, allowedAnswers){
      const promptString = getPrompt(msg, allowedAnswers);
      let tag = prompt(promptString);
      if(tag == null){
        callPrompt(msg, allowedAnswers)
      }
      else if (allowedAnswers != null && allowedAnswers != undefined) {
        for (let i = 0; i < allowedAnswers.length; i++) { 
          const answer = allowedAnswers[i];
          if (answer.toLowerCase() == tag.toLowerCase()) {
            return tag
          } 
        }
        callPrompt(msg, allowedAnswers)
      }
      return tag;
    }


    function getStarter() {
      const allowedAnswers = ["Squirtle", "Bulbasaur", "Charmander"]
      let starter = callPrompt("Hey, new Pokémon trainer choose between these starters Squirtle, Bulbasaur, Charmander", allowedAnswers);
      const location = goToForestOrChallengeGymLeader(starter)
    }

    function goToForestOrChallengeGymLeader(starter) {
      const allowedAnswers = ["forest", "challenge"]
      let action = callPrompt("You chose “"+starter+"”, you now have the option to go to the forest to level up “"+starter+"” or challenge the first gym leader",allowedAnswers);
      if(action.toLowerCase() == "forest") {
        nowInForest(starter)
      } else if(action.toLowerCase() == "challenge") {
        battkeGymLeader(starter)
      }
    }

    function nowInForest(starter) {
      alert("You are now in the forest a wild “PIDGEY” Attacks your now force into battle")
      const allowedAnswers = ["RUN", "FIGHT"]
      let action = callPrompt("You send out “"+starter+"” to protect you “"+starter+"” you have the option to RUN or FIGHT", allowedAnswers)
      if (action.toUpperCase() == "RUN") {
        alert("You chose RUN. The wild “PIDGEY” did not let you flee you must engage in combat. Wild “PIDGEY’ uses quick attack “"+starter+"” is now at 75% health")
        nowRuningAway(starter)
      } else if (action.toUpperCase() == "FIGHT") {
        nowRuningAway(starter)
      }
    }

    function battkeGymLeader(starter) {
      const allowedAnswers = ["ROCK", "GRASS"]
      let action = callPrompt("Your are now facing Brock the first gym leader. Brock sends out “BUTTERFREE”. You send out “"+starter+"” You have the first move. You have the option to use ROCK or GRASS attack", allowedAnswers)
      if(action.toUpperCase() == "ROCK") {
        alert(action+" attatck did a critical hit.\n “BUTTERFREE fainted you have defeated brock the first gym leader and achieved you first gym badge")
        alert(". You are on your way to becoming a legendary Pokémon Trainer. THE END. ")
      }
      else if (action.toUpperCase() == "GRASS") {
        alert("You Chose "+action+" attatck. “BUTTERFREE” took damage health is now at 50% health. “BUTTTERFREE” uses QUICK ATTACK. “"+starter+"” is now at 50%")
        battkeGymLeaderTurn2(starter, action)
      }
    }

    function battkeGymLeaderTurn2(starter, attack) {
      const allowedAnswers = ["ROCK", "GRASS"]
      let action = callPrompt("It is your move now you have the option to ROCK or GRASS attack", allowedAnswers)
      alert(action+" attatck did a critical hit.\n “BUTTERFREE” fainted you have defeated brock the first gym leader and achieved you first gym badge")
      alert(". You are on your way to becoming a legendary Pokémon Trainer. THE END. ")
    }

    function nowRuningAway(starter) {
      const allowedAnswers = ["ROCK", "GRASS"]
      let action = callPrompt("You chose FIGHT you can use grass or rock to attack choose one", allowedAnswers)

      if (action.toUpperCase() == "ROCK") {
        alert("You used "+action+" “PIDGEY” is resistance to "+action+" and attacks “"+starter+"”. “"+starter+"”is now at 0%")
        alert("“"+starter+"” is weak you go to the Pokémon center to heal")
        goToForestOrChallengeGymLeader(starter)
      } else if (action.toUpperCase() == "GRASS") {
        alert("You hit the wild “PIDGEY” with a critical hit. The wild “PIDGEY” Fainted. ")
        alert("Your “"+starter+"” is now healed. You decide to go face the first gym leader.")
      }
    }

    getStarter()