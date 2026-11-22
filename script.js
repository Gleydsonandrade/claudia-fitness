/* ===== CONFIGURAÇÃO (edite aqui) ===== */
const WHATSAPP = "5500000000000"; // DDI+DDD+número, só dígitos
const LOJA = { // dados que aparecem no rodapé e nas políticas
  razao:"Claudia Fitness", doc:"CNPJ/CPF 00.000.000/0000-00",
  email:"contato@seudominio.com.br", cidade:"Sua cidade - UF", prazoTroca:"30"
};
const firebaseConfig = { // Firebase Console > Configurações do projeto
  apiKey:"SUA_API_KEY", authDomain:"SEU_PROJETO.firebaseapp.com", projectId:"SEU_PROJETO", appId:"SEU_APP_ID"
};
/* ===================================== */

const TAMANHOS=["PP","P","M","G","GG"];
const CATS={
 shorts:{nome:"Shorts",desc:"Conforto e liberdade para treinar."},
 calcas:{nome:"Calças",desc:"Leggings e joggers com modelagem perfeita."},
 blusas:{nome:"Blusas",desc:"Tops, croppeds e dry fits para todos os treinos."}
};
const PRODUTOS=[
 {id:1,cat:"shorts",nome:"Short Suplex Rosa",preco:69.9},
 {id:2,cat:"shorts",nome:"Short Preto Cintura Alta",preco:79.9},
 {id:3,cat:"shorts",nome:"Short Saia Branco",preco:74.9},
 {id:4,cat:"calcas",nome:"Legging Preta Power",preco:119.9},
 {id:5,cat:"calcas",nome:"Calça Jogger Rosa",preco:129.9},
 {id:6,cat:"calcas",nome:"Legging Cós Alto Branca",preco:124.9},
 {id:7,cat:"blusas",nome:"Blusa Dry Fit Branca",preco:59.9},
 {id:8,cat:"blusas",nome:"Cropped Rosa Neon",preco:49.9},
 {id:9,cat:"blusas",nome:"Top Preto Sustentação",preco:54.9}
];
const $=id=>document.getElementById(id);
const brl=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const el=(tag,props={},...kids)=>{const e=document.createElement(tag);Object.assign(e,props);kids.forEach(k=>e.append(k));return e};

/* Esconde a logo se logo.png não existir */
const logoImg=document.querySelector(".logo img");
logoImg.addEventListener("error",()=>{logoImg.style.display="none"});
if(logoImg.complete&&logoImg.naturalWidth===0)logoImg.style.display="none";

/* ---------- Carrinho (validado contra o catálogo) ---------- */
let carrinho=[];
try{
  const salvo=JSON.parse(localStorage.getItem("cf_cart")||"[]");
  carrinho=salvo.filter(i=>PRODUTOS.some(p=>p.id===i.id)&&TAMANHOS.includes(i.tam)&&Number.isInteger(i.q)&&i.q>0&&i.q<=20);
}catch{carrinho=[]}
const salvar=()=>{try{localStorage.setItem("cf_cart",JSON.stringify(carrinho))}catch{}};
const prod=id=>PRODUTOS.find(p=>p.id===id);
function toast(t){const x=$("toast");x.textContent=t;x.style.display="block";setTimeout(()=>x.style.display="none",2500)}

function renderCarrinho(){
  const box=$("itens");box.replaceChildren();
  let total=0,qt=0;
  if(!carrinho.length)box.append(el("p",{textContent:"Seu carrinho está vazio."}));
  carrinho.forEach((i,idx)=>{
    const p=prod(i.id);total+=p.preco*i.q;qt+=i.q;
    const mais=el("button",{textContent:"+"}),menos=el("button",{textContent:"−"});
    mais.onclick=()=>{if(i.q<20){i.q++;salvar();renderCarrinho()}};
    menos.onclick=()=>{i.q--;if(i.q<=0)carrinho.splice(idx,1);salvar();renderCarrinho()};
    box.append(el("div",{className:"item"},
      el("div",{},el("strong",{textContent:p.nome}),el("br"),el("small",{textContent:`Tam. ${i.tam} · ${brl(p.preco)}`})),
      el("div",{className:"qtdbtn"},menos,el("span",{textContent:` ${i.q} `}),mais)));
  });
  $("total").textContent=brl(total);$("qtd").textContent=qt;
}
function addCarrinho(id,tam){
  const ex=carrinho.find(i=>i.id===id&&i.tam===tam);
  if(ex){if(ex.q<20)ex.q++}else carrinho.push({id,tam,q:1});
  salvar();renderCarrinho();toast("Adicionado ao carrinho 💗");
}

/* ---------- Políticas ---------- */
const TEXTOS={
 trocas:{titulo:"Política de troca e devolução",blocos:[
  ["Direito de arrependimento","Compras feitas pela internet podem ser desfeitas em até 7 dias corridos após o recebimento, sem precisar justificar, conforme o Código de Defesa do Consumidor. O valor pago é devolvido integralmente."],
  ["Troca por tamanho ou modelo","Aceitamos troca em até "+LOJA.prazoTroca+" dias após o recebimento, conforme disponibilidade em estoque. A peça deve estar sem uso, sem lavagem, com etiqueta e na embalagem original."],
  ["Produto com defeito","Se a peça chegar com defeito de fabricação, avise em até 30 dias do recebimento. Faremos a troca, o conserto ou a devolução do valor, conforme sua escolha e a lei."],
  ["Como solicitar","Fale conosco pelo WhatsApp ou pelo e-mail "+LOJA.email+", informando o número do pedido e, se possível, fotos da peça. Responderemos com as instruções de envio."],
  ["Frete da troca","Em caso de defeito ou erro nosso, o frete é por nossa conta. Em troca por tamanho ou preferência, o frete de envio da peça pode ser combinado com você no atendimento."],
  ["Peças que não trocamos","Por higiene, não trocamos peças íntimas usadas ou sem a etiqueta de proteção, exceto em caso de defeito."]]},
 privacidade:{titulo:"Política de privacidade",blocos:[
  ["Quem somos",LOJA.razao+" ("+LOJA.doc+"), "+LOJA.cidade+". Somos responsáveis pelo tratamento dos seus dados neste site. Contato: "+LOJA.email+"."],
  ["Quais dados coletamos","Nome e e-mail (quando você cria conta ou entra com Google), e os itens do seu carrinho. Não coletamos nem armazenamos dados de cartão: o pagamento é combinado diretamente pelo WhatsApp."],
  ["Para que usamos","Para identificar você no login, montar seu pedido, enviá-lo ao nosso WhatsApp e atendê-la. Não vendemos nem compartilhamos seus dados para publicidade."],
  ["Onde ficam os dados","O login é feito pelo serviço Firebase Authentication, do Google, que guarda e protege seu e-mail e sua senha. O carrinho fica salvo apenas no seu aparelho, e você pode apagá-lo limpando os dados do navegador."],
  ["WhatsApp","Ao finalizar o pedido, sua mensagem é enviada pelo WhatsApp, que tem a própria política de privacidade."],
  ["Seus direitos (LGPD)","Você pode pedir confirmação de que tratamos seus dados, acesso, correção, exclusão da conta e informações sobre compartilhamento, a qualquer momento, pelo e-mail "+LOJA.email+"."],
  ["Segurança","Usamos conexão HTTPS, validação dos dados digitados e login por serviço especializado. Se houver incidente que afete seus dados, avisaremos conforme a lei."],
  ["Atualizações","Podemos atualizar esta política. A versão vigente é sempre a publicada nesta página."]]}
};
function renderTexto(slug){
  const t=TEXTOS[slug],box=$("pagina");box.replaceChildren();
  const w=el("div",{className:"leg"});
  w.append(el("a",{className:"voltar",href:"#topo",textContent:"← Voltar ao início"}),el("h2",{textContent:t.titulo}));
  t.blocos.forEach(([h,p])=>w.append(el("h3",{textContent:h}),el("p",{textContent:p})));
  w.append(el("p",{className:"aviso",textContent:"Última atualização: novembro de 2026."}));
  box.append(w);
}
function renderRodape(){
  const f=$("rodape");f.replaceChildren(
    el("a",{href:"#/trocas",textContent:"Trocas e devoluções"}),
    el("a",{href:"#/privacidade",textContent:"Privacidade"}),
    el("p",{textContent:LOJA.razao+" · "+LOJA.doc+" · "+LOJA.cidade}),
    el("p",{textContent:LOJA.email}),
    el("p",{textContent:"© 2026 Claudia Fitness · Todos os direitos reservados"}));
}

/* ---------- Loja e páginas ---------- */
function renderHome(){
  const c=$("cats");c.replaceChildren();
  Object.entries(CATS).forEach(([slug,k])=>c.append(el("a",{className:"cat",href:"#/"+slug},
    el("strong",{textContent:k.nome}),el("span",{textContent:k.desc}),el("span",{textContent:"Ver peças →"}))));
}
function renderPagina(slug){
  const k=CATS[slug],box=$("pagina");box.replaceChildren();
  box.append(el("a",{className:"voltar",href:"#loja",textContent:"← Voltar à loja"}),
    el("h2",{textContent:k.nome}),el("p",{className:"sub",textContent:k.desc}));
  const g=el("div",{className:"grid"});
  PRODUTOS.filter(p=>p.cat===slug).forEach(p=>{
    let tam="M";
    const tams=el("div",{className:"tams",role:"group",ariaLabel:"Tamanho"});
    TAMANHOS.forEach(t=>{
      const b=el("button",{textContent:t,className:t===tam?"on":""});
      b.onclick=()=>{tam=t;[...tams.children].forEach(x=>x.classList.toggle("on",x===b))};
      tams.append(b);
    });
    const btn=el("button",{className:"btn",textContent:"Adicionar ao carrinho"});
    btn.onclick=()=>addCarrinho(p.id,tam);
    g.append(el("article",{className:"card"},
      el("div",{className:"info"},el("h3",{textContent:p.nome}),el("span",{className:"preco",textContent:brl(p.preco)}),
        el("small",{textContent:"Escolha o tamanho:"}),tams,btn)));
  });
  box.append(g);
  const med=[["PP","34","60-64","86-90"],["P","36","65-69","91-95"],["M","38-40","70-74","96-100"],["G","42","75-80","101-106"],["GG","44-46","81-88","107-114"]];
  const t=el("table",{className:"tbl"});
  const tr=el("tr");["Tam.","Manequim","Cintura (cm)","Quadril (cm)"].forEach(h=>tr.append(el("th",{textContent:h})));
  t.append(tr);
  med.forEach(r=>{const x=el("tr");r.forEach(v=>x.append(el("td",{textContent:v})));t.append(x)});
  box.append(el("h3",{textContent:"Tabela de medidas (aprox.)",style:"margin-top:2rem;text-align:center"}),t);
}
function rota(){
  const h=location.hash,m=h.match(/^#\/(shorts|calcas|blusas|trocas|privacidade)$/);
  if(m){
    const slug=m[1],nome=CATS[slug]?CATS[slug].nome:TEXTOS[slug].titulo;
    CATS[slug]?renderPagina(slug):renderTexto(slug);
    $("home").hidden=true;$("pagina").hidden=false;
    document.title=nome+" | Claudia Fitness";scrollTo(0,0);
  }else{
    $("pagina").hidden=true;$("home").hidden=false;document.title="Claudia Fitness | Moda Fitness";
    const t=/^#[a-z]+$/.test(h)?document.getElementById(h.slice(1)):null;
    t?t.scrollIntoView():scrollTo(0,0);
  }
}
addEventListener("hashchange",rota);

/* ---------- Menu / painéis ---------- */
const fechaTudo=()=>{$("menu").classList.remove("on");$("painel").classList.remove("on");$("overlay").classList.remove("on")};
$("menuBtn").onclick=()=>{$("menu").classList.add("on");$("overlay").classList.add("on")};
$("cartBtn").onclick=()=>{$("painel").classList.add("on");$("overlay").classList.add("on")};
$("fechaCart").onclick=fechaTudo;$("overlay").onclick=fechaTudo;
document.querySelectorAll("#menu a").forEach(a=>a.onclick=fechaTudo);
$("loginBtn").onclick=()=>$("modal").classList.add("on");
$("fechaModal").onclick=()=>$("modal").classList.remove("on");

/* ---------- Login (Firebase Auth: e-mail e Google) ---------- */
const configurado=!firebaseConfig.apiKey.startsWith("SUA_");
let auth=null,A=null,usuario=null;
async function iniciaAuth(){
  if(!configurado||A)return A;
  try{
    const V="10.12.2",B="https://www.gstatic.com/firebasejs/"+V+"/";
    const [app,au]=await Promise.all([import(B+"firebase-app.js"),import(B+"firebase-auth.js")]);
    auth=au.getAuth(app.initializeApp(firebaseConfig));A=au;
    au.onAuthStateChanged(auth,u=>{
      usuario=u;
      $("loginBtn").textContent=u?"Conta":"Entrar";
      $("logado").style.display=u?"block":"none";
      $("formLogin").style.display=u?"none":"contents";
      $("modalTitulo").textContent=u?"Minha conta":"Entrar";
      $("quem").textContent=u?"Logada como "+(u.displayName||u.email):"";
    });
  }catch(e){A=null}
  return A;
}
const msg=t=>$("msgLogin").textContent=t;
const erros={"auth/invalid-credential":"E-mail ou senha incorretos.","auth/email-already-in-use":"Este e-mail já está cadastrado.","auth/weak-password":"Senha fraca (mín. 8 caracteres).","auth/invalid-email":"E-mail inválido.","auth/popup-closed-by-user":"Login cancelado.","auth/too-many-requests":"Muitas tentativas. Aguarde um pouco."};
const emailOk=e=>/^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/.test(e);
async function acao(fn){
  if(!configurado)return msg("Configure o Firebase no código para ativar o login.");
  const a=await iniciaAuth();
  if(!a)return msg("Não foi possível carregar o login. Verifique sua internet.");
  try{msg("");await fn(a);$("modal").classList.remove("on")}catch(e){msg(erros[e.code]||"Não foi possível entrar. Tente novamente.")}
}
function pegaCampos(){
  const e=$("email").value.trim(),s=$("senha").value;
  if(!emailOk(e)){msg("Digite um e-mail válido.");return null}
  if(s.length<8){msg("A senha precisa ter pelo menos 8 caracteres.");return null}
  return [e,s];
}
$("entrar").onclick=()=>{const c=pegaCampos();if(c)acao(a=>a.signInWithEmailAndPassword(auth,...c))};
$("criar").onclick=()=>{const c=pegaCampos();if(c)acao(a=>a.createUserWithEmailAndPassword(auth,...c))};
$("google").onclick=()=>acao(a=>a.signInWithPopup(auth,new a.GoogleAuthProvider()));
$("sair").onclick=()=>A&&A.signOut(auth);

/* ---------- Pagamento via WhatsApp ---------- */
$("finalizar").onclick=()=>{
  if(!carrinho.length)return toast("Carrinho vazio");
  if(!usuario){fechaTudo();$("modal").classList.add("on");return msg("Entre na sua conta para finalizar o pedido.")}
  let total=0;
  const linhas=carrinho.map(i=>{const p=prod(i.id);total+=p.preco*i.q;return `• ${i.q}x ${p.nome} (Tam. ${i.tam}) - ${brl(p.preco*i.q)}`});
  const texto=`Olá, Claudia Fitness! 💗\nQuero finalizar meu pedido:\n\n${linhas.join("\n")}\n\nTotal: ${brl(total)}\nCliente: ${usuario.displayName||usuario.email}\n\nComo faço o pagamento?`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`,"_blank","noopener,noreferrer");
};

renderHome();renderRodape();renderCarrinho();rota();iniciaAuth();


