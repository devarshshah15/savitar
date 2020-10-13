const a = 2
const b = 3
function add (a, b) {
  return a + b
}
test('addition should return 5', () => {
  expect(add(a, b)).toBe(5)
})
