import api from "./api";

/**
 * Get user profile
 */

export const getUser = async (username) => {
    const response = await api.get(`/users/${username}`);
    return response.data;
};


/**
 * Get user recent events
 */

export const getUserEvents = async (username) => {
    const response = await api.get(`/users/${username}/events`);
    return response.data;
};

/**
 * Get user repositories
 */

export const getUserRepos = async (username) => {
    const response = await api.get(`/users/${username}/repos`);
    return response.data;
}

