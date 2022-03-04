import axios from 'axios';
import { apiClient } from './client';
import ApiConfig from '../config/api-config';

export function loginUser(Email: string, Password: string) {
    return apiClient.post(ApiConfig.LOGIN, { Email, Password });
}
export function emailCheck(Email: string) {
    return apiClient.post(ApiConfig.EMAILCHECK, { Email });
}
export function signUpUser(Email: string, Password: string, User_name: string, Gender: string, Looking_to_date_a: string, Country: string, City: string, Intent_option: string, Age: string, Body: string, Height: string, Hair: string, Ethnicity: string, Intent: string, About_me: string, Looking_for: string, Favorite_travel_spot: string, Favorite_restaurnt: string, Future_dream_experience: string, Photo: string) {
    return apiClient.post(ApiConfig.SIGNUP, { Email, Password, User_name, Gender, Looking_to_date_a, Country, City, Intent_option, Age, Body, Height, Hair, Ethnicity, Intent, About_me, Looking_for, Favorite_travel_spot, Favorite_restaurnt, Future_dream_experience, Photo });
}

export function getUser(userId: string) {
    return apiClient.post(ApiConfig.GETUSER, { userId });
}

export function GalleryPhoto(User_id: string, UserPhotos: string, Image_name: string) {
    return apiClient.post(ApiConfig.GETPHOTO, { User_id, UserPhotos, Image_name })
}
