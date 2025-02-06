import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let result = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    result = { photo, user };
  } catch (err) {
    result = { photo: null, user: null };
  }
  return result;
}

export default asyncUploadUser;
