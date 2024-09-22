import mongoose, { Schema } from "mongoose";
import { ProductCollection, ProductSize, Productvolume } from "../libs/enums/product.enum";
import { ProductStatus } from "../libs/enums/product.enum";


const productSchema = new Schema(
    {
        productStatus: {
            type: String,
            enum: ProductStatus,
            default: ProductStatus.PAUSE,
        },

        ProductCollection: {
            type: String,
            enum: ProductCollection,
            required: true,
        },
        productName: {
            type: String,
            required: true,
        },
        productPrize: {
            type: Number,
            required: true,
        },

        productLeftCount: {
            type: Number,
            required: true,
        },

        productSize: {
            type: String,
            enum: ProductSize,
            default: ProductSize.NORMAL
        },

        productvolume: {
            type: String,
            enum: Productvolume,
            default: Productvolume.ONE,
        },
        
        productDesc: {
            type: String,
            required: true,
        },

        productImages: {
            type: [String],
            default: [],
        },

        productView: {
            type: Number,
            default: 0,
        },
    },
{ timestamps: true } // qachon updatedAT, createdAd boganini aniqlaydi timesstamps
);

productSchema.index(
    { productName: 1, productSize: 1, productVolume: 1 },
    { unique: true } 
 );

export default mongoose.model("Product", productSchema);