import dbConnect from "../db/db";
import caseStudy from "../models/caseStudy";

export const getCaseStudy = async (id) => {
  try {
    await dbConnect();

    if (!id) {
      return null;
    }


    const caseInfoSingle = await caseStudy.findById(id);

    return caseInfoSingle;
  } catch (error) {
    return null;
  }
};
