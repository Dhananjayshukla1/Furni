import { put, takeLatest } from "redux-saga/effects";
import { ADD_CATEGORY_START, GET_CATEGORY_START } from "../constant/Category.constant";
import { addCategoryToAPI, getCategoryFromAPI } from "../service/category.service";
import { getCategorySuccess } from "../action/Category.action";

function* getCategory({payload}){
  let Categories= yield getCategoryFromAPI()
  yield put(getCategorySuccess(Categories))
  
}
function* addCategory({payload}){
  yield addCategoryToAPI(payload)
  
}
export default function* Category(){
  yield takeLatest(GET_CATEGORY_START,getCategory)
  
  yield takeLatest(ADD_CATEGORY_START,addCategory)

}