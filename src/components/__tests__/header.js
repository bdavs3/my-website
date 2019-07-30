import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "../header";

configure({ adapter: new Adapter() });

// read about the various parts of a Bulma header at https://bulma.io/documentation/components/navbar/#basic-navbar
describe("Header", () => {
  let header = null;

  it("renders without crashing", () => {
    header = shallow(<Header />);
    expect(header).not.toBeNull();
  });
  it("is a header", () => {
    expect(header.find("header")).toHaveLength(1);
  });
  it("contains a navbar", () => {
    expect(header.exists(".navbar")).toBe(true);
  });
  it("contains a navbar brand", () => {
    expect(header.exists(".navbar-brand")).toBe(true);
  });
  it("contains a logo in the navbar brand", () => {
    expect(header.find("HeaderLogo")).toHaveLength(1);
  });
  it("has a dropdown toggle (burger icon) in the navbar brand", () => {
    expect(header.exists("#mobileHeaderToggle")).toBe(true);
  });
  it("properly toggles state when the dropdown toggle is clicked", () => {
    const dropdownToggle = header.find("#mobileHeaderToggle");
    expect(header.state().menuExpanded).toBe(false);
    dropdownToggle.simulate("click");
    expect(header.state().menuExpanded).toBe(true);
    dropdownToggle.simulate("click");
    expect(header.state().menuExpanded).toBe(false);
  });
  it("toggles a class that displays the main menu and swaps the header toggle icon between a burger and an X upon state change", () => {
    let dropdownToggle = header.find("#mobileHeaderToggle");
    expect(header.exists(".is-active")).toBe(false);
    dropdownToggle.props().onClick();
    expect(header.exists(".is-active")).toBe(true);
    dropdownToggle.props().onClick();
    expect(header.exists(".is-active")).toBe(false);
  });
  it("contains a navbar menu", () => {
    expect(header.exists("#navMenu")).toBe(true);
  });
  it("contains a navbar start and end", () => {
    expect(header.exists(".navbar-start")).toBe(true);
    expect(header.exists(".navbar-end")).toBe(true);
  });
  it("has four menu items in the navbar end", () => {
    expect(header.find(".navbar-end").find(".navbar-item")).toHaveLength(4);
  });
});
