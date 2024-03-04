"use server";

import { revalidatePath } from "next/cache";
import { Product, Product2, User, Palad, Saraban } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};

// Add Product2

export const addProduct2 = async (formData) => {
  const { title, desc, desc2 , desc3, price, stock } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct2 = new Product2({
      title,
      desc,
      desc2,
      desc3,
      price,
      stock,
    });

    await newProduct2.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product2!");
  }

  revalidatePath("/dashboard/palads");
  redirect("/dashboard/palads");
};

// Update Product2
export const updateProduct2 = async (formData) => {
  const { id, title, desc, desc2, desc3, price, stock } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      desc2,
      desc3,
      price,
      stock,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product2.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update palads!");
  }

  revalidatePath("/dashboard/palads");
  redirect("/dashboard/palads");
};


export const deleteProduct2 = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product2.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete palad!");
  }

  revalidatePath("/dashboard/palads");
};

export const addPalad = async (formData) => {
  const { number, title, desc } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newPalad = new Palad({
      number,
      title,
      desc,
    });

    await newPalad.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create palad!");
  }

  revalidatePath("/dashboard/palads");
  redirect("/dashboard/palads");
};


export const updatePalad = async (formData) => {
  const { id, number, title, desc } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      number,
      title,
      desc,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Palad.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update palad!");
  }

  revalidatePath("/dashboard/palads");
  redirect("/dashboard/palads");
};

export const deletePalad = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Palad.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete palad!");
  }

  revalidatePath("/dashboard/palads");
};

// Add Saraban
export const addSaraban = async (formData) => {
  const { title, desc, desc2, desc3 } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newSaraban = new Saraban({
      title,
      desc,
      desc2,
      desc3,
    });

    await newSaraban.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Saraban!");
  }

  revalidatePath("/dashboard/sarabans");
  redirect("/dashboard/sarabans");
};

// Update Saraban
export const updateSaraban = async (formData) => {
  const { id, title, desc, desc2, desc3 } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      desc2,
      desc3,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Saraban.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Saraban!");
  }

  revalidatePath("/dashboard/sarabans");
  redirect("/dashboard/sarabans");
};

// Delete Saraban
export const deleteSaraban = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Saraban.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Saraban!");
  }

  revalidatePath("/dashboard/sarabans");
};