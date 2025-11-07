export const formatTitle = (str) => {
  if (!str) return "";

  // Insert space before capital letters & capitalize words
  const formatted = str
    .replace(/([a-z])([A-Z])/g, "$1 $2")     // → "coWorkingSpaces" → "co Working Spaces"
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // handle double capitals
    .replace(/([a-zA-Z])([0-9])/g, "$1 $2")   // space before numbers if any
    .trim();

  // Capitalize first letter of every word
  return formatted
    .split(" ")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};
