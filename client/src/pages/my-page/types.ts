export interface mypageAction {
    type: 'newpassword' | 'confirmpassword';
    payload: string;
}