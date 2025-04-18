"use server";
import qs from "qs";
import { cookies } from "next/headers";
import { unstable_noStore as noStore } from "next/cache";

const query = qs.stringify({
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
    },
  });

const getEventDetailsByIdLoader = async (id: string) => {
  const authToken = cookies().get("jwt")?.value;
  
const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };


  noStore();
  const url = query
    ? `${process.env.STRAPI_URL}/api/events/${id}?${query}`
    : `${process.env.STRAPI_URL}/api/events/${id}`;

  try {
    const response: any = await fetch(url, options);
    const data = await response.json();
    const event = data.data;
    if (response.ok && event) {
      return { data: event, ok: true };
    } else return { error: data.error, ok: false };
  } catch (error) {
    console.log(error);
  }
};

export default getEventDetailsByIdLoader;
