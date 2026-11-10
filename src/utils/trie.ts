class TrieNode<K, V> {
  children = new Map<K, TrieNode<K, V>>();
  hasValue = false;
  value?: V;
}

export class Trie<K, V> {
  private readonly root = new TrieNode<K, V>();

  set(path: readonly K[], value: V): this {
    let node = this.root;
    for (const key of path) {
      let next = node.children.get(key);
      if (!next) {
        next = new TrieNode<K, V>();
        node.children.set(key, next);
      }
      node = next;
    }
    node.hasValue = true;
    node.value = value;
    return this;
  }

  get(path: readonly K[]): V | undefined {
    const node = this.find(path);
    return node?.hasValue ? node.value : undefined;
  }

  has(path: readonly K[]): boolean {
    return this.find(path)?.hasValue ?? false;
  }

  hasPrefix(path: readonly K[]): boolean {
    return this.find(path) !== undefined;
  }

  private find(path: readonly K[]): TrieNode<K, V> | undefined {
    let node = this.root;
    for (const key of path) {
      const next = node.children.get(key);
      if (!next) return undefined;
      node = next;
    }
    return node;
  }
}
