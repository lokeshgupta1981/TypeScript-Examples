describe("outer", () => {
  beforeAll(() => console.log("beforeAll outer"));
  afterAll(() => console.log("afterAll outer"));
  beforeEach(() => console.log("  beforeEach outer"));
  afterEach(() => console.log("  afterEach outer"));

  describe("inner", () => {
    beforeEach(() => console.log("    beforeEach inner"));
    afterEach(() => console.log("    afterEach inner"));

    it("spec 1", () => {
      console.log("      it spec 1");
      expect(true).toBeTrue();
    });

    it("spec 2", () => {
      console.log("      it spec 2");
      expect(true).toBeTrue();
    });
  });
});
