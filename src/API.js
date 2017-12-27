const Player = {
  players: [
    {
      number: 1,
      name: 'Luis',
      position: 'G'
    }, 
    {
      number: 2,
      name: 'Pedro',
      position:"D"
    },
    {
      number: 3, 
      name: 'Oscar',
      position: 'D'
    },
    {
      number: 4,
      name: 'Gabriela',
      position: 'M'
    },
    {
      number: 5,
      name: 'Luis',
      position: 'M'
    }
  ],
  all: function(){
    return this.players;
  },
  get: function(id){
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
}
export default Player;