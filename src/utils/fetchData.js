import axios from "axios";

//Function that fetches data using an api url and returns the response data
export const fetchData = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
