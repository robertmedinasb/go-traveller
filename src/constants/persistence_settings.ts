import { IPersistenceSettings } from "../interfaces";

export const PERSISTENCE_SETTINGS: IPersistenceSettings = {
  ignore: [
    "bankList",
    "isConsultingRegistration",
    "isLoadingWs",
    "isLoading",
    "notification",
    "rates",
    "isLoadingPayment",
    "paymentStep",
    "timers",
    "scrollsRef",
    "confirmationModal",
  ],
  ignoreReset: ["bankList", "rates", "scrollsRef"],
};
