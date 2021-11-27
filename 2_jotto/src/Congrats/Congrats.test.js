import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
import { findByTestAttr } from "../../test/testUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
const setup = (props={}) => shallow(<Congrats {...props}/>);
test("renders without crashing", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
})
test("renders no text when success is false",()=>{
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe("")
})
test("renders congrats message when success is true",()=>{
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe("")
})
