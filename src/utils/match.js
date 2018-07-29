import { getRandomInt } from './random';
import WORDLIST from './wordlist';
// import db from './firebase';

export default class Match {
  constructor(deck = 'Spyfall 1', duration = 8) {
    this.state = 'waitingForPlayers';
    this.accessPhrase = Match.getAccessPhrase();
    this.duration = duration;
    this.deck = deck;
    this.location = null;
    this.paused = false;
    this.pausedTime = null;
    this.endTime = null;
  }

  create() {
    console.log('Creating match:', this.accessPhrase);
    return null;
  }

  join(id, playerName) {
    console.log('Joining match:', this.accessPhrase);
    console.log('playerName: ', playerName);
    console.log('id: ', id);
    return null;
  }

  static getAccessPhrase() {
    const max = WORDLIST.length - 1;
    let index1 = getRandomInt(0, max) || 8;
    let index2 = getRandomInt(0, max) || 256;

    if (index1 < 0 || index1 > max) index1 = 8;
    if (index2 < 0 || index2 > max) index2 = 256;

    const value1 = WORDLIST[index1];
    const value2 = WORDLIST[index2];

    return `${value1} ${value2}`;
  }
}
