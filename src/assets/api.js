const baseURL = "https://10ea-105-165-184-2.ngrok-free.app";

const health = `${baseURL}/ping`;
const getMusic = `${baseURL}/api/v1/music/get/`;
const signUp = `${baseURL}/api/v1/users/create`;
const login = `${baseURL}/api/v1/users/signin`;
const stream = `${baseURL}/api/v1/music/mp3/stream`;

export { baseURL, health, signUp, login, getMusic, stream };
