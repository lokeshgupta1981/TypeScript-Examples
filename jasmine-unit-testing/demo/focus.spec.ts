describe("Cart", () => {
  fit("runs because of fit", () => {
    expect(1 + 1).toBe(2);
  });

  it("is skipped while a focused spec exists", () => {
    expect(1 + 1).toBe(2);
  });

  xdescribe("discounts", () => {
    it("is disabled by xdescribe", () => {
      expect(1 + 1).toBe(2);
    });
  });
});
