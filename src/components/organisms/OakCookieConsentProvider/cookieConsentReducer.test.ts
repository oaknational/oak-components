import {
  CookieConsentAction,
  cookieConsentReducer,
  getInitialState,
} from "./cookieConsentReducer";

describe(cookieConsentReducer, () => {
  it('opens the modal when the "openModal" action is dispatched', () => {
    const result = cookieConsentReducer(
      { ...getInitialState(), isSettingsModalOpen: false },
      { type: "openModal" },
    );

    expect(result.isSettingsModalOpen).toBe(true);
  });

  it('closes the modal when the "closeModal" action is dispatched', () => {
    const result = cookieConsentReducer(
      { ...getInitialState(), isSettingsModalOpen: true },
      { type: "closeModal" },
    );

    expect(result.isSettingsModalOpen).toBe(false);
  });

  it('sets "bannerState" when the "openBanner" action is dispatched', () => {
    const result = cookieConsentReducer(
      { ...getInitialState(), bannerState: "hidden" },
      { type: "showBanner" },
    );

    expect(result.bannerState).toBe("initial");
  });

  it('sets "bannerState" when the "hideBanner" action is dispatched', () => {
    const result = cookieConsentReducer(
      { ...getInitialState(), bannerState: "initial" },
      { type: "hideBanner" },
    );

    expect(result.bannerState).toBe("hidden");
  });

  describe.each([
    "confirmModalConsents",
    "rejectModalConsents",
    "acceptModalConsents",
  ] satisfies CookieConsentAction["type"][])(
    "when the %p action is dispatched",
    (actionType) => {
      const result = cookieConsentReducer(
        {
          ...getInitialState(),
          isSettingsModalOpen: true,
          bannerState: "initial",
        },
        { type: actionType },
      );

      it("closes the modal", () => {
        expect(result.isSettingsModalOpen).toBe(false);
      });

      it("hides the banner", () => {
        expect(result.bannerState).toBe("hidden");
      });
    },
  );

  describe('when the "rejectBannerConsents" action is dispatched', () => {
    const result = cookieConsentReducer(
      {
        ...getInitialState(),
        isSettingsModalOpen: true,
        bannerState: "initial",
      },
      { type: "rejectBannerConsents" },
    );

    it('sets the bannerState to "rejected"', () => {
      expect(result.bannerState).toBe("rejected");
    });
  });

  describe('when the "acceptBannerConsents" action is dispatched', () => {
    const result = cookieConsentReducer(
      {
        ...getInitialState(),
        isSettingsModalOpen: true,
        bannerState: "initial",
      },
      { type: "acceptBannerConsents" },
    );

    it('sets the bannerState to "accepted"', () => {
      expect(result.bannerState).toBe("accepted");
    });
  });
});
