import {
    ACCOUNTS_LOGIN_REQUEST,
    ACCOUNTS_LOGIN_SUCCESS,
    ACCOUNTS_LOGIN_FAIL,
    ACCOUNTS_LOGOUT,
    ACCOUNTS_REGISTER_REQUEST,
    ACCOUNTS_REGISTER_SUCCESS,
    ACCOUNTS_REGISTER_FAIL,
    ACCOUNTS_VERIFY_OTP_REQUEST,
    ACCOUNTS_VERIFY_OTP_SUCCESS,
    ACCOUNTS_VERIFY_OTP_FAIL,
    ACCOUNTS_RESEND_OTP_REQUEST,
    ACCOUNTS_RESEND_OTP_SUCCESS,
    ACCOUNTS_RESEND_OTP_FAIL,
   } from "../constants/accountsConstants";
 
   export const accountsLoginReducer = (state = {}, action) => {
     switch (action.type) {
       case ACCOUNTS_LOGIN_REQUEST:
         return { loading: true };
       case ACCOUNTS_LOGIN_SUCCESS:
         return { loading: false, ACCOUNTSInfo: action.payload };
       case ACCOUNTS_LOGIN_FAIL:
         return { loading: false, error: action.payload };
       case ACCOUNTS_LOGOUT:
         return {};
       default:
         return state;
     }
   };
   
   export const accountsRegisterReducer = (state = {}, action) => {
     switch (action.type) {
       case ACCOUNTS_REGISTER_REQUEST:
         return { loading: true };
       case ACCOUNTS_REGISTER_SUCCESS:
         return { loading: false, ACCOUNTSInfo: action.payload };
       case ACCOUNTS_REGISTER_FAIL:
         return { loading: false, error: action.payload };
       case ACCOUNTS_LOGOUT:
         return {};
       default:
         return state;
     }
   };
   
   export const accountsVerifyOTPReducer = (state = {}, action) => {
     switch (action.type) {
       case ACCOUNTS_VERIFY_OTP_REQUEST:
         return { loading: true };
       case ACCOUNTS_VERIFY_OTP_SUCCESS:
         return { loading: false, ACCOUNTSInfo: action.payload };
       case ACCOUNTS_VERIFY_OTP_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };
   
   export const accountsResendOtpReducer = (state = {}, action) => {
     switch (action.type) {
       case ACCOUNTS_RESEND_OTP_REQUEST:
         return { loading: true };
       case ACCOUNTS_RESEND_OTP_SUCCESS:
         return { loading: false, ACCOUNTSInfo: action.payload };
       case ACCOUNTS_RESEND_OTP_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };