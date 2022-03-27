import { ActionTypes } from "../actionTypes/actionTypes";
import { IAppState } from "../reducer/reducer";
import { CarouselImage } from "../../types/carousel_image";

export type IAppAction = { type: ActionTypes } & Partial<IAppState>;

export const setCarouselImages = (
  carouselImages: CarouselImage[]
): IAppAction => ({
  carouselHeroImages: carouselImages,
  type: ActionTypes.SET_CAROUSEL_IMAGES,
});
