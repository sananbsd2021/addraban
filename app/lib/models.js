import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const product2Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    desc2: {
      type: String,
      required: true,
    },    
    desc3: {
      type: String,
      required: true,
    },    
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);    

const paladSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      min: 0,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);    

const sarabanSchema = new mongoose.Schema(
  {
    // sanum: {
    //   type: Number,
    //   required: true,
    //   min: 0,
    // },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    desc2: {
      type: String,
      required: true,
    },    
    desc3: {
      type: String,
      required: true,
    },    
    // desc4: {
    //   type: String,
    //   required: true,
    // },  
  },
  { timestamps: true }
);    

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export const Product2 =
  mongoose.models.Product2 || mongoose.model("Product2", product2Schema);
export const Palad =
  mongoose.models.Palad || mongoose.model("Palad", paladSchema);
  export const Saraban =
  mongoose.models.Saraban || mongoose.model("Saraban", sarabanSchema);
