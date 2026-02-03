// This is mostly to stop sonarcloud throwing the security error "Make sure that using this pseudorandom number generator is safe here"
// This is a non-crypto secure random, so don't use for anything where security is important (auth for example)
export function nonCryptoRandom() {
  return Math.random(); // NOSONAR
}
