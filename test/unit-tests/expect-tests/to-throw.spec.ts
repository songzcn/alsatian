import { ErrorMatchError } from "../../../core/errors/error-match-error";
import { Expect, Test } from "../../../core/alsatian-core";

export class ToThrowTests {

  @Test()
  public functionThrowsErrorPasses() {
    let throwFunction = () => { throw new Error(); };

    Expect(() => Expect(throwFunction).toThrow()).not.toThrow();
  }

  @Test()
  public functionDoesNotThrowErrorFails() {
    let nonThrowFunction = () => {};

    Expect(() => Expect(nonThrowFunction).toThrow()).toThrow();
  }

  @Test()
  public functionDoesNotThrowErrorFailsWithCorrectError() {
    let nonThrowFunction = () => {};

    Expect(() => Expect(nonThrowFunction).toThrow()).toThrowError(ErrorMatchError, "Expected an error to be thrown but no errors were thown.");
  }

  @Test()
  public functionDoesNotThrowErrorPassesWhenShouldNotThrow() {
    let nonThrowFunction = () => {};

    Expect(() => Expect(nonThrowFunction).not.toThrow()).not.toThrow();
  }

  @Test()
  public functionThrowsErrorFailsWhenShouldNotThrow() {
    let throwFunction = () => { throw new Error(); };

    Expect(() => Expect(throwFunction).not.toThrow()).toThrow();
  }

  @Test()
  public functionThrowsErrorFailsWithCorrectError() {
    let throwFunction = () => { throw new Error(); };

    Expect(() => Expect(throwFunction).not.toThrow()).toThrowError(ErrorMatchError, "Expected an error not to be thrown but an error was thown.");
  }
}