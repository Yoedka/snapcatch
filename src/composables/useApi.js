import axios from "axios";
import { ref } from "vue";
const baseUrl = import.meta.env.VITE_API_URL;

export const useApi = () => {
  const isLoading = ref(false);
  const error = ref(null);
  const data = ref([]);

  const getData = async (url, contentUrl) => {
    isLoading.value = true;
    try {
      const response = await axios.post(baseUrl + url, {
        method: "POST",
        headers: {
          accept: "Application/JSON",
          "content-type": "application/x-www-form-urlencoded",
        },
        url: contentUrl,
      });
      data.value = response.data.data;
    } catch (err) {
      error.value = err;
      throw new Error(err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    error,
    data,
    getData,
  };
};
