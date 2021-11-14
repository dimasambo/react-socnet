import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra");
    });

    test("after creating <span> should be displayed", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"}/>);
        const root = component.root;
        const span = root.findByType("span")
        expect(span).not.toBeNull();
    });

    test("after creating <input> shouldn`t be displayed", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"}/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input")
        }).toThrow();
    });

    test("after creating <span> should have correct status", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"}/>);
        const root = component.root;
        const span = root.findByType("span")
        expect(span.children[0]).toBe("it-kamasutra");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"}/>);
        const root = component.root;
        const span = root.findByType("span")
        span.props.onDoubleClick();
        const input = root.findByType("input")
        expect(input.props.value).toBe("it-kamasutra");
    });

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
})