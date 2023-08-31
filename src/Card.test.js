import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

const cardImage = TEST_IMAGES[0];
it("renders without crashing", () => {
    render(
        <Card
            caption="test-caption"
            src={cardImage.src}
            currNum="1"
            totalNum={TEST_IMAGES.length}
        />
    );
});
it("should match snapshot", () => {
    const { asFragment } = render(
        <Card
            caption="test-caption"
            src={cardImage.src}
            currNum="1"
            totalNum={TEST_IMAGES.length}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});
