import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  const userPromise = signUpUser(firstName, lastName)
    .then((result) => ({
      status: 'fulfilled',
      value: result,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error,
    }));

  const photoPromise = uploadPhoto(fileName)
    .then(() => ({
      status: 'fulfilled',
      value: `Photo ${fileName} uploaded successfully`,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error,
    }));

  promises.push(userPromise, photoPromise);

  return Promise.allSettled(promises);
}
