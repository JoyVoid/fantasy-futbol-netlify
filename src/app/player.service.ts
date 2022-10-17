import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Player } from './player';
import { PLAYERS  } from './mock-players';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    const players = of(PLAYERS);
    this.messageService.add('PlayersService: fetched players');
    return players;
  }

  getPlayer(id: number): Observable<Player> {
    // For now, assume that a player with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const player = PLAYERS.find(h => h.id === id)!;
    this.messageService.add(`PlayerService: fetched player id=${id}`);
    return of(player);
  }
}