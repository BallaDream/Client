import { axiosInstance } from '../axiosInstance';

export const postUpload = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await axiosInstance.post('/analyze', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(data);
  return data;
};
