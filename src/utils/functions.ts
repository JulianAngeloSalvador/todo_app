export function capitalizeFirstChar(text: string) {
  const formattedText = text.charAt(0).toUpperCase() + text.slice(1);

  return formattedText;
}
