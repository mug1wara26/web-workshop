import {getUser} from "@/api/api";

async function main(): Promise<string> {
  const name = "mug1wara26";
  return await getUser(name);
}

export default {
  main
};
