export interface signInAction {
  type: 'userId' | 'password';
  payload: string;
}
