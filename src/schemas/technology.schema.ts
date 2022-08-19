import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TechnologyDocument = Technology & Document;

class Tech {
  @Prop({ required: true })
  technologyName: string;

  @Prop({ required: true })
  image?: string;
}

@Schema()
export class Technology {
  @Prop({ required: true })
  technologyType: string;

  @Prop()
  technology?: Array<Tech>;
}

export const TechnologySchema = SchemaFactory.createForClass(Technology);