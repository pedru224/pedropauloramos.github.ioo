# Portfólio do Pedru

Portfólio estático em HTML, Tailwind CSS (via CDN) e JavaScript, inspirado no menu de canais do Nintendo Wii. Funciona abrindo o `index.html` e também no GitHub Pages.

## Estrutura

```text
/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/WhatsApp_Image_2026-10-08_at_21_11_01__1_.jpg
└── README.md
```

## Antes de publicar

1. No `index.html`, troque `[PERÍODO]` pelo período em que trabalhou na MGF.
2. Confirme que a imagem está em `assets/images/` com o mesmo nome do `index.html`.
3. Quando tiver projetos, substitua o bloco "Em breve" na seção `#projetos`.
4. Opcional: para ter prévia de imagem ao compartilhar o link, adicione uma tag `og:image` com a URL completa do site.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub (por exemplo, `portfolio` ou `pedru224.github.io`).
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
5. Salve e aguarde alguns minutos. O endereço aparece na mesma tela.

## Observações

- O Tailwind é carregado pela versão 3.4.17 do CDN, então o site precisa de internet para aplicar os estilos.
- Todas as tecnologias de programação listadas estão marcadas como "em estudo".
- O estilo foi recriado só com HTML, CSS e SVG. Nenhum recurso oficial da Nintendo foi usado.
