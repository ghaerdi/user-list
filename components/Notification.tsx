interface Props {
  message: string;
}

export default function Notification({ message }: Props) {
  return (
    <span className="fixed bottom-5 left-5 bg-red-200 p-3 rounded text-red-900 border border-red-900">{message}</span>
  );
}
