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
  it("contains three columns", () => {
    expect(footer.find(".column")).toHaveLength(3);
  });
  it("has a menu in the first column", () => {
    expect(
      footer
        .find(".column")
        .at(0)
        .exists(".menu")
    );
  });
  it("has a title for the menu in the first column", () => {
    const title = <p className="menu-label">Navigation</p>;
    expect(footer.contains(title)).toBe(true);
  });
  it("has links in the menu in the first column", () => {
    expect(
      footer
        .find(".column")
        .at(0)
        .find("li")
    ).toHaveLength(4);
  });
  it("has a titled in the second column", () => {
    expect(
      footer
        .find(".column")
        .at(1)
        .exists("h1")
    ).toBe(true);
  });
  it("has a title in the third column", () => {
    expect(
      footer
        .find(".column")
        .at(2)
        .exists("h1")
    ).toBe(true);
  });
});
