/**
 * Installs a mock of IntersectionObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
export function installMockIntersectionObserver() {
  globalThis.IntersectionObserver =
    globalThis.IntersectionObserver ??
    class MockIntersectionObserver implements IntersectionObserver {
      private readonly elements: Set<Element> = new Set();

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
      observe(element: Element) {
        this.elements.add(element);
      }
      unobserve(element: Element) {
        this.elements.delete(element);
      }
      disconnect() {
        this.elements.clear();
      }
    };
}
