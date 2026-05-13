export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '+49 $1 $2 $3')
}