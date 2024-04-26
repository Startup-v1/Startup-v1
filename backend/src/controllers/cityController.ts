//TODO: Should we use lean?
import { Request, Response } from "express";
const City = require("../models/City");

export const getCities = async (req: Request, res: Response) => {
  try {
    //FIXME REMOVE LIMIT
    const cities = await City.find().limit(15);

    if (cities?.length > 0) {
      return res.status(200).json(cities);
    }

    return res.status(404).json({ message: "No cities found" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error' });
  }
};