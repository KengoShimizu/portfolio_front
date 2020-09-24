export type StateType = {
  initial_animation?: boolean;
  selected_menu?: number;
  second_anime?: boolean;
};

export type ActionType = {
  type: string;
  initial_animation?: boolean;
  selected_menu?: number;
  second_anime?: boolean;
};

export const Reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'initial_anime':
      return { ...state, initial_animation: action.initial_animation };
    case 'menu_select':
      return { ...state, selected_menu: action.selected_menu };
    case 'second_anime_start':
      return { ...state, second_anime: action.second_anime };
    default:
      return state;
  }
}