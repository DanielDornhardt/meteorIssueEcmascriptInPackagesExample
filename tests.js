import assert from "assert";
import {name as appName} from "./test.js";

describe("test", () => {
  it("should export its name", () => {
    assert.strictEqual(appName, "test");
  });
});
