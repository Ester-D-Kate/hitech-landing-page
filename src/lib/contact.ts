export const businessEmail = "hitechstructure.co@gmail.com"

const whatsappDestination = "918567009377"

export function createWhatsAppUrl(message: string): string {
  return "https://wa.me/" + whatsappDestination + "?text=" + encodeURIComponent(message)
}

export const generalWhatsAppUrl = createWhatsAppUrl(
  "Hello HITECH Structure & Construction. I would like to discuss a project.",
)
