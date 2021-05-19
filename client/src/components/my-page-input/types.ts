export default interface MyPageInputProps {
    label: string;
    type: string;
    placeholder?: string;
    text?: string;
    checkInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  