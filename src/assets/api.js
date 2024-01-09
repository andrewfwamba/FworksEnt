const baseURL = "http://localost:8000";

const health = `${baseURL}/ping`;
const getMusic = `${baseURL}/api/get/music/all/`;
const signUp = `${baseURL}/api/v1/users/create`;
const login = `${baseURL}/api/v1/users/signin`;
const stream = `${baseURL}/api/v1/music/mp3/stream`;

export { baseURL, health, signUp, login, getMusic, stream };
