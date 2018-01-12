import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from 'wapiti';

const fakeProducts =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 }
]


beforeAll(() => {
  configure({ adapter: new Adapter() });
})

//initial react test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//snapshop test on initial render
test('Snapshot test on initial render', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//snapshop test on initial render
test('Snapshot test on initial render with props', () => {
  const component = renderer.create(<App lines={fakeProducts} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Get first ID at first render (default sort by ID)', () => {
  // Render the page by default sort
  const app = shallow(<App lines={fakeProducts}/>);
  expect(app.find('td').at(0).text()).toEqual('8282689');
});

test('Get first ID after one sort by Id (sort desc)', () => {
  // Render the page by default sort
  const app = shallow(<App lines={fakeProducts}/>);

  expect(app.find('td').at(0).text()).toEqual('8282689');
  app.find('th').at(0).simulate('click');
  expect(app.find('td').at(0).text()).toEqual('8380024');
});

test('Get first ID after 2nd sort by Id (sort asc)', () => {
  // Render the page by default sort
  const app = shallow(<App lines={fakeProducts}/>);
  expect(app.find('td').at(0).text()).toEqual('8282689');
  app.find('th').at(0).simulate('click');
  expect(app.find('td').at(0).text()).toEqual('8380024');
  app.find('th').at(0).simulate('click');
  expect(app.find('td').at(0).text()).toEqual('8282689');
});

test('Get first title after one sort by Title (sort asc)', () => {
  // Render the page by default sort
  const app = shallow(<App lines={fakeProducts}/>);
  app.find('th').at(1).simulate('click');
  expect(app.find('td').at(1).text()).toEqual('Basic L print Long Gold Fusion');
});

test('Get first title after 2nd sort by Title (sort desc)', () => {
  // Render the page by default sort
  const app = shallow(<App lines={fakeProducts}/>);
  app.find('th').at(1).simulate('click');
  expect(app.find('td').at(1).text()).toEqual('Basic L print Long Gold Fusion');
  app.find('th').at(1).simulate('click');
  expect(app.find('td').at(1).text()).toEqual('RUN ELIOPRIME');
});

test('Get first price after one sort by price (sort asc)', () => {
  // Render the page by default sort
  const app = shallow(<App lines={fakeProducts}/>);
  app.find('th').at(2).simulate('click');
  expect(app.find('td').at(2).text()).toEqual("9.99");
});

test('Get first title after 2nd sort by Title (sort desc)', () => {
  // Render the page by default sort
  const app = shallow(<App lines={fakeProducts}/>);
  app.find('th').at(2).simulate('click');
  expect(app.find('td').at(2).text()).toEqual("9.99");
  app.find('th').at(2).simulate('click');
  expect(app.find('td').at(2).text()).toEqual("54.99");
});


//Wapiti tests for integration tests
test("Test first render & click on sort by ID once", () => {
  expect.assertions(1);

  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("#td1").textContent)
    .click("#th1")
    .capture(() => document.querySelector("#td1").textContent)
    .run()
    .then(result => {
      expect(result).toEqual(["8044622", "8380024"]);
    });
});

//Wapiti tests for integration tests
test("Test full scenario with sorts on all columns", () => {
  expect.assertions(1);

  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("#td1").textContent)
    .click("#th1")
    .capture(() => document.querySelector("#td1").textContent)
    .click("#th1")
    .capture(() => document.querySelector("#td1").textContent)
    .click("#th2")
    .capture(() => document.querySelector("#td2").textContent)
    .click("#th2")
    .capture(() => document.querySelector("#td2").textContent)
    .click("#th3")
    .capture(() => document.querySelector("#td3").textContent)
    .click("#th3")
    .capture(() => document.querySelector("#td3").textContent)
    .run()
    .then(result => {
      expect(result).toEqual([
        "8044622",
        "8380024",
        "8044622",
        "2 guêtres RIDING noir",
        "RUN ELIOPRIME",
        "4.99",
        "54.99"
      ]);
    });
});
