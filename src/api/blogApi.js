import axiosClient from 'utils/axios';

const endPoint = '/blogs';

export default {
  async getBlogs() {
    const response = await axiosClient.get(endPoint);

    return response;
  },
};
