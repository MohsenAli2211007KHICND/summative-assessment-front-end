import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { mockData } from '../../mockData/MockData';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductsMainPage from './ProductsMainPage';

// 1) As a shopper, I can navigate to the Products page and see the products that are stored
// in the database so that I can decide what I want to buy.


describe('ProductMainPage component test', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData)
        })
    });

    // AC2: Each product should be displayed on its own line. Each line should have a
// thumbnail image of the product, the name of the product, the short description of
// the product, the price of the product, a field for qty (req’d, and defaulted to 1) and
// an “Add to Cart” button

    it('Ruby slippers product should be listed on productMainPage ', async () => {
        render(
            <Router>
              <ProductsMainPage products={mockData} />
            </Router>
          );
        const rubyItemImg = screen.getByAltText(mockData[0].name)
        console.log(mockData);
        let quantity = 1;
        const rubyItemName =  screen.findByText(mockData[0].name)
        const rubyShortDescription = await screen.findByText(mockData[0].shortDescription)
        const rubyPrice = await screen.findByText(mockData[0].price)
        const rubyQuantity = await screen.findByText(`quantity: ${quantity}`)

        expect(rubyItemImg).toHaveAttribute('src', 'ruby.jpg');
        expect(rubyItemName).toHaveTextContent('Ruby Slippers')
        expect(rubyShortDescription).toHaveTextContent(mockData[0].shortDescription)
        expect(rubyPrice).toHaveTextContent(mockData[0].price)
        expect(rubyQuantity).toHaveTextContent(1)

    });

    it('Chocolate Pudding product should be listed on productMainPage ', async () => {
        render(
            <Router>
              <ProductsMainPage products={mockData} />
            </Router>
          );
        const paddingItemImg = screen.getByAltText(mockData[1].name)
        let quantity = mockData[1].id;
        const paddingItemName = await screen.findByText(mockData[1].name)
        const paddingShortDescription = await screen.findByText(mockData[1].shortDescription)
        const paddingPrice = await screen.findByText(mockData[1].price)
        const paddingQuantity = await screen.findByText(`quantity: ${quantity}`)

        expect(paddingItemImg).toHaveAttribute('src', 'pudding.png');
        expect(paddingItemName).toHaveTextContent('Chocolate Pudding')
        expect(paddingShortDescription).toHaveTextContent(mockData[1].shortDescription)
        expect(paddingPrice).toHaveTextContent(mockData[1].price)
        expect(paddingQuantity).toHaveTextContent(2)

    });

    it('Diamond Watch product should be listed on productMainPage ', async () => {
        render(
            <Router>
              <ProductsMainPage products={mockData} />
            </Router>
          );
        const watchItemImg = screen.getByAltText(mockData[2].name)
        let quantity = mockData[2].id;
        const watchItemName = await screen.findByText(mockData[2].name)
        const watchShortDescription = await screen.findByText(mockData[2].shortDescription)
        const watchPrice = await screen.findByText(mockData[2].price)
        const watchQuantity = await screen.findByText(`quantity: ${quantity}`)

        expect(watchItemImg).toHaveAttribute('src', 'DiamondWatch.jpg');
        expect(watchItemName).toHaveTextContent('Diamond Watch')
        expect(watchShortDescription).toHaveTextContent(mockData[2].shortDescription)
        expect(watchPrice).toHaveTextContent(mockData[2].price)
        expect(watchQuantity).toHaveTextContent(3)

    });

    it('Golden Toilet product should be listed on productMainPage ', async () => {
        render(
            <Router>
              <ProductsMainPage products={mockData} />
            </Router>
          );
        const toiletItemImg = screen.getByAltText(mockData[3].name)
        let quantity = mockData[3].id;
        const toiletItemName = await screen.findByText(mockData[3].name)
        const toiletShortDescription = await screen.findByText(mockData[3].shortDescription)
        const toiletPrice = await screen.findByText(mockData[3].price)
        const toiletQuantity = await screen.findByText(`quantity: ${quantity}`)

        expect(toiletItemImg).toHaveAttribute('src', 'GoldenToilet.jpg');
        expect(toiletItemName).toHaveTextContent('Golden Toilet')
        expect(toiletShortDescription).toHaveTextContent(mockData[3].shortDescription)
        expect(toiletPrice).toHaveTextContent(mockData[3].price)
        expect(toiletQuantity).toHaveTextContent(4)

    });

    it('LandYacht product should be listed on productMainPage ', async () => {
        render(
            <Router>
              <ProductsMainPage products={mockData} />
            </Router>
          );
        const landItemImg = screen.getByAltText(mockData[4].name)
        let quantity = mockData[4].id;
        const landItemName = await screen.findByText(mockData[4].name)
        const landShortDescription = await screen.findByText(mockData[4].shortDescription)
        const landPrice = await screen.findByText(mockData[4].price)
        const landQuantity = await screen.findByText(`quantity: ${quantity}`)

        expect(landItemImg).toHaveAttribute('src', 'motorHome.jpg');
        expect(landItemName).toHaveTextContent('Land Yacht MotorHome')
        expect(landShortDescription).toHaveTextContent(mockData[4].shortDescription)
        expect(landPrice).toHaveTextContent(mockData[4].price)
        expect(landQuantity).toHaveTextContent(5)
    });

});