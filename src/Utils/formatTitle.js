export const formatTitle = (str) => {
  if (!str) return "";

  // 1️⃣ Replace underscores & camelCase with spaces
  const formatted = str
    .replace(/_/g, " ") // Replace underscores
    .replace(/([a-z])([A-Z])/g, "$1 $2") // coWorking → co Working
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2") // BFSISector → BFSI Sector
    .trim();

  // 2️⃣ Capitalize properly but preserve acronyms (e.g., BFSI)
  return formatted
    .split(" ")
    .map((word) => {
      // Keep fully uppercase words (acronyms) untouched
      if (word === word.toUpperCase() && word.length > 1) return word;
      // Capitalize normal words
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
