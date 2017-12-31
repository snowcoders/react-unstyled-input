import * as React from 'react';

import { UnstyledInput, IUnstyledInputProps } from "./component";

import { expect } from 'chai';
import { shallow, configure } from "enzyme";

// Configure enzyme
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("UnstyledInput", () => {
    it("Render", () => {
        let wrapper = shallow(<UnstyledInput />);
        expect(wrapper).to.have.length(1);
    });

    it("Default has classname", () => {
        let wrapper = shallow(<UnstyledInput />);
        let htmlButton = wrapper.find("input");
        expect(htmlButton).to.have.length(1);
        expect(htmlButton.props().className).to.contain('sci-react-unstyled-input');
    });

    it("Disable style has no classname", () => {
        let wrapper = shallow(<UnstyledInput className="blue" isBaseStylesDisabled={true} />);
        let htmlButton = wrapper.find("input");
        expect(htmlButton).to.have.length(1);
        expect(htmlButton.props().className).to.not.contain('sci-react-unstyled-input');
    });

    it("Click event", (done) => {
        let props = {
            onClick: done
        };

        let wrapper = shallow(<UnstyledInput {...props} />);
        wrapper.simulate("click");
    });

    it("Class name override", () => {
        let wrapper = shallow(<UnstyledInput className="blue" />);
        let htmlButton = wrapper.find("input");
        expect(htmlButton).to.have.length(1);
        expect(htmlButton.props().className).to.contain('sci-react-unstyled-input');
        expect(htmlButton.props().className).to.contain('blue');
    });
});