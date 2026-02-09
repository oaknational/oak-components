/**
 * Installs a mock of ResizeObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */

export function installMockResizeObserver() {
  globalThis.ResizeObserver =
    globalThis.ResizeObserver ??
    class MockResizeObserver implements ResizeObserver {
      disconnect() {
        // Mock implementation of disconnect
      }
      observe() {
        // Mock implementation of observe
      }
      unobserve() {
        // Mock implementation of unobserve
      }
    };
}
