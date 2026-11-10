import { Trie } from "./trie";

describe("Trie", () => {
  let trie: Trie<string, number>;

  beforeEach(() => {
    trie = new Trie();
  });

  it("should set correctly", () => {
    trie.set(["a", "b", "c"], 1);
    trie.set(["a", "b", "d"], 2);
    expect(trie.get(["a", "b", "c"])).toBe(1);
    expect(trie.get(["a", "b", "d"])).toBe(2);
    expect(trie.hasPrefix(["a", "b"])).toBe(true);
  });
});
