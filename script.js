:root{
  --rosa:#e8789c;
  --rosa-esc:#a23b66;
  --rosa-cl:#f8dce4;
  --bege:#efe0cf;
  --bege-cl:#faf4ec;
  --salvia:#9db08f;
  --preto:#43282b;
  --branco:#fffaf4;
  --cinza:#6b5558;
  --linha:rgba(67,40,43,.14);
  --sombra:0 1px 2px rgba(67,40,43,.06),0 8px 24px rgba(67,40,43,.08);
  --sombra-g:0 2px 4px rgba(67,40,43,.08),0 18px 40px rgba(67,40,43,.16);
  --serif:Georgia,"Times New Roman",serif;
  --sans:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:80px;color-scheme:light}
body{font-family:var(--sans);color:var(--preto);background:var(--bege-cl);line-height:1.6;overflow-x:hidden;overflow-x:clip;-webkit-font-smoothing:antialiased}
main,footer{overflow-x:hidden;overflow-x:clip}
body.trava{overflow:hidden}
a{color:inherit}
:focus-visible{outline:3px solid var(--rosa);outline-offset:2px}
[hidden]{display:none!important}
h1,h2,h3{font-family:var(--serif);line-height:1.15;letter-spacing:-.01em}

.topo{position:sticky;top:0;z-index:30;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px clamp(16px,4vw,48px);background:var(--preto);color:var(--branco);border-radius:0 0 24px 24px;box-shadow:0 6px 24px rgba(67,40,43,.25)}
.logo{font-family:var(--serif);font-size:1.5rem;font-style:italic;text-decoration:none;white-space:nowrap}
.logo span{color:var(--rosa)}
.menu{display:flex;gap:28px;margin-right:auto;margin-left:32px}
.menu a{color:var(--branco);text-decoration:none;padding:6px 2px;font-size:.95rem;letter-spacing:.02em;border-bottom:2px solid transparent;transition:border-color .2s,color .2s}
.menu a:hover{border-color:var(--rosa);color:var(--rosa-cl)}
.acoes{display:flex;align-items:center;gap:8px}
.btn-icone{display:inline-flex;align-items:center;gap:6px;background:transparent;color:var(--branco);border:1.5px solid var(--rosa);border-radius:999px;padding:8px 16px;font:inherit;font-size:.95rem;cursor:pointer;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:background .2s,color .2s}
.btn-icone:hover{background:var(--rosa);color:var(--preto)}
.carrinho b{background:var(--salvia);color:var(--preto);border-radius:999px;padding:1px 8px;margin-left:2px;font-size:.85rem}
.ico{display:none;flex:none}

.hamb{display:none;background:none;border:0;width:44px;height:44px;cursor:pointer;flex:none;flex-direction:column;justify-content:center;align-items:center;gap:6px;position:relative;z-index:36}
.hamb i{display:block;width:26px;height:3px;background:var(--branco);border-radius:2px;transition:transform .25s,opacity .25s}
.hamb[aria-expanded="true"] i:nth-child(1){transform:translateY(9px) rotate(45deg)}
.hamb[aria-expanded="true"] i:nth-child(2){opacity:0}
.hamb[aria-expanded="true"] i:nth-child(3){transform:translateY(-9px) rotate(-45deg)}

.btn{display:inline-block;background:var(--rosa);color:var(--preto);border:0;border-radius:999px;padding:14px 28px;font:600 1rem var(--sans);letter-spacing:.01em;text-decoration:none;cursor:pointer;text-align:center;box-shadow:0 4px 14px rgba(232,120,156,.35);transition:background .2s,color .2s,box-shadow .2s,translate .2s}
.btn:hover{background:var(--preto);color:var(--branco);box-shadow:0 8px 20px rgba(67,40,43,.28);translate:0 -2px}
.btn.claro{background:var(--branco);box-shadow:inset 0 0 0 1.5px var(--linha)}
.btn.claro:hover{background:var(--bege);color:var(--preto)}
.btn.cheio{width:100%}
.btn-link{background:none;border:0;color:var(--cinza);text-decoration:underline;font:inherit;cursor:pointer;margin-top:10px}
.btn-link:hover{color:var(--rosa-esc)}

.hero{display:grid;grid-template-columns:1.2fr .8fr;align-items:center;gap:24px;margin:14px clamp(8px,2vw,24px);padding:clamp(48px,8vw,104px) clamp(20px,5vw,64px);background:linear-gradient(135deg,var(--rosa-cl) 0%,var(--bege) 100%);border-radius:32px;box-shadow:var(--sombra)}
.hero h1{font-size:clamp(2.4rem,6.5vw,4.6rem);margin-bottom:20px}
.hero p{max-width:46ch;margin-bottom:30px;font-size:1.1rem;color:var(--cinza)}
.hero-arte{display:flex;justify-content:center}
.hero-arte span{width:clamp(110px,18vw,230px);aspect-ratio:3/4;display:grid;place-items:center;border-radius:22px;box-shadow:var(--sombra-g);font:italic clamp(3rem,9vw,7rem) var(--serif)}
.hero-arte span:first-child{background:var(--preto);color:var(--rosa);transform:rotate(-4deg)}
.hero-arte span:last-child{background:var(--rosa);color:var(--preto);transform:rotate(3deg) translateY(24px);margin-left:-18px}

.secao{padding:clamp(48px,7vw,96px) clamp(16px,4vw,48px);max-width:1280px;margin:0 auto}
.secao h2{font-size:clamp(1.8rem,4vw,2.7rem);margin-bottom:28px}
.secao h2::after{content:"";display:block;width:56px;height:4px;border-radius:4px;background:var(--rosa);margin-top:14px}
.sobre,.contato{max-width:none;padding-left:max(clamp(16px,4vw,48px),calc((100% - 1184px) / 2));padding-right:max(clamp(16px,4vw,48px),calc((100% - 1184px) / 2))}
.sobre{background:var(--bege)}
.contato{background:var(--rosa-cl)}
.sobre p,.contato p{max-width:62ch;margin-bottom:24px;color:var(--cinza);font-size:1.05rem}

.filtros{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
.filtros button{border:1.5px solid var(--linha);background:var(--branco);color:var(--preto);padding:9px 20px;border-radius:999px;font:inherit;font-size:.95rem;cursor:pointer;transition:background .2s,color .2s,border-color .2s}
.filtros button:hover{border-color:var(--rosa)}
.filtros button[aria-pressed="true"]{background:var(--preto);color:var(--branco);border-color:var(--preto)}
.grade{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:24px}
.card{border:1px solid var(--linha);border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:var(--branco);color:var(--preto);cursor:pointer;box-shadow:var(--sombra);transition:box-shadow .25s,translate .25s}
.card:hover{box-shadow:var(--sombra-g);translate:0 -6px}
.foto{aspect-ratio:4/5;display:grid;place-items:center;font:italic 3.4rem var(--serif)}
.foto.c-rosa{background:linear-gradient(160deg,#f29ab6,var(--rosa));color:var(--preto)}
.foto.c-preto{background:linear-gradient(160deg,#5c3a3e,var(--preto));color:var(--rosa)}
.foto.c-branco{background:linear-gradient(160deg,var(--bege-cl),var(--bege));color:var(--rosa-esc)}
.info{padding:16px;display:flex;flex-direction:column;gap:10px;flex:1}
.info h3{font-size:1.15rem}
.preco{font-weight:700;color:var(--rosa-esc);font-size:1.05rem}
.tamanhos{display:flex;gap:6px;flex-wrap:wrap}
.tamanhos label{cursor:pointer;position:relative;margin:0;font-weight:400}
.tamanhos input{position:absolute;opacity:0}
.tamanhos span{display:inline-block;min-width:38px;text-align:center;border:1.5px solid var(--linha);padding:5px 8px;border-radius:8px;font-size:.9rem;background:var(--branco);color:var(--preto);transition:background .2s,color .2s,border-color .2s}
.tamanhos label:hover span{border-color:var(--rosa)}
.tamanhos input:checked+span{background:var(--preto);color:var(--branco);border-color:var(--preto)}
.tamanhos input:focus-visible+span{outline:3px solid var(--rosa)}
.info .btn{margin-top:auto;padding:11px}

.rodape{background:var(--preto);color:var(--branco);padding:56px clamp(16px,4vw,48px) 22px;border-radius:32px 32px 0 0}
.rodape-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:36px;max-width:1280px;margin:0 auto}
.rodape h3{color:var(--rosa);margin-bottom:14px;font-size:1.15rem}
.rodape ul{list-style:none;display:grid;gap:10px;font-size:.95rem;color:#ecdcd0}
.copy{text-align:center;margin-top:40px;padding-top:20px;border-top:1px solid #5a3d40;font-size:.85rem;color:#cdb9ad}

.fundo{position:fixed;inset:0;background:rgba(40,20,22,.6);z-index:25}
.gaveta{position:fixed;top:0;right:0;height:100%;width:min(420px,100%);background:var(--branco);color:var(--preto);z-index:50;display:flex;flex-direction:column;transform:translateX(105%);transition:transform .3s;visibility:hidden;box-shadow:-12px 0 40px rgba(40,20,22,.25);border-radius:24px 0 0 24px}
.gaveta.aberta{transform:none;visibility:visible}
.gaveta-topo{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--linha)}
.fechar{background:none;border:0;font-size:2rem;line-height:1;cursor:pointer;width:44px;height:44px;color:var(--preto)}
.itens{list-style:none;flex:1;overflow-y:auto;padding:12px 20px}
.itens li{display:grid;grid-template-columns:1fr auto;gap:4px 12px;padding:14px 0;border-bottom:1px solid var(--bege)}
.itens .qtd{display:flex;align-items:center;gap:8px}
.itens .qtd button{width:32px;height:32px;border:1.5px solid var(--linha);background:var(--branco);color:var(--preto);cursor:pointer;border-radius:8px;font-size:1.1rem}
.itens .qtd button:hover{border-color:var(--rosa)}
.vazio{color:var(--cinza);padding:24px 0}
.gaveta-base{padding:16px 20px calc(16px + env(safe-area-inset-bottom));border-top:1px solid var(--linha);text-align:center}
.total{display:flex;justify-content:space-between;font-size:1.2rem;margin-bottom:12px}

.dlg{margin:auto;border:0;border-radius:24px;box-shadow:var(--sombra-g);padding:28px;width:min(420px,calc(100% - 24px));max-height:92vh;overflow-y:auto;background:var(--branco);color:var(--preto)}
.dlg::backdrop{background:rgba(40,20,22,.65);backdrop-filter:blur(3px)}
.dlg .fechar{position:absolute;top:6px;right:6px;z-index:2}
.dlg h2{margin-bottom:14px}
.abas{display:grid;grid-template-columns:1fr 1fr;margin-bottom:16px;border-radius:12px;overflow:hidden;border:1.5px solid var(--linha)}
.abas button{padding:10px;border:0;background:var(--branco);color:var(--preto);font:inherit;cursor:pointer}
.abas button[aria-selected="true"]{background:var(--rosa)}
form{display:grid;gap:6px}
label{font-weight:600;margin-top:6px;font-size:.95rem}
input[type=text],input[type=email],input[type=password]{width:100%;padding:12px 14px;border:1.5px solid var(--linha);border-radius:12px;font:inherit;background:var(--branco);color:var(--preto);transition:border-color .2s,box-shadow .2s}
input[type=text]:focus,input[type=email]:focus,input[type=password]:focus{outline:0;border-color:var(--rosa);box-shadow:0 0 0 4px rgba(232,120,156,.2)}
form .btn{margin-top:14px}
.aviso{background:var(--rosa-cl);color:var(--preto);border-left:5px solid var(--rosa-esc);border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:.92rem}
.ou{text-align:center;margin:12px 0;color:var(--cinza)}
.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--preto);color:var(--branco);border:1.5px solid var(--rosa);padding:12px 22px;border-radius:999px;box-shadow:var(--sombra-g);z-index:60;max-width:calc(100% - 32px)}
#erroJs{position:fixed;left:0;right:0;top:0;z-index:99;background:#c00;color:#fff;padding:10px 16px;font:14px/1.4 monospace;white-space:pre-wrap}

/* tela de zoom da peça */
.zoom{width:min(860px,calc(100% - 24px));padding:0;overflow-x:hidden}
.zoom[open]{animation:zoomIn .35s cubic-bezier(.2,.8,.2,1)}
.zoom[open]::backdrop{animation:fadeIn .3s}
.zoom-grid{display:grid;grid-template-columns:1fr 1fr}
.zoom .foto{aspect-ratio:auto;min-height:100%;font-size:clamp(5rem,14vw,9rem)}
.zoom-info{padding:44px 32px 32px;display:flex;flex-direction:column;gap:14px}
.zoom-info h2{margin:0;font-size:clamp(1.6rem,4vw,2.2rem)}
.zcat{color:var(--cinza);text-transform:uppercase;letter-spacing:.1em;font-size:.75rem}
.zpreco{font-size:1.5rem}
.zdesc{color:var(--cinza)}
.zoom-info .btn{margin-top:auto}
@keyframes zoomIn{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}

/* efeito de entrada ao rolar: os blocos entram pelas laterais da tela */
.js .rev{--x:-100vw;opacity:0;transform:translateX(var(--x));transition:opacity .9s ease var(--d,0ms),transform 1s cubic-bezier(.16,.84,.3,1) var(--d,0ms),box-shadow .25s,translate .25s}
.js .hero-arte.rev,.js .contato.rev,.js .card.rev:nth-child(even),.js .rodape-grid .rev:nth-child(even){--x:100vw}
.js .rev.visivel{opacity:1;transform:none}

@media(max-width:820px){
  .topo{justify-content:flex-start;gap:8px;padding:10px 12px}
  .hamb{display:flex}
  .logo{font-size:1.25rem;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis}
  .acoes{margin-left:auto;gap:6px}
  .menu{position:fixed;top:0;left:0;height:100%;height:100dvh;width:min(300px,82%);margin:0;border-radius:0 28px 28px 0;background:var(--preto);flex-direction:column;gap:0;padding:80px 24px 24px;transform:translateX(-105%);transition:transform .3s;z-index:35;visibility:hidden;overflow-y:auto}
  .menu.aberto{transform:none;visibility:visible}
  .menu a{padding:16px 0;font-size:1.2rem;border-bottom:1px solid #5a3d40}
  .hero{grid-template-columns:1fr}
  .hero-arte{display:none}
  .btn-icone{padding:8px 12px;font-size:.9rem}
  .zoom-grid{grid-template-columns:1fr}
  .zoom .foto{aspect-ratio:4/3;min-height:0;font-size:5rem}
  .zoom-info{padding:20px}
}
@media(max-width:480px){
  .rot{display:none}
  .ico{display:block}
  .btn-icone{padding:8px 10px;max-width:96px}
}
@media(prefers-reduced-motion:reduce){
  *{transition:none!important;animation:none!important;scroll-behavior:auto!important}
  .js .rev{opacity:1;transform:none}
}
/* fim */
