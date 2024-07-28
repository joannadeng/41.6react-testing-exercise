import React,{ render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// it ("should work without crashing", function() {
//   render(<Carousel />)
// })

// it ("should match the snapshot", function() {
//   const {asFragment} = render(<Carousel />)
//   expect(asFragment()).toMatchSnapshot()
// })

it("works when you click on the left arrow", function() {
  const { container } = render(
    // console.log(container)
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
  
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

  
  // expect(leftArrow).not.toBeInTheDocument()

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).toBeInTheDocument()

  fireEvent.click(leftArrow);
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

});


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});
