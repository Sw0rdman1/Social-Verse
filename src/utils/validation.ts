export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): string => {
  if (password.length < 8) {
    return "Must contain at least 8 characters";
  }
  const regex1 = /\d/; // Regular expression to match a digit
  if (!regex1.test(password)) {
    return "Must contain at least 1 number";
  }
  const regex2 = /[A-Z]/; // Regular expression to match an uppercase character
  if (!regex2.test(password)) {
    return "Must contain at least 1 uppercase letter";
  }
  return "";
};
