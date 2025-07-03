export const validationInput = (inputValue: string) => {
  const emptyValue = inputValue.trim().length <= 0;

  if (emptyValue) {
    return "Name must not be empty";
  }

  const hasCorrectValue = /^[A-Za-zА-Яа-яЁё\s]+$/.test(inputValue.trim());

  if (!hasCorrectValue) {
    return "Name must contain only letters and spaces";
  }

  return "";
};
