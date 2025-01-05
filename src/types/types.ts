export interface UserData {
  name: string;
  phoneNumber: string;
  address: string;
  photoUrl: string;
}

export interface QRResponse {
  qrCode: string;
  error?: string;
  userId: string;
}