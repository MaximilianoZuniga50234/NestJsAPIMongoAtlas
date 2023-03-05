import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Res,
  Body,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  async getProducts(@Res() res) {
    try {
      const products = await this.productService.getProducts();
      return res.status(HttpStatus.OK).json({
        message: 'Success',
        products,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error',
      });
    }
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id: number) {
    try {
      const product = await this.productService.getProduct(id.toString());
      return res.status(HttpStatus.OK).json({
        message: 'Success',
        product,
      });
    } catch (NotFoundException) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Product not found',
      });
    }
  }

  @Post('create')
  async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    try {
      const product = await this.productService.createProduct(createProductDto);
      return res.status(HttpStatus.OK).json({
        message: 'Success',
        product,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error',
      });
    }
  }

  @Put('/update')
  async updateProduct(
    @Res() res,
    @Query('id') id: number,
    @Body() updateProductDto: CreateProductDto,
  ) {
    try {
      const product = await this.productService.updateProduct(
        id.toString(),
        updateProductDto,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Success',
        product,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error',
      });
    }
  }

  @Delete()
  async deleteProduct(@Res() res, @Query('id') id) {
    try {
      const product = await this.productService.deleteProduct(id.toString());
      return res.status(HttpStatus.OK).json({
        message: 'Success',
        product,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error',
      });
    }
  }
}
