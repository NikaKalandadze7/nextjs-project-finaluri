export default interface UserInfoInterface {
  id: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string | number;
  verified: boolean;
  role: string;
  refresh_token: string;
}
