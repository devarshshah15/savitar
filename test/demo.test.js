const a = 2
const b = 3
function add (a, b) {
  return a + b
}
// eslint-disable-next-line no-undef
test('addition should return 5', () => {
  // eslint-disable-next-line no-undef
  expect(add(a, b)).toBe(5)
})
