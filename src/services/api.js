
  
const axios = require('axios');

export async function getAllRobots() {

    const response = await axios.get('/api/robots');
    return response.data;
}

export async function createRobot(data) {
    const response = await axios.post(`/api/robot`, {robot: data});
    return response.data;
}