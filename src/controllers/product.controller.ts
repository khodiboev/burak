import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();

const productController: T = {};

/** SPA */

/** SSR */

// productController objectining getAllProducts methodi, req va res parametrlarini qabul qiladi.
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();

    // products nomli view ni render qiladi va unga data ni uzatadi.
    res.render("products", { products: data });
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json({ err });
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};


// productController objectining createNewProduct methodi, req va res parametrlarini qabul qiladi.
productController.createNewProduct = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("createNewProduct");
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);

    // Agar rasm yuklanmagan bo'lsa, xatolik xabarini qaytaradi.
    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    // req.body dan ma'lumotlarni oladi va productImages maydonini req.files dan olingan rasm yo'llari bilan to'ldiradi.
    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path.replace(/\\/g, "/");
    });

    // productService ning createNewProduct metodini chaqiradi va unga data ni uzatadi.
    await productService.createNewProduct(data);
    res.send(
      `<script>alert("Product created successfully!"); window.location.replace('/admin/product/all') </script>`,
    );
  } catch (err) {
    console.log("Error, createNewProduct", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('/admin/product/all') </script>`,
    );
  }
};

// productController objectining updateChosenProduct methodi, req va res parametrlarini qabul qiladi.
productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    // productId ni req.params.id dan oladi va productService ning updateChosenProduct metodini chaqiradi va unga productId va req.body ni uzatadi.
    console.log("updateChosenProduct");
    const productId = req.params.id;

    const result = await productService.updateChosenProduct(
      productId,
      req.body,
    );

    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json({ err });
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
