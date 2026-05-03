import { defineEventHandler, getRequestURL, sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  const host = url.host

  // Dominios que queremos redirigir
  const domainsToRedirect = [
    '2s1mrentcar.com',
    'www.2s1mrentcar.com',
    'rentcartetouan.com',
    'www.rentcartetouan.com'
  ]

  // Dominio principal (destino)
  const primaryDomain = 'rentcartetouan.ma'

  if (domainsToRedirect.some(domain => host.includes(domain))) {
    // Construimos la nueva URL manteniendo el path y los parámetros
    const newUrl = `https://${primaryDomain}${url.pathname}${url.search}`
    
    // 301 es el código para redirección permanente (mejor para SEO)
    return sendRedirect(event, newUrl, 301)
  }
})
