import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './product.model';
import { getModelToken } from '@nestjs/mongoose';

describe('ProductController', () => {
  let app: TestingModule;
  let productService;

  const mockProductModel = {
    // Provide mock implementations for methods used by ProductService
    findById: jest.fn(),
    find: jest.fn(),
    save: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        { provide: getModelToken(Product.name), useValue: mockProductModel },
      ],
    }).compile();
    productService = app.get(ProductService);
  });

  it('Should find by id', async () => {
    expect(productService).toBeDefined();
    const appController = app.get(ProductController);
    const mockProduct = {
      id: '1',
      name: 'Mock Product',
      description: 'Mocked Product',
      price: 10.0,
    };
    mockProductModel.findById.mockResolvedValue(mockProduct);
    const result: Product = await appController.findOne('1');
    expect(result.name).toBe('Mock Product');
    expect(result.price).toBe(10.0);
  });

  it('Should find All', async () => {
    expect(productService).toBeDefined();
    const appController = app.get(ProductController);
    const mockProducts = [
      {
        id: '1',
        name: 'Mock Product',
        description: 'Mocked Product',
        price: 10.0,
      },
      {
        id: '2',
        name: 'Mock Product 2',
        description: 'Mocked Product 22',
        price: 20.0,
      },
    ];
    mockProductModel.find.mockResolvedValue(mockProducts);
    const result: Array<Product> = await appController.findAll();
    expect(result).toBeDefined();
    expect(result.length).toBe(2);
  });
});
