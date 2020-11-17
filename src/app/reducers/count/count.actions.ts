import { Action } from '@ngrx/store';

export enum countActionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
  add = '[COUNT] add'
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase;
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease;
}

export class CountClearAction implements Action {
  readonly type = countActionsType.clear;
}

export class CountAddAction implements Action {
  readonly type = countActionsType.add;
  constructor(public payload: number) {}
}

export type CountActions = CountIncreaseAction
  | CountDecreaseAction
  | CountClearAction
  | CountAddAction;
