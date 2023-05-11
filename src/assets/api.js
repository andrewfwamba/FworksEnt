const baseURL = "http://192.168.43.187:6060";

const health = `${baseURL}/ping`;
const getMusic = `${baseURL}/api/v1/music/get/`;
const signUp = `${baseURL}/api/v1/users/create`;
const login = `${baseURL}/api/v1/users/signin`;
const stream = `${baseURL}/api/v1/music/mp3/`;

export { baseURL, health, signUp, login, getMusic, stream };
