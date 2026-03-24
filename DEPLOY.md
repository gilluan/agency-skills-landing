# Agency Skills Landing - Deployment Notes

## Push Automático

O repositório usa `gh` (GitHub CLI) para autenticação.

### Configuração atual:
- Conta: gilluan
- Protocolo: HTTPS
- Token: configurado via `gh auth`

### Comando para push:
```bash
cd /home/node/.openclaw/workspace/agency-skills-landing
gh auth setup-git
git push origin main
```

### Workflow de atualização:
1. Fazer alterações nos arquivos fonte (app/)
2. Build: `npm run build` (gera dist/)
3. Commit: `git add . && git commit -m "mensagem"`
4. Push: `gh auth setup-git && git push origin main`
5. Cloudflare Pages detecta e faz deploy automaticamente

### URL:
- Produção: https://agency-skills-landing.pages.dev
- Repo: https://github.com/gilluan/agency-skills-landing
