export interface User {
  uuid?: string;
  lastName?: string;
  name?: string;
  phone: PhoneData;
  roleIdes?: Role[];
  lastActivity: string;
  isActive: boolean;
  email?: string;
  imgUuid?:string
}
export interface Role {
  roleName: string;
}
export interface PhoneData {
  phoneNumber: string;
  prefix: string;
}
