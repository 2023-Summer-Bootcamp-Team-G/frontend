import { baseInstance } from '../apis/config';

export const getImages = async (taskId: string) => {
  try {
    while (true) {
      const response = await baseInstance.get(`/characters/urls/${taskId}`);
      const statusCode = response.status;

      if (statusCode === 202) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else if (statusCode === 200) {
        return response.data;
      } else {
        throw new Error(`Failed to fetch URLs. Status code: ${statusCode}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const isLoggedIn = (): boolean => {
  const ls = JSON.parse(localStorage.getItem('user') || 'null');
  return ls && ls.state && ls.state.userId;
};

export const getCharactersParams = (creatorId: string | undefined) => {
  return creatorId ? { user_id: creatorId } : {};
};


