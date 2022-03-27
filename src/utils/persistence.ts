import omit from "lodash/omit";
import { PERSISTENCE_SETTINGS, FROM_SERVER } from "../constants";
import { DEFAULT_STATE, IAppState } from "../store/reducer/reducer";

const getPersistedState = () => {
  const persistedData = JSON.parse(
    FROM_SERVER ? localStorage.getItem("data") ?? "{}" : "{}"
  );

  return {
    ...persistedData,
    isLoading: (persistedData?.registrations?.length ?? 0) > 0,
  };
};

export const getInitialState = (): IAppState => {
  const currentState = {
    ...DEFAULT_STATE,
    ...getPersistedState(),
  };

  if (
    currentState?.currentStep > 0 &&
    currentState.registrations?.length === 0
  ) {
    currentState.currentStep = 0;
  }

  return currentState;
};

export const setPersistedState = (newState: IAppState) => {
  FROM_SERVER &&
    localStorage.setItem(
      "data",
      JSON.stringify(omit(newState, PERSISTENCE_SETTINGS.ignore))
    );
};
