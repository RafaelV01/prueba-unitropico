export interface Semester {
  id: number;
  name: string;
  subjects: string[];
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  message?: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}