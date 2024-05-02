import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true, type: 'String', maxlength: 20, minlength: 1 })
  name: string;

  @Prop({ required: true, max: 9999, min: 1, isNaN: false, type: 'Number' })
  price: number;

  @Prop({ required: true, type: 'String', maxlength: 200, minlength: 1 })
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
