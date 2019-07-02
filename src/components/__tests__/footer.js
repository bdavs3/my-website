import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Footer from "../footer";

configure({ adapter: new Adapter() });

describe("Footer", () => {
  let footer = null;

  it("renders without crashing", () => {
    footer = shallow(<Footer />);
    expect(footer).not.toBeNull();
  });
});
