import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import BlogItem from "./blogItem";

Enzyme.configure({ adapter: new Adapter() });

describe("Layout component", () => {
  const mockProps = {
    pathContext: {
      data: {
        title: "mock title",
        content: "mock content",
        href: "google.com",
      },
    },
  };

  it("should render", () => {
    const wrapper = shallow(<BlogItem {...mockProps} />);

    expect(wrapper);
  });
});
