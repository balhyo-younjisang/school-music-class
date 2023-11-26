export interface IUserInput {
  email: string;
  password: string;
}

export interface IUserInputData {
  placeholder: string;
  value: string;
  onChangeTextHandler: (text: string) => void;
  isPassword: boolean;
}
