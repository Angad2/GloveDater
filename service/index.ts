import axios from 'axios';
import { apiClient } from './client';
import ApiConfig from '../config/api-config';

export function loginUser(email: string, password: string) {
    return apiClient.post(ApiConfig.LOGIN, { email, password });
}

export function signUpUser(Email: string, Password: string, user_name: string, Gender: string, Looking_to_date_a: string, Country: string, City: string, Intent_option: string, Age: string, Body: string, Height: string, Hair: string, Ethnicity: string, Intent: string, About_me: string, Looking_for: string, Favorite_travel_spot: string, Favorite_restaurnt: string, Future_dream_experience: string, Photo: string) {
    return apiClient.post(ApiConfig.SIGNUP, { Email, Password, user_name, Gender, Looking_to_date_a, Country, City, Intent_option, Age, Body, Height, Hair, Ethnicity, Intent, About_me, Looking_for, Favorite_travel_spot, Favorite_restaurnt, Future_dream_experience, Photo });
}

export function getUser(userId: string) {
    return apiClient.post(ApiConfig.GETUSER, { userId });
}