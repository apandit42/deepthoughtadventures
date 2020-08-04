class baseCharacter
{
  
}

function multiplier(stat)
{
  
}

class player extends baseCharacter
{
    level = 5;
    baseAtk = 50;
    baseDef = 50;
    baseMag = 50;
    baseMagDef = 50;
    baseSpeed = 50;

    
}

class enemy extends baseCharacter
{
    level = 5;

}


//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================
//============================================================================================

const phases =
{
  START: 'start',
  PLAYERTURN: 'player turn',
  ENEMYTURN: 'enemy turn',
  RESOLUTION: 'resolution',
  RESET: 'reset',
  END: 'end'
}

class battleSystem
//the battle system has a start to the battle
//the start of the battle will call a player object and enemy object(s)
//the battle will loop between player turn, enemy turn, and resolution until an object dies
//
{
  numPlayer = 0;
  numEnemy = 0;
  constructor(numPlayer, numEnemy)
  {
    this.numPlayer = numPlayer;
    this.numEnemy = numEnemy;
  }
  turn(phase)
  {
    switch(phase)
    {
      case 'start'://create objects

      case 'player turn'://allow player to make decisions

      case 'enemy turn'://enemy ai makes decisions

      case 'resolution'://call battle() and do damage.

      case 'reset'://check what is alive and replace.

      case 'end':
    }
  }

  battle(player)
  {
    
  }


}
