export const rgbToHex = (rgb: string) => {
  const match = rgb.match(/\d+/g); // Extract numbers from RGB format
  if (!match || match.length < 3) return rgb; // Ensure we have at least R, G, B values

  return `#${match
    .slice(0, 3) // Use only first 3 values (ignore alpha if present)
    .map((x) => {
      const hex = parseInt(x, 10).toString(16); // Convert to hex
      return hex.length === 1 ? "0" + hex : hex; // Ensure two-digit hex values
    })
    .join("")}`;
};
