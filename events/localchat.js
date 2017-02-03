"use strict"; // on utilise le mode strict

class Vector3 // Exporter un module qui contient une class
{

  constructor(x, y, z, radius) // Voir : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/constructor
  {
    this.x = x;
    this.y = y;
    this.z = z; 
    // this.radius = radius || 2; Ca veut rien dire "radius ou 2"
  }

  static getVectorDistance(v1 , v2) // Création de la fonction qui compare deux Vector3
  {
    var vx = v1.x - v2.x; // on initialise le Vector1 qui Vaut a X
    var vy = v1.y - v2.y; // on initialise le Vector2 qui Vaut a Y
    var vz = v1.z - v2.z; // on initialise le Vector3 qui Vaut a Z

    return (vx * vx + vy * vy + vz * vz); // On retourne la racine de Delta vx + Delta vy + Delta vz
  }

  static sendNearbyMessage(player, radius, str)
  {
    radius *= radius;
    mp.players.forEach( (_player) => {
      if(Vector3.GetVectorDistance(player.position, _player.position) <= radius)
      {
        player.outputChatBox(str);
      }
    });
  }
}

function OnPlayerChat(player, text)
{
  let string = "<b><FONT COLOR=#ff0000 >["+ player.name +"] : </FONT></b>"+ text
  Vector3.SendNearbyMessage(player, 2, string);
}

mp.events.add(
{
    "playerChat" : OnPlayerChat
});
module.exports = Vector3
