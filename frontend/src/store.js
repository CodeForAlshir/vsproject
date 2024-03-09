import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { accountsLoginReducer, accountsRegisterReducer, accountsResendOtpReducer, accountsVerifyOTPReducer } from './reducer/accountsReducer';



const reducer = combineReducers({
    accountLogin: accountsLoginReducer,
    accountRegister: accountsRegisterReducer,
    accountVerify: accountsVerifyOTPReducer,
    accountResend: accountsResendOtpReducer,
});


const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});


export default store;



