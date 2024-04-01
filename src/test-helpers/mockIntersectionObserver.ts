/**
 * Installs a mock of IntersectionObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
global.IntersectionObserver =
  global.IntersectionObserver ??
  class MockIntersectionObserver implements IntersectionObserver {
    get root(): Element {
      throw new Error("Attribute not implemented.");
    }
    get rootMargin(): string {
      throw new Error("Attribute not implemented.");
    }
    get thresholds(): number[] {
      throw new Error("Attribute not implemented.");
    }
    takeRecords(): IntersectionObserverEntry[] {
      throw new Error("Method not implemented.");
    }
    unobserve() {}
    observe() {}
    disconnect() {}
  };
