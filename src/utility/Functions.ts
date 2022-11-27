export function newTab(url: string): void {
  const newWindow = window.open(url, "_blank", "noopener, noreferrer");
  if (newWindow) newWindow.opener = null;
}
