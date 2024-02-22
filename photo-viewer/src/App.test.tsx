import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
// import renderer from 'react-test-renderer';
import * as renderer from 'react-test-renderer';
import { PhotoZoomViewer } from './photoViewer/PhotoZoomViewer';


describe("My Component", () => {
    test('renders React Photo Viewer text', () => {
        const { getByText } = render(<App />);
        const textElement = getByText(/React Photo Viewer/);
        expect(textElement).toBeInTheDocument();
    })
    test('renders Select Image', () => {
        const { getByText } = render(<App />);
        const textElement = getByText(/Select Image/);

        expect(textElement).toBeInTheDocument();
    })
    test('verify broken image is not present in the Url', () => {
        const { getByAltText } = (render(<App />))
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/601/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/624/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/632/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/636/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/644/1600/900.jpg")
        expect(getByAltText).not.toContainEqual("https://picsum.photos/id/647/1600/900.jpg")
    })
})
describe("Snapshot testing", () => {
    it("Should match snapshot ", async () => {
        const tree = renderer.create(<App />).toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    });


});



describe("My Component", () => {
    it("Should render without error", () => {
        render(<PhotoZoomViewer imageurl={''} />);
    });


    it("Should render without error", async () => {
        const component = render(<PhotoZoomViewer imageurl={''} />);
        const comp1 = render(<PhotoZoomViewer imageurl={'https://picsum.photos/id/602/1600/900.jpg2'} />);
        await waitFor(() => component.getByAltText(""));
        fireEvent.click(comp1.getByAltText("https://picsum.photos/id/602/1600/900.jpg2"))
        await waitFor(() => comp1.getByAltText("https://picsum.photos/id/602/1600/900.jpg2"));
    });

});





