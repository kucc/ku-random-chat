export default interface SignUpInputProps {
  label: string;
  type: string;
  placeholder?: string;
  text?: string;
  checkInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}
