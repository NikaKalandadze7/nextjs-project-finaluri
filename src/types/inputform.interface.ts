export default interface InputFormInterface {
  label: string;
  type: string;
  maxLength: number;
  handleChange: (value: string) => void;
}
