export default interface MessageProps {
  sender: string;
  message: string;
  time: Date;
  isMessageOwner: boolean;
}
