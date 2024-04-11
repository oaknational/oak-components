/**
 * Installs a mock of ResizeObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */

export function installMockResizeObserver() {
  global.ResizeObserver =
    global.ResizeObserver ??
    class MockResizeObserver implements ResizeObserver {
      disconnect() {}
      observe() {}
      unobserve() {}
    };
}
