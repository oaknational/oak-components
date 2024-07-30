export type CookieConsentReducerState = {
  isSettingsModalOpen: boolean;
  bannerState: "initial" | "accepted" | "rejected" | "hidden";
};

export type CookieConsentAction =
  | {
      type: "confirmModalConsents";
    }
  | {
      type: "acceptModalConsents";
    }
  | {
      type: "rejectModalConsents";
    }
  | {
      type: "rejectBannerConsents";
    }
  | {
      type: "acceptBannerConsents";
    }
  | {
      type: "openModal";
    }
  | {
      type: "closeModal";
    }
  | {
      type: "showBanner";
    }
  | {
      type: "hideBanner";
    };

export function cookieConsentReducer(
  currentState: CookieConsentReducerState,
  action: CookieConsentAction,
): CookieConsentReducerState {
  switch (action.type) {
    case "confirmModalConsents":
    case "acceptModalConsents":
    case "rejectModalConsents":
      return {
        ...currentState,
        isSettingsModalOpen: false,
        bannerState: "hidden",
      };
    case "acceptBannerConsents":
      return {
        ...currentState,
        bannerState: "accepted",
      };
    case "rejectBannerConsents":
      return {
        ...currentState,
        bannerState: "rejected",
      };
    case "openModal":
      return {
        ...currentState,
        isSettingsModalOpen: true,
      };
    case "closeModal":
      return {
        ...currentState,
        isSettingsModalOpen: false,
      };
    case "showBanner":
      return {
        ...currentState,
        bannerState: "initial",
      };
    case "hideBanner":
      return {
        ...currentState,
        bannerState: "hidden",
      };
    default:
      return currentState;
  }
}

export function getInitialState(): CookieConsentReducerState {
  return {
    isSettingsModalOpen: false,
    bannerState: "hidden",
  };
}
