/**
 * Installs a mock of IntersectionObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
export function installMockIntersectionObserver() {
  global.IntersectionObserver =
    global.IntersectionObserver ??
    class MockIntersectionObserver implements IntersectionObserver {
      private elements: Set<Element> = new Set();

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
        // console.log(`Observing element: ${this.describeElement(element)}`);
      }
      unobserve(element: Element) {
        this.elements.delete(element);
        // console.log(`Stopped observing: ${this.describeElement(element)}}`);
      }
      disconnect() {
        this.elements.clear();
        // console.log("Disconnected all observed elements.");
      }
      // private describeElement(element: Element): string {
      //   let description = element.tagName.toLowerCase();
      //   if (element.id) {
      //     description += "#" + element.id;
      //   }
      //   if (element.className) {
      //     description += "." + element.className.replace(/\s+/g, ".");
      //   }
      //   return description;
      // }
    };
}
