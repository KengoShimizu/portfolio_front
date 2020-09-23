export type StateType = {
  initial_animation: boolean;
};

export type ActionType = {
  type: string;
  initial_animation: boolean;
};

export const Reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'setId':
      return { ...state, initial_animation: action.initial_animation };
    default:
      return state;
  }
}