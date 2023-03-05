import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interface/product.interface';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async getProduct(id: string): Promise<Product> {
    return await this.productModel.findById(id);
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return await new this.productModel(createProductDto).save();
  }

  async updateProduct(
    id: string,
    updateProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
