import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { countActionsType } from './reducers/count/count.actions';
import { map } from 'rxjs/operators';



@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  // @Effect()
  // updatedAt(): Observable<any> {
  //   return this.actions$.pipe(
  //     ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
  //     map(() => {
  //       return new CountUpdatedAtAction({
  //         updatedAt: Date.now()
  //       });
  //     })
  //   );
  // }

}
