# Cloudflare Pages Configuration

## Build Settings (Configure no Dashboard)

1. Acesse: https://dash.cloudflare.com → Pages → agency-skills-landing
2. Vá em "Settings" → "Build & deployments"
3. Configure:
   - **Build command:** (deixe vazio)
   - **Build output directory:** `/`
   - **Root directory:** `/`

4. Em "Environment variables", adicione:
   - `NODE_VERSION`: `18`

5. Salve e faça "Retry deployment" no último commit

## Importante

Como agora é só um arquivo HTML estático, não precisa de build!
O Cloudflare deve servir o `index.html` diretamente.

Se continuar com problemas, tente:
1. Desativar o "Build" completamente (modo "Direct Upload")
2. Ou mudar para GitHub Pages (Settings → Pages → Source: Deploy from branch)
