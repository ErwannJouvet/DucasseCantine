import { RangInterface } from "./rang-interface";
import { RestaurantInterface } from "./restaurant-interface";

export interface UserInterface {
id?:number;
nom:string;
prenom:string;
email:string;
password:string;
refreshToken:string;
refreshTokenExpires:string;
rang:RangInterface[];
restaurant:RestaurantInterface[];
}
