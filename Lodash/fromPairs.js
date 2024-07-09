function _fromPairs (pairs) {
  const result = {}

  for (const [key, value] of pairs) {
      result[key] = value
  }

  return result
}

function fromPairs (pairs) {
  return Object.fromEntries(pairs)
}
