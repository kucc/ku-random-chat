export default interface InfoInputProps {
    label: string;
    placeholder?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}