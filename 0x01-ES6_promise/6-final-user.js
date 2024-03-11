#!/usr/bin/node
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((result) => ({
    status: result.status,
    value: result.reason || result.value,
  })));
}

export default handleProfileSignup;
