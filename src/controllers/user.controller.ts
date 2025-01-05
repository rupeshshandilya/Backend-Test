import { Request, RequestHandler, Response } from "express";
import { QRResponse, UserData } from "../types/types";
import { User } from "../models/user";
import QRCode from "qrcode";

const generateQr: RequestHandler = async (
  req: Request<{}, {}, UserData>,
  res: Response<QRResponse>
) => {
  try {
    const userData = req.body;
    const user = new User(userData);

    await user.save();

    const qrData = JSON.stringify({
      userId: user._id.toString(),
      ...userData,
    });

    const qrCode = await QRCode.toDataURL(qrData);
    res.status(200).json({
      qrCode,
      userId: user._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message } as QRResponse);
  }
};

const decodeQr: RequestHandler = async (
  req: Request,
  res: Response<UserData | { error: string }>
) => {
  try {
    const { id } = req.params;
    console.log("Received ID:", id);
    const user = await User.findById(id);

    if (!user) {
      res.status(401).json({
        error: "User not exist",
      });
      return;
    }

    const userResponse: UserData = {
      name: user.name,
      phoneNumber: user.phoneNumber,
      address: user.address,
      photoUrl: user.photoUrl,
    };

    res.status(200).json(userResponse);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export { generateQr, decodeQr };
