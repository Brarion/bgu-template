/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react"
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe('<Counter />', () => {
  it('should render div with testid "counter"', () => {
    render(<Counter />);

    expect(screen.getByTestId("counter")).toBeInTheDocument();
  })

  it('should render div with testid "counter" and 2 children', () => {
    render(<Counter />);

    expect(screen.getByTestId("counter").children.length).toBe(2);
    expect(screen.getByTestId("counter").children[0]).toBeInTheDocument()
    expect(screen.getByTestId("counter").children[1]).toBeInTheDocument()
  })

  it('should render div with testid "counter" and <p /> with text "0"', () => {
    render(<Counter />);

    expect(screen.getByTestId("counter").children[1]).toHaveTextContent('0')
  })

  it('should render div with testid "counter" and <button /> with text "Кнопка"', () => {
    render(<Counter />);

    expect(screen.getByTestId("counter").children[0]).toHaveTextContent('Кнопка')
  })

  it('should render div with testid "counter" and <p /> with text "1" after 1 click', () => {
    render(<Counter />);

    userEvent.click(screen.getByTestId('counter').children[0])

    expect(screen.getByTestId("counter").children[1]).toHaveTextContent('1')
  })

  it('should render div with testid "counter" and <p /> with text "10" after 10 click', () => {
    render(<Counter />);

    const TEST_COUNT = 10;

    for (let i = 0; i < TEST_COUNT; i++) {
      userEvent.click(screen.getByTestId('counter').children[0])
    }

    expect(screen.getByTestId("counter").children[1]).toHaveTextContent(TEST_COUNT.toString())
  })
})