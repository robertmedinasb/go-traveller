import { IAppAction } from "../actionCreators/actionCreator";
import { ActionTypes } from "../actionTypes/actionTypes";
import { getInitialState, setPersistedState } from "../../utils/persistence";
import { CarouselImage } from "../../types/carousel_image";

export interface IAppState {
  carouselHeroImages?: CarouselImage[];
}

export const DEFAULT_STATE: IAppState = {};

export const reducer = (
  type: string,
  state: IAppState,
  action: IAppAction
): IAppState => {
  let newState = state !== undefined ? { ...state } : getInitialState();

  switch (action.type) {
    case ActionTypes.SET_CAROUSEL_IMAGES:
      newState.carouselHeroImages = action.carouselHeroImages!;
      break;
  }

  setPersistedState(newState);

  return newState;
};
