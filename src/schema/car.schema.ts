import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CarDocument = Car & Document;

@Schema()
export class Car {
    @Prop()
    name: string;

    @Prop()
    model: string;

    @Prop()
    createdAt: number;

    @Prop()
    updatedAt: number;

    @Prop()
    deletedAt: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);