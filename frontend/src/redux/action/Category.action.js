import {
  ADD_CATEGORY_ERROR,
  ADD_CATEGORY_START,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
} from "../constant/Category.constant";

export const getCategoryStart = () => ({
  type: GET_CATEGORY_START,
});
export const getCategorySuccess = (categories) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: categories,
});
export const getCategoryERROR = (error) => ({
  type: GET_CATEGORY_ERROR,
  payload: error,
});

export const addCategoryStart = (category) => ({
  type: ADD_CATEGORY_START,
  payload: category,
});
export const addCategorySuccess = (category) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: category,
});
export const addCategoryERROR = (error) => ({
  type: ADD_CATEGORY_ERROR,
  payload: error,
});
