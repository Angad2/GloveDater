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

export function oppositeUserTypeListing(genderType: string) {
    let gender = genderType === 'Man' ? 'Woman' : 'Man'
    return apiClient.get(`${ApiConfig.OPPOSITE_USER_TYPE_LISTING}?Gender=${gender}`);
}
export function getOppositeUserByCountry(genderType: string) {
    let gender = genderType === 'Man' ? 'Woman' : 'Man'
    return apiClient.get(`${ApiConfig.GET_USER_LIST_BY_COUNTRY}?Gender=${gender}`);
}
export interface LabeledValue {
    gender: string;
    latitude: number;
    longitude: number
  }
export function oppositeUserTypeListingNearBy(genderType: LabeledValue) {
    const {gender,latitude,longitude} = genderType  
    let type = gender === 'Man' ? 'Woman' : 'Man'
    return apiClient.get(`${ApiConfig.OPPOSITE_USER_LIST_NEAR_BY}?Gender=${type}&latitude=${latitude}&longitude=${longitude}`);
}

export function favouriteController(userId: string) {
    return apiClient.get(`${ApiConfig.FAVOURITE_CONTROLLER}?userId=${userId}`);
}

export function getGalleryPhots(userId: string,header: any) {
    return apiClient.get(`${ApiConfig.GETPHOTO}/${userId}`,header);
}

export function locationUpdate(location: any) {
    return apiClient.put(`${ApiConfig.UPDATE_LOCATION}`,location);
}