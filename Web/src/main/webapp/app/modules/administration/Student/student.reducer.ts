import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import {log} from "react-jhipster";

export const ACTION_TYPES = {
  CREATE_ACCOUNT: 'register/CREATE_ACCOUNT',
  RESET: 'register/RESET',
  GET_STUDENT: 'student/GET_STUDENT',
  GET_STUDENT_OUT: 'student/GET_STUDENT_OUT',
  SAVE_STUDENT: 'student/SAVE_STUDENT',
  DELETE_STUDENT: 'student/DELETE_STUDENT',
};

const initialState = {
  loading: false,
  registrationSuccess: false,
  registrationFailure: false,
  errorMessage: null,
  listStudent: {} as any,
  listStudentOut:{} as any,
};

export type StudentState = Readonly<typeof initialState>;

// Reducer
export default (state: StudentState = initialState, action): StudentState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.CREATE_ACCOUNT):
    case REQUEST(ACTION_TYPES.GET_STUDENT):
    case REQUEST(ACTION_TYPES.SAVE_STUDENT):
    case REQUEST(ACTION_TYPES.DELETE_STUDENT):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.CREATE_ACCOUNT):
    case FAILURE(ACTION_TYPES.GET_STUDENT):
    case REQUEST(ACTION_TYPES.SAVE_STUDENT):
    case REQUEST(ACTION_TYPES.DELETE_STUDENT):
      return {
        ...initialState,
        registrationFailure: true,
        errorMessage: action.payload.response.data.errorKey,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ACCOUNT):
      return {
        ...initialState,
        registrationSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.GET_STUDENT):
      return {
        ...initialState,
        listStudent: action.payload.data,
      }

    case SUCCESS(ACTION_TYPES.SAVE_STUDENT):
      return {
        ...initialState,
        listStudent: action.payload.data,
      }

    case SUCCESS(ACTION_TYPES.DELETE_STUDENT):
      return {
        ...initialState,
        listStudent: action.payload.data,
      }

    case SUCCESS(ACTION_TYPES.GET_STUDENT_OUT):
      return {
        ...initialState,
        listStudentOut: action.payload.data,
      }

    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Actions
export const handleRegister = (login, email, password, langKey = 'en') => ({
  type: ACTION_TYPES.CREATE_ACCOUNT,
  payload: axios.post('api/register', { login, email, password, langKey }),
  meta: {
    successMessage: '<strong>Registration saved!</strong> Please check your email for confirmation.',
  },
});

// load sinh viên
export const getStudent = async () => ({
  type: ACTION_TYPES.GET_STUDENT,
  payload: await axios.get('api/getAllStudent'),
});

export const getAllStudentWithOutTeacher = async () => ({
  type: ACTION_TYPES.GET_STUDENT_OUT,
  payload: await axios.get('api/getAllStudentWithOutTeacher'),
});

export const saveStudent = async (values) => ({
  type: ACTION_TYPES.SAVE_STUDENT,
  payload: await axios.post('api/saveStudent',values),
});

export const removeStudent = async (values) => ({
  type: ACTION_TYPES.DELETE_STUDENT,
  payload: await axios.post('api/removeStudent',values),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
