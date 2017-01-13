import "reflect-metadata";
import { Expect, METADATA_KEYS, Test, TestCase } from "../../../core/alsatian-core";
import { FocusTests as FocusTestsDecorator } from "../../../core/decorators/focus-tests-decorator";

export class FocusTestsDecoratorTests {

    @Test()
    public focusTestKeyMetaDataAdded(key: string) {

       let TestFixture = () => {};

       FocusTestsDecorator(TestFixture);

       Expect(Reflect.getMetadata(METADATA_KEYS.FOCUS, TestFixture)).toBe(true);
    }
}
