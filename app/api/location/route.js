import { getLocatios } from "./loction-util";

export async function GET() {
  const locations = getLocatios();
  return Response.json(locations);
}
