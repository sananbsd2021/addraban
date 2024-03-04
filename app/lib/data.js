import { Product, Product2, User, Palad, Saraban } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];


export const fetchProducts2 = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Product2.find({ title: { $regex: regex } }).count();
    const products2 = await Product2.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products2 };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products2!");
  }
};

export const fetchProduct2 = async (id) => {
  try {
    connectToDB();
    const product2 = await Product2.findById(id);
    return product2;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product2!");
  }
};


export const fetchPalads = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Palad.find({ title: { $regex: regex } }).count();
    const palads = await Palad.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, palads };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch palads!");
  }
};

export const fetchPalad = async (id) => {
  try {
    connectToDB();
    const palad = await Palad.findById(id);
    return palad;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch palad!");
  }
};

// Fetch Saraban
export const fetchSarabans = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Saraban.find({ title: { $regex: regex } }).count();
    const sarabans = await Saraban.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, sarabans };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch sarabans!");
  }
};

export const fetchSaraban = async (id) => {
  try {
    connectToDB();
    const saraban = await Saraban.findById(id);
    return saraban;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Saraban!");
  }
};