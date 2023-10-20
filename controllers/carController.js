const { Car } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");

const createCar = async (req, res, next) => {
  try {
    const { name, price, type } = req.body;

    const car = await Car.findOne({
      where: {
        name,
      },
    });
    if (car) {
      next(new ApiError("Car already exist", 400));
    } else {
      const file = req.file;
      let img;
      if (file) {
        // dapatkan extension file nya
        const split = file.originalname.split(".");
        const extension = split[split.length - 1];

        // upload file ke imagekit
        const uploadedImage = await imagekit.upload({
          file: file.buffer,
          fileName: `IMG-${Date.now()}.${extension}`,
        });
        img = uploadedImage.url;
      }

      await Car.create({
        name,
        price,
        stock,
        imageUrl: img,
        userId: req.user.id,
      });
    }
    res.status(200).json({
      status: "Success",
      data: {
        newCar,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createCar,
};
