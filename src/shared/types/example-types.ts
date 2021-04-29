export interface FormExampleState {
  firstName: string;
  lastName: string;
  gender: string;
  favorites: string[];
  formValues: { [key: string]: string | string[] };
}
