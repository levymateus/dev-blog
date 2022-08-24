
export const value = (v) => ({
  is: ({
    string() {
      return v && typeof v === 'string'
    },
    func() {
      return v && typeof v === 'function'
    },
    notEqual(a) {
      return v && v !== a
    },
    empty() {
      return v === undefined || v === null || v === '' || (Array.isArray(v) && v.length === 0)
    },
    notEmpty() {
      return v
    }
  })
})
