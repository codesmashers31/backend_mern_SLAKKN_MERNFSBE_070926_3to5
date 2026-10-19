export function read(key, fallback = null) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}
export const currentUser = () => read('isActive')
export async function digest(password, salt) {
 const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits'])
 const bits = await crypto.subtle.deriveBits({name:'PBKDF2', salt:new TextEncoder().encode(salt), iterations:100000, hash:'SHA-256'}, key, 256)
 return Array.from(new Uint8Array(bits), b => b.toString(16).padStart(2,'0')).join('')
}
