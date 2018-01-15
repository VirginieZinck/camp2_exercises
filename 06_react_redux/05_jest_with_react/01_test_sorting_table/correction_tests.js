import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

const fakeProducts = [
  { decathlon_id: 1, title: "A", price: 5 },
  { decathlon_id: 2, title: "C", price: 1 },
  { decathlon_id: 3, title: "B", price: 3 }
];

test("it should display a table", () => {
  const wrapper = shallow(<App lines={fakeProducts} />);

  expect(wrapper.find("Row").length).toBe(3);
});

test("it should be ordered by decathlon_id", () => {
  const wrapper = shallow(<App lines={fakeProducts} />);

  const firstColumn = wrapper
    .find("Row")
    .map(elm => elm.props())
    .map(props => props.decathlon_id);

  expect(firstColumn).toEqual([1, 2, 3]);
});

test("it should be able to be ordered by decathlon_id in reverse order", () => {
  const wrapper = shallow(<App lines={fakeProducts} />);

  wrapper.find("th").at(0).simulate("click");

  const firstColumn = wrapper
    .find("Row")
    .map(elm => elm.props())
    .map(props => props.decathlon_id);

  expect(firstColumn).toEqual([3, 2, 1]);
});

test("it should be able to be ordered by title", () => {
  const wrapper = shallow(<App lines={fakeProducts} />);

  wrapper.find("th").at(1).simulate("click");

  const secondColumn = wrapper
    .find("Row")
    .map(elm => elm.props())
    .map(props => props.title);

  expect(secondColumn).toEqual(["A", "B", "C"]);
});

test("it should be able to be ordered by title in reverse", () => {
  const wrapper = shallow(<App lines={fakeProducts} />);

  wrapper.find("th").at(1).simulate("click");
  wrapper.find("th").at(1).simulate("click");

  const secondColumn = wrapper
    .find("Row")
    .map(elm => elm.props())
    .map(props => props.title);

  expect(secondColumn).toEqual(["C", "B", "A"]);
});

test("it should be able to be ordered by price", () => {
  const wrapper = shallow(<App lines={fakeProducts} />);

  wrapper.find("th").at(2).simulate("click");

  const lastColumn = wrapper
    .find("Row")
    .map(elm => elm.props())
    .map(props => props.price);

  expect(lastColumn).toEqual([1, 3, 5]);
});

test("it should be able to be ordered by price in reverse", () => {
  const wrapper = shallow(<App lines={fakeProducts} />);

  wrapper.find("th").at(2).simulate("click");
  wrapper.find("th").at(2).simulate("click");

  const lastColumn = wrapper
    .find("Row")
    .map(elm => elm.props())
    .map(props => props.price);

  expect(lastColumn).toEqual([5, 3, 1]);
});
