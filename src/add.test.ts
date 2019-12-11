// @ts-ignore
const add = (a: number, b: number) => a + b

describe("add", (): void => {
  test("should return 3", (): void => {
    const result: number = add(1, 2)
    expect(result).toEqual(3)
  })
})
