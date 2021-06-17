import dotenv from "dotenv";
dotenv.config({path: __dirname + "/.env"});
import {User} from "@/types/user";

const token = process.env.TOKEN;

export async function getUser(username: string): Promise<string> {
  return token + "";
  // return await (await fetch(
  //   "https://lichess.org/api/account", {
  //     headers: {
  //       "Authorization": "Bearer " + token
  //     }
  //   })).json();
}
