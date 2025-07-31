export function getTimeText(timestamp: string | number): string {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    return "at an unknown time";
  }
  const now = Date.now();
  const diff = now - date.getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 1) {
    return "just now";
  }
  if (seconds < 60) {
    return `${seconds} secs ago`;
  }
  if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} mins ago`;
  }
  if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)} hrs ago`;
  }
  if (seconds < 604800) {
    return `${Math.floor(seconds / 86400)} days ago`;
  }
  if (seconds < 2592000) {
    return `${Math.floor(seconds / 604800)} weeks ago`;
  }
  if (seconds < 31536000) {
    return `${Math.floor(seconds / 2592000)} months ago`;
  }
  return `${Math.floor(seconds / 31536000)} years ago`;
}
