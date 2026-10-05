"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Menu,
  MessageCircle,
  Monitor,
  Send,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const portfolio = "https://edsonsilveiradev.vercel.app";
const contact = {
  whatsapp: "",
  email: "",
  formEndpoint: "https://formspree.io/f/meaeqygy",
  portfolio,
};
const services = [
  [
    Monitor,
    "Sites profissionais",
    "Sites rápidos e responsivos que apresentam sua empresa com clareza e facilitam o contato com novos clientes.",
    "Empresas · Profissionais · Negócios locais",
  ],
  [
    Sparkles,
    "Landing pages",
    "Páginas pensadas para uma ação: transformar visitas em mensagens, orçamentos ou oportunidades de venda.",
    "Campanhas · Serviços · Lançamentos",
  ],
  [
    Code2,
    "Sistemas Web",
    "Sistemas personalizados para organizar dados, processos e operações sem complicar a rotina da sua equipe.",
    "Painéis · Gestão · Plataformas",
  ],
  [
    Workflow,
    "Integrações e automações",
    "Conecto ferramentas e automatizo tarefas repetitivas para reduzir trabalho manual e manter tudo fluindo.",
    "APIs · Planilhas · Notificações",
  ],
] as const;
const problems = [
  [
    "Seu negócio ainda não possui um site profissional",
    "Construa uma presença confiável e fácil de encontrar.",
  ],
  [
    "Seu site recebe visitas, mas não gera contatos",
    "Crie uma jornada mais clara para transformar interesse em conversa.",
  ],
  [
    "Tarefas repetitivas consomem tempo da equipe",
    "Automatize rotinas e dedique energia ao que faz o negócio avançar.",
  ],
  [
    "Informações estão espalhadas em planilhas e ferramentas",
    "Centralize processos em uma solução feita para sua operação.",
  ],
  [
    "Você tem uma ideia, mas não sabe como transformá-la em software",
    "Planeje o caminho e tire o produto do papel com segurança.",
  ],
  [
    "Seu sistema atual precisa evoluir",
    "Adicione recursos, integrações e melhorias sem começar do zero.",
  ],
];
const projects = [
  [
    "Plataforma de gestão",
    "Sistema Web",
    "Operação organizada em um painel único, simples de acompanhar.",
  ],
  [
    "Presença que converte",
    "Landing Page",
    "Uma página direta para apresentar um serviço e iniciar conversas.",
  ],
  [
    "Rotina conectada",
    "Integração",
    "Fluxos automatizados para aproximar ferramentas e reduzir etapas.",
  ],
];
const track = (event: string) =>
  window.dispatchEvent(new CustomEvent("edson:track", { detail: { event } }));

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const go = (id: string) => {
    setMenu(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      const formData = new FormData(form);
      const fields = ["name", "company", "whatsapp", "email", "service", "message"];
      form
        .querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
          "input, textarea, select",
        )
        .forEach((field, index) => formData.set(fields[index], field.value));
      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!response.ok) throw new Error("Submit failed");
      form.reset();
      setStatus("success");
      track("contact_submitted");
    } catch {
      setStatus("error");
    }
  };
  const Portfolio = ({ label = "Ver portfólio" }: { label?: string }) => (
    <a
      className="text-link"
      href={portfolio}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("portfolio_clicked")}
    >
      {label} <ArrowUpRight />
    </a>
  );
  return (
    <main>
      <header>
        <nav className="nav wrap">
          <button className="brand" onClick={() => go("#inicio")}>
            Edson<span>.dev</span>
          </button>
          <div className="links">
            <button onClick={() => go("#servicos")}>Serviços</button>
            <button onClick={() => go("#processo")}>Como funciona</button>
            <button onClick={() => go("#sobre")}>Sobre</button>
          </div>
          <div className="actions">
            <a
              className="btn ghost sm"
              href={portfolio}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("portfolio_clicked")}
            >
              Portfólio <ExternalLink />
            </a>
            <button className="btn sm" onClick={() => go("#contato")}>
              Solicitar orçamento
            </button>
          </div>
          <button className="menu" onClick={() => setMenu(!menu)} aria-label="Abrir menu">
            {menu ? <X /> : <Menu />}
          </button>
        </nav>
        {menu && (
          <div className="mobile">
            <button onClick={() => go("#servicos")}>Serviços</button>
            <button onClick={() => go("#processo")}>Como funciona</button>
            <button onClick={() => go("#sobre")}>Sobre</button>
            <button className="btn" onClick={() => go("#contato")}>
              Solicitar orçamento
            </button>
          </div>
        )}
      </header>
      <section className="hero wrap" id="inicio">
        <div>
          <p className="eyebrow">● Desenvolvimento de soluções digitais</p>
          <h1>
            Sites e sistemas feitos para <i>resolver</i> problemas reais.
          </h1>
          <p className="lead">
            Transformo ideias e necessidades do seu negócio em experiências digitais claras,
            funcionais e prontas para crescer.
          </p>
          <div className="hero-buttons">
            <button
              className="btn"
              onClick={() => {
                track("hero_cta_clicked");
                go("#contato");
              }}
            >
              Quero tirar minha ideia do papel <ArrowUpRight />
            </button>
            <Portfolio label="Conhecer meu trabalho" />
          </div>
          <p className="helper">
            <Sparkles /> Me conte sua ideia. Eu ajudo a encontrar a melhor solução.
          </p>
        </div>
        <div className="visual">
          <div className="glow" />
          <div className="browser">
            <div className="dots">
              ● ● ● <small>solucao.digital</small>
            </div>
            <div className="ui">
              <aside>
                ▰<br />━<br />━<br />━
              </aside>
              <section>
                <b>Visão geral</b>
                <div className="chart">╱╲__╱╲____╱</div>
                <div className="minicards">
                  <span />
                  <span />
                  <span />
                </div>
              </section>
            </div>
          </div>
          <span className="float left">
            <Zap /> Automação
          </span>
          <span className="float right">
            <Check /> Publicado
          </span>
        </div>
      </section>
      <section className="trust">
        <div className="wrap">
          <p>Soluções digitais pensadas do planejamento à publicação.</p>
          <div>
            {["Sites", "Landing Pages", "Sistemas", "Integrações", "Automação"].map((x) => (
              <span key={x}>• {x}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="heading">
          <p className="eyebrow">Onde posso ajudar</p>
          <h2>Seu negócio está enfrentando algum desses problemas?</h2>
        </div>
        <div className="problem-grid">
          {problems.map(([t, d], i) => (
            <article key={t}>
              <small>0{i + 1}</small>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section dark" id="servicos">
        <div className="wrap">
          <div className="heading split">
            <div>
              <p className="eyebrow">Serviços</p>
              <h2>Como posso ajudar seu negócio?</h2>
            </div>
            <p>O foco é criar uma solução útil para o momento em que sua empresa está.</p>
          </div>
          <div className="service-grid">
            {services.map(([Icon, t, d, tags]) => (
              <article className="service" key={t}>
                <Icon />
                <h3>{t}</h3>
                <p>{d}</p>
                <small>{tags}</small>
              </article>
            ))}
          </div>
          <p className="center">
            <button
              className="btn ghost"
              onClick={() => {
                track("service_clicked");
                go("#contato");
              }}
            >
              Tenho um projeto <ArrowUpRight />
            </button>
          </p>
        </div>
      </section>
      <section className="section wrap">
        <div className="result">
          <div>
            <p className="eyebrow">O que muda</p>
            <h2>Tecnologia precisa gerar resultado.</h2>
            <p className="lead">
              Uma boa solução digital simplifica a vida de quem trabalha e de quem compra.
            </p>
          </div>
          <div className="results">
            {[
              ["Mais profissionalismo", "melhora a percepção da sua marca."],
              ["Mais conversão", "facilita contatos e pedidos."],
              ["Mais organização", "centraliza processos importantes."],
              ["Mais produtividade", "reduz trabalho manual."],
            ].map(([a, b]) => (
              <p key={a}>
                <Check />
                <strong>{a}</strong>
                <br />
                {b}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="section process" id="processo">
        <div className="wrap">
          <div className="heading">
            <p className="eyebrow">Processo</p>
            <h2>Da ideia até a publicação.</h2>
          </div>
          <div className="steps">
            {[
              ["01", "Conversa", "Entendo sua necessidade, objetivo e contexto."],
              ["02", "Planejamento", "Definimos escopo, solução, prazo e investimento."],
              ["03", "Desenvolvimento", "Construo o projeto com comunicação durante o processo."],
              ["04", "Revisão", "Você acompanha, testa e solicita os ajustes necessários."],
              ["05", "Publicação", "Configuro o projeto e deixo tudo funcionando."],
            ].map(([n, t, d]) => (
              <article key={n}>
                <b>{n}</b>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="center">
            <button className="btn" onClick={() => go("#contato")}>
              Vamos conversar <ArrowUpRight />
            </button>
          </p>
        </div>
      </section>
      {/* Projetos: reativar quando houver cases para apresentar. */}
      {/* <section className="section wrap" id="projetos"><div className="heading split"><div><p className="eyebrow">Projetos</p><h2>Alguns projetos</h2></div><Portfolio label="Ver todos os projetos"/></div><div className="project-grid">{projects.map(([t,c,d],i)=><article className={`project p${i}`} key={t}><div className="shot"><i>● ● ●</i><div><aside/><main><b/><span/><span/><em/></main></div></div><section><small>{c}</small><h3>{t}</h3><p>{d}</p><a href={portfolio} target="_blank" rel="noreferrer" onClick={()=>track("project_clicked")}>Ver projeto <ArrowUpRight/></a></section></article>)}</div></section> */}
      <section className="portfolio wrap">
        <div>
          <p>Quer conhecer mais sobre minha experiência e tecnologias?</p>
          <h3>O portfólio tem mais contexto sobre minha trajetória.</h3>
        </div>
        <a className="btn ghost" href={portfolio} target="_blank" rel="noreferrer">
          Acessar meu portfólio <ExternalLink />
        </a>
      </section>
      <section className="section about wrap" id="sobre">
        <div className="monogram">ES</div>
        <div>
          <p className="eyebrow">Sobre</p>
          <h2>Quem está por trás dos projetos?</h2>
        </div>
        <div>
          <p>
            Sou Edson Silveira, Desenvolvedor de Software especializado no desenvolvimento de
            soluções Web. Trabalho com tecnologia há 3 anos, criando aplicações, sistemas e
            experiências digitais para diferentes necessidades.
          </p>
          <p>
            Meu objetivo é transformar problemas e ideias em soluções simples, modernas e
            funcionais.
          </p>
          <Portfolio label="Conhecer minha trajetória" />
        </div>
      </section>
      <section className="tech wrap">
        <p>Tecnologias utilizadas</p>
        <div>
          {[
            "React",
            "Angular",
            "TypeScript",
            "Java",
            "Spring",
            "Quarkus",
            "Node.js",
            "Tailwind",
            "Docker",
            "GCP",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>
      <section className="contact" id="contato">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">Vamos conversar</p>
            <h2>Tem uma ideia ou precisa de uma solução?</h2>
            <p className="lead">
              Me conte brevemente o que você precisa e eu entro em contato para entender o projeto.
            </p>
            <p className="note">
              <MessageCircle />
              <span>
                <strong>Sem compromisso.</strong>
                <br />O objetivo é iniciar uma boa conversa.
              </span>
            </p>
          </div>
          <form onSubmit={send} onFocus={() => track("contact_started")}>
            <label>
              Nome *<input required name="name" placeholder="Como posso te chamar?" />
            </label>
            <div className="form-row">
              <label>
                Empresa / negócio
                <input name="company" placeholder="Opcional" />
              </label>
              <label>
                WhatsApp *
                <input required name="whatsapp" type="tel" placeholder="(00) 00000-0000" />
              </label>
            </div>
            <label>
              E-mail
              <input name="email" type="email" placeholder="Opcional" />
            </label>
            <label>
              O que você precisa? *
              <select required name="service" defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {[
                  "Site",
                  "Landing Page",
                  "Sistema",
                  "Automação",
                  "Integração",
                  "Manutenção",
                  "Ainda não sei",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Conte um pouco sobre sua ideia
              <textarea name="message" rows={4} placeholder="Qual problema você quer resolver?" />
            </label>
            {status === "success" ? (
              <p className="success">
                <Check /> Recebi sua mensagem! Vou entrar em contato para entender melhor sua ideia.
              </p>
            ) : (
              <>
                <button className="btn submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    "Enviando..."
                  ) : (
                    <>
                      Quero conversar sobre meu projeto <Send />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="error">
                    Não foi possível enviar agora. Tente novamente em instantes.
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </section>
      <section className="final">
        <div className="wrap">
          <p className="eyebrow">Próximo passo</p>
          <h2>Vamos transformar sua ideia em algo real?</h2>
          <p>Conte o que você precisa. Eu te ajudo a encontrar a melhor forma de desenvolver.</p>
          <div>
            <button className="btn" onClick={() => go("#contato")}>
              Solicitar orçamento <ArrowUpRight />
            </button>
            <a className="btn ghost" href={portfolio} target="_blank" rel="noreferrer">
              Ver portfólio <ExternalLink />
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrap">
          <div>
            <button className="brand" onClick={() => go("#inicio")}>
              Edson<span>.dev</span>
            </button>
            <p>Desenvolvedor de Software</p>
          </div>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href={portfolio} target="_blank" rel="noreferrer">
              Portfólio
            </a>
            <a href={portfolio} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={portfolio} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={portfolio} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </nav>
          <small>© 2026 Edson Silveira</small>
        </div>
      </footer>
    </main>
  );
}
