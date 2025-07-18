export function getCookie(name: string) {
  if (typeof document === 'undefined') return null; // если не в браузере
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`
    )
  );
  return matches ? decodeURIComponent(matches[1]) : null;
}

// знаю что так нельзя, на api нету HttpOnly XD)
