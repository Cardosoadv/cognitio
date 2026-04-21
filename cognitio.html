<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cognitio Tecnologia — Ecossistema de Software — v1.2.0</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="cognitio.css">
</head>
<body>
<div id="app">

  <!-- HEADER -->
  <header class="header" :class="{scrolled:scrolled}">
    <div class="wrap header-wrap">
      <div @click="nav('home')" class="header-logo">
        <div class="logo-circle">C</div>
        <span class="logo-text">Cognitio<span class="logo-text-sub"> Tecnologia</span></span>
      </div>
      <nav class="d-hide header-nav">
        <a href="#" @click.prevent="nav('home')"     :class="['nav-link',page==='home'?'active':'']">Início</a>
        <a href="#" @click.prevent="nav('products')" :class="['nav-link',page==='products'?'active':'']">Produtos</a>
        <a href="#" @click.prevent="nav('about')"    :class="['nav-link',page==='about'?'active':'']">Sobre Nós</a>
        <a href="#" @click.prevent="nav('contact')"  :class="['nav-link',page==='contact'?'active':'']">Contato</a>
      </nav>
      <div class="header-actions">
        <button class="btn btn-p btn-sm d-hide" @click="nav('contact')"><i class="fas fa-paper-plane btn-icon-sm"></i> Solicitar Demo</button>
        <button @click="mobOpen=true" class="mob-btn"><i class="fas fa-bars"></i></button>
      </div>
    </div>
  </header>

  <!-- Mobile menu -->
  <div v-if="mobOpen" class="mob-menu">
    <button @click="mobOpen=false" class="mob-close"><i class="fas fa-times"></i></button>
    <div class="mob-logo-box">
      <div class="mob-logo-circle">C</div>
      <span class="mob-logo-text">Cognitio</span>
    </div>
    <a href="#" @click.prevent="nav('home');mobOpen=false">Início</a>
    <a href="#" @click.prevent="nav('products');mobOpen=false">Produtos</a>
    <a href="#" @click.prevent="nav('about');mobOpen=false">Sobre Nós</a>
    <a href="#" @click.prevent="nav('contact');mobOpen=false">Contato</a>
    <button class="btn btn-w mob-cta" @click="nav('contact');mobOpen=false"><i class="fas fa-paper-plane btn-icon-sm"></i> Solicitar Demo</button>
  </div>

  <!-- ══════════ HOME ══════════ -->
  <div v-if="page==='home'" class="page">

    <!-- Hero -->
    <section class="hero-bg hero-section">
      <div class="blob hero-blob-large"></div>
      <div class="blob hero-blob-medium"></div>
      <div class="wrap hero-wrap">
        <div>
          <div class="hero-badge-box">
            <span class="hero-badge-tag">NOVO</span>
            <span class="hero-badge-text">Petys 2.0 com app do tutor disponível</span>
          </div>
          <h1 class="hero-h1">Tecnologia que <em>pensa</em><br>com o seu negócio</h1>
          <p class="hero-p">5 sistemas especializados para advocacia, conselhos profissionais, odontologia, setor público e pet shops. Tudo em um ecossistema integrado.</p>
          <div class="hero-btns">
            <button class="btn btn-w" @click="nav('products')"><i class="fas fa-th-large btn-icon-sm"></i> Explorar Produtos</button>
            <button class="btn btn-gw" @click="nav('contact')">Agendar Demo <i class="fas fa-arrow-right btn-icon-sm"></i></button>
          </div>
          <div class="hero-footer">
            <p class="hero-footer-label">Confiado por organizações como</p>
            <div class="hero-clients">
              <span v-for="c in clients" :key="c" class="hero-client">{{ c }}</span>
            </div>
          </div>
        </div>
        <!-- Product mini-cards (desktop) -->
        <div class="d-hide minicar-grid">
          <div v-for="(p,i) in products" :key="p.id"
            class="minicar" :class="{'minicar-full': i===2}"
            @click="openModal(p)">
            <div class="ibox minicar-icon" :class="p.bgClass"><i :class="p.iconClass"></i></div>
            <div class="minicar-title">{{ p.name }}</div>
            <div class="minicar-desc">{{ p.shortDesc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="wrap stats-grid">
        <div class="reveal" :class="'rd'+i" v-for="(s,i) in stats" :key="s.label" class="stat-item">
          <div class="snum">{{ s.value }}</div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <!-- Products grid -->
    <section class="py-section">
      <div class="wrap">
        <div class="reveal section-header">
          <span class="stag">Portfólio</span>
          <h2 class="section-h2">Uma solução para cada setor</h2>
          <p class="section-p">Cada produto foi desenhado do zero para atender às especificidades do seu mercado.</p>
        </div>
        <div class="card-grid">
          <div class="card product-card reveal" :class="'rd'+i" v-for="(p,i) in products" :key="p.id" @click="openModal(p)">
            <div class="ibox product-card-icon" :class="p.bgClass"><i :class="p.iconClass"></i></div>
            <h3 class="product-card-h3">{{ p.name }}</h3>
            <p class="product-card-p">{{ p.shortDesc }}</p>
            <div class="product-card-link">Ver detalhes <i class="fas fa-arrow-right btn-icon-sm"></i></div>
          </div>
        </div>
        <div class="section-cta">
          <button class="btn btn-o" @click="nav('products')">Ver todos os produtos em detalhe</button>
        </div>
      </div>
    </section>

    <!-- Features dark -->
    <section class="dark-section">
      <div class="wrap">
        <div class="reveal dark-header">
          <span class="stag stag-d">Diferenciais</span>
          <h2 class="dark-h2">Por que escolher a Cognitio?</h2>
        </div>
        <div class="g2">
          <div class="reveal" :class="'rd'+i" v-for="(f,i) in features" :key="f.title" class="feature-item">
            <div class="ibox feature-icon"><i :class="f.icon"></i></div>
            <div>
              <h4 class="feature-h4">{{ f.title }}</h4>
              <p class="feature-p">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-section stats-section">
      <div class="wrap">
        <div class="reveal section-header">
          <span class="stag">Depoimentos</span>
          <h2 class="section-h2">O que nossos clientes dizem</h2>
        </div>
        <div class="g3">
          <div class="tcard reveal" :class="'rd'+i" v-for="(t,i) in testimonials" :key="t.name">
            <div class="testimonial-stars">
              <i v-for="s in 5" class="fas fa-star star-icon"></i>
            </div>
            <p class="testimonial-quote">{{ t.quote }}</p>
            <div class="testimonial-user">
              <div class="av-dynamic" :style="{'--avatar-bg': t.color}">{{ t.initials }}</div>
              <div>
                <div class="testimonial-name">{{ t.name }}</div>
                <div class="testimonial-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="hero-bg cta-final">
      <div class="blob cta-blob"></div>
      <div class="wrap rel z1">
        <span class="stag stag-d">Próximo passo</span>
        <h2 class="cta-h2">Pronto para levar sua gestão ao próximo nível?</h2>
        <p class="cta-p">Agende uma demonstração gratuita e veja o sistema ideal para o seu negócio funcionando na prática.</p>
        <div class="hero-btns justify-center">
          <button class="btn btn-w" @click="nav('contact')"><i class="fas fa-calendar-check btn-icon-sm"></i> Agendar Demo Gratuita</button>
          <button class="btn btn-gw" @click="nav('products')">Conhecer produtos</button>
        </div>
      </div>
    </section>
  </div>

  <!-- ══════════ PRODUCTS ══════════ -->
  <div v-if="page==='products'" class="page">

    <section class="stats-section py-section">
      <div class="wrap text-center">
        <nav class="prod-nav">
          <a href="#" @click.prevent="nav('home')">Início</a>
          <i class="fas fa-chevron-right btn-icon-sm"></i><span>Produtos</span>
        </nav>
        <span class="stag">Ecossistema Cognitio</span>
        <h1 class="prod-title">Nosso portfólio de sistemas</h1>
        <p class="prod-desc">Cada produto nasce de uma necessidade real. Conheça as soluções que já transformam centenas de negócios.</p>
        <div class="prod-filter">
          <button v-for="p in productsDetail" :key="p.id" @click="activeProduct===p.id?activeProduct=null:activeProduct=p.id"
            class="filter-btn" :class="{active: activeProduct===p.id}"
            :style="{'--active-color': p.color}">
            <i :class="p.iconClass"></i>{{ p.name }}
          </button>
        </div>
      </div>
    </section>

    <section class="prod-row-container">
      <div class="wrap">
        <div v-for="(p,i) in productsDetail" :key="p.id" class="prod-row"
          :style="{opacity: activeProduct && activeProduct !== p.id ? 0.3 : 1, filter: activeProduct && activeProduct !== p.id ? 'grayscale(0.6)' : 'none'}">
          <div :class="i%2===1?'rev-mob':''">
            <div class="prod-card-large"
              :style="{'--prod-light': p.light, '--prod-border': p.border, '--prod-color': p.color, '--prod-shadow': p.shadow, '--prod-icon-bg': p.iconBg, '--prod-tag-bg': p.tagBg}">
              <div class="prod-card-blob"></div>
              <div class="prod-card-iconbox">
                <i :class="p.iconClass"></i>
              </div>
              <h2 class="prod-card-h2">{{ p.name }}</h2>
              <span class="prod-card-sector">{{ p.sector }}</span>
              <div class="prod-card-tags">
                <span v-for="tag in p.tags" :key="tag" class="prod-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div :class="i%2===1?'rev-mob':''">
            <span class="prod-info-sector">{{ p.sector }}</span>
            <h3 class="prod-info-h3">{{ p.headline }}</h3>
            <p class="prod-info-p">{{ p.description }}</p>
            <ul class="prod-list">
              <li v-for="feat in p.feats" :key="feat" class="prod-list-item">
                <i class="fas fa-check-circle"></i><span>{{ feat }}</span>
              </li>
            </ul>
            <div class="hero-btns">
              <button class="btn btn-p" :style="{'background': p.color}" @click="nav('contact')">Solicitar Demo <i class="fas fa-arrow-right btn-icon-sm"></i></button>
              <button class="btn btn-o" :style="{'border-color': p.color, 'color': p.color}" @click="openModal(products.find(x=>x.id===p.id))">Visão geral</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="stats-section py-section">
      <div class="wrap m-auto" style="max-width:720px;">
        <div class="text-center" style="margin-bottom:2.5rem;">
          <span class="stag">FAQ</span>
          <h2 class="section-h2" style="font-size:clamp(1.75rem,3vw,2.3rem);">Perguntas frequentes</h2>
        </div>
        <div>
          <div class="faq-item" v-for="(f,i) in faqs" :key="i">
            <button class="faq-q" @click="faqOpen===i?faqOpen=null:faqOpen=i">
              {{ f.q }}<i class="fas fa-plus fi-icon" :class="{open:faqOpen===i}"></i>
            </button>
            <div class="faq-a" v-show="faqOpen===i">{{ f.a }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- ══════════ ABOUT ══════════ -->
  <div v-if="page==='about'" class="page">

    <section class="hero-bg about-hero">
      <div class="blob cta-blob" style="top:-80px;right:-80px;left:auto;transform:none;"></div>
      <div class="wrap text-center rel z1">
        <span class="stag stag-d">Nossa história</span>
        <h1 class="about-h1">Tecnologia com propósito,<br>impacto com <em>responsabilidade</em></h1>
        <p class="about-p">Nascemos da convicção de que boas ferramentas transformam negócios. Hoje ajudamos centenas de organizações a crescer com soluções que fazem sentido.</p>
      </div>
    </section>

    <!-- MVV -->
    <section class="py-section">
      <div class="wrap">
        <div class="g2 reveal" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr));">
          <div v-for="mv in mvv" :key="mv.title" class="mvv-card">
            <div class="ibox mvv-icon" :style="{'background': mv.bg, 'color': mv.color}"><i :class="mv.icon"></i></div>
            <h3 class="product-card-h3" style="font-size:1.2rem;">{{ mv.title }}</h3>
            <p class="prod-info-p" style="font-size:.88rem;">{{ mv.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="dark-section" style="padding:4.5rem 1.5rem;">
      <div class="wrap about-stats-grid">
        <div v-for="s in aboutStats" :key="s.label" class="about-stat-item">
          <div class="about-stat-value">{{ s.value }}</div>
          <div class="stat-label" style="color:rgba(255,255,255,0.5);">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-section">
      <div class="wrap m-auto" style="max-width:700px;">
        <div class="reveal text-center" style="margin-bottom:3rem;">
          <span class="stag">Trajetória</span>
          <h2 class="section-h2" style="font-size:clamp(1.75rem,3vw,2.4rem);">Marco a marco</h2>
        </div>
        <div>
          <div class="tl-item reveal" :class="'rd'+i" v-for="(t,i) in timeline" :key="t.year">
            <div class="tl-dot">{{ t.year }}</div>
            <div class="rel" style="padding-top:.35rem;">
              <div class="flex align-center flex-wrap" style="gap:.65rem;margin-bottom:.4rem;">
                <h4 class="feature-h4" style="color:var(--navy);">{{ t.title }}</h4>
                <span class="badge badge-dynamic" :style="{'--badge-bg': t.tagBg, '--badge-color': t.tagColor}">{{ t.tag }}</span>
              </div>
              <p class="feature-p" style="color:var(--gray);">{{ t.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="stats-section py-section">
      <div class="wrap">
        <div class="reveal text-center" style="margin-bottom:3rem;">
          <span class="stag">Pessoas</span>
          <h2 class="section-h2" style="font-size:clamp(1.75rem,3vw,2.4rem);">Quem faz a Cognitio acontecer</h2>
          <p class="section-p m-auto" style="margin-top:.75rem;max-width:480px;">Uma equipe multidisciplinar apaixonada por tecnologia e pela experiência do cliente.</p>
        </div>
        <div class="g3 reveal">
          <div class="tcard-t" v-for="m in team" :key="m.name">
            <div class="av team-av" :style="{'--team-color': m.color}">{{ m.initials }}</div>
            <h4 class="testimonial-name" style="margin-bottom:.2rem;font-size:.95rem;">{{ m.name }}</h4>
            <p class="testimonial-role" style="color:var(--sky);font-weight:700;margin-bottom:.6rem;letter-spacing:.03em;">{{ m.role }}</p>
            <p class="prod-info-p" style="font-size:.82rem;line-height:1.55;">{{ m.bio }}</p>
            <div class="flex justify-center gap-md" style="margin-top:1rem;">
              <a href="#" class="footer-nav-link" style="color:var(--border);font-size:.95rem;" onmouseover="this.style.color='#0a66c2'" onmouseout="this.style.color='var(--border)'"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="footer-nav-link" style="color:var(--border);font-size:.95rem;" onmouseover="this.style.color='var(--navy)'" onmouseout="this.style.color='var(--border)'"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Culture -->
    <section class="py-section">
      <div class="wrap hero-wrap g2sm">
        <div class="reveal">
          <span class="stag">Cultura</span>
          <h2 class="section-h2" style="font-size:clamp(1.75rem,3vw,2.4rem);margin-bottom:1rem;">O que nos move</h2>
          <p class="prod-info-p">Acreditamos que tecnologia só tem valor quando resolve problemas reais. Por isso, cada linha de código que escrevemos tem um propósito claro e um cliente em mente.</p>
          <p class="prod-info-p">Nossa cultura é de aprendizado contínuo, abertura para feedback e compromisso radical com a qualidade. Não entregamos o que é fácil — entregamos o que é certo.</p>
        </div>
        <div class="reveal flex flex-column gap-lg">
          <div v-for="v in valuesDetail" :key="v.label" class="feature-item stats-section" style="border:1px solid var(--border);border-radius:12px;padding:1.25rem;">
            <div class="ibox minicar-icon" :style="{'background': v.bg, 'color': v.color, 'width':'44px', 'height':'44px', 'font-size':'1.1rem'}"><i :class="v.icon"></i></div>
            <div>
              <h4 class="feature-h4" style="color:var(--navy);margin-bottom:.25rem;">{{ v.label }}</h4>
              <p class="prod-info-p" style="font-size:.83rem;line-height:1.55;">{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- ══════════ CONTACT ══════════ -->
  <div v-if="page==='contact'" class="page">

    <section class="stats-section py-section">
      <div class="wrap text-center">
        <nav class="prod-nav">
          <a href="#" @click.prevent="nav('home')">Início</a>
          <i class="fas fa-chevron-right btn-icon-sm"></i><span>Contato</span>
        </nav>
        <span class="stag">Fale conosco</span>
        <h1 class="prod-title" style="margin-bottom:.85rem;">Vamos conversar?</h1>
        <p class="prod-desc">Nossa equipe retorna em até 1 dia útil. Para suporte técnico de clientes, use o portal exclusivo.</p>
      </div>
    </section>

    <section class="py-section">
      <div class="wrap hero-wrap g2sm align-start">

        <!-- Left info -->
        <div>
          <h2 class="product-card-h3" style="font-size:1.5rem;margin-bottom:1.75rem;">Como nos encontrar</h2>
          <div class="contact-info-list">
            <div v-for="ci in contactInfo" :key="ci.label" class="feature-item">
              <div class="ibox feature-icon stats-section" style="width:46px;height:46px;border-radius:11px;font-size:1.1rem;color:var(--blue);"><i :class="ci.icon"></i></div>
              <div>
                <div class="contact-label">{{ ci.label }}</div>
                <div class="contact-value">{{ ci.value }}</div>
                <div v-if="ci.sub" class="contact-sub">{{ ci.sub }}</div>
              </div>
            </div>
          </div>

          <div style="border-top:1px solid var(--border);padding-top:1.5rem;margin-bottom:2rem;">
            <p class="contact-label" style="margin-bottom:.85rem;">Redes sociais</p>
            <div class="flex gap-md">
              <a href="#" class="contact-social-btn" onmouseover="this.style.background='var(--blue)';this.style.color='#fff'" onmouseout="this.style.background='var(--light)';this.style.color='var(--blue)'"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="contact-social-btn" onmouseover="this.style.background='#e1306c';this.style.color='#fff'" onmouseout="this.style.background='var(--light)';this.style.color='var(--blue)'"><i class="fab fa-instagram"></i></a>
              <a href="#" class="contact-social-btn" onmouseover="this.style.background='var(--navy)';this.style.color='#fff'" onmouseout="this.style.background='var(--light)';this.style.color='var(--blue)'"><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div class="social-interest-box">
            <p class="contact-label" style="color:var(--navy);margin-bottom:.85rem;">Produto de interesse</p>
            <div class="flex flex-wrap gap-sm">
              <span v-for="p in products" :key="p.id" @click="toggleProduct(p.name)"
                class="interest-tag" :class="{active: selectedProducts.includes(p.name)}">
                <i :class="p.iconClass.replace(/ text-.*/,'')" style="margin-right:.3rem;"></i>{{ p.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="form-box">
          <h3 class="prod-card-h3" style="font-size:1.35rem;margin-bottom:.4rem;">Envie uma mensagem</h3>
          <p class="product-card-p" style="margin-bottom:1.75rem;">Nossa equipe responde em até 1 dia útil.</p>
          <form @submit.prevent="submitForm" class="flex flex-column" style="gap:1.15rem;">
            <div class="minicar-grid" style="gap:1.15rem;">
              <div class="fg"><label>Nome *</label><input v-model="form.name" class="fi" placeholder="João" required></div>
              <div class="fg"><label>Sobrenome *</label><input v-model="form.lastName" class="fi" placeholder="Silva" required></div>
            </div>
            <div class="fg"><label>E-mail corporativo *</label><input v-model="form.email" class="fi" type="email" placeholder="joao@empresa.com.br" required></div>
            <div class="minicar-grid" style="gap:1.15rem;">
              <div class="fg"><label>Telefone</label><input v-model="form.phone" class="fi" placeholder="(31) 99999-9999"></div>
              <div class="fg"><label>Empresa</label><input v-model="form.company" class="fi" placeholder="Minha Empresa Ltda"></div>
            </div>
            <div class="fg">
              <label>Assunto *</label>
              <select v-model="form.subject" class="fi" required>
                <option value="">Selecione um assunto</option>
                <option>Demonstração de produto</option>
                <option>Orçamento</option>
                <option>Parceria comercial</option>
                <option>Suporte técnico</option>
                <option>Outro</option>
              </select>
            </div>
            <div class="fg"><label>Mensagem *</label><textarea v-model="form.message" class="fi" placeholder="Descreva sua necessidade..." required></textarea></div>
            <label class="flex gap-md pointer" style="align-items:flex-start;font-size:.8rem;color:var(--gray);line-height:1.5;">
              <input type="checkbox" v-model="form.lgpd" required style="margin-top:2px;accent-color:var(--blue);flex-shrink:0;">
              Concordo com a <a href="#" class="prod-nav" style="margin:0;font-weight:600;">&nbsp;Política de Privacidade</a>&nbsp;e autorizo o contato da Cognitio Tecnologia.
            </label>
            <button type="submit" class="btn btn-p justify-center" style="padding:.85rem;width:100%;"><i class="fas fa-paper-plane btn-icon-sm"></i> Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Map placeholder -->
    <section class="stats-section py-section">
      <div class="wrap text-center">
        <span class="stag">Localização</span>
        <h2 class="prod-info-h3" style="font-size:1.8rem;margin-bottom:.75rem;">Belo Horizonte, MG</h2>
        <p class="product-card-p" style="margin-bottom:2rem;">Estamos no coração de Minas Gerais, mas atendemos todo o Brasil.</p>
        <div class="map-container">
          <div class="blob cta-blob" style="inset:0;width:auto;height:auto;transform:none;opacity:.5;filter:none;background:linear-gradient(135deg,#dbeafe,#e0e7ff);"></div>
          <div class="rel z1 text-center">
            <div class="map-marker"><i class="fas fa-map-marker-alt"></i></div>
            <p class="contact-value" style="font-weight:700;margin-bottom:.25rem;">Cognitio Tecnologia</p>
            <p class="product-card-p">Av. do Contorno, 6594 — Savassi, BH</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid" style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem;">
        <div>
          <div class="mob-logo-box" style="margin-bottom:1rem;">
            <div class="mob-logo-circle" style="font-size:1rem;">C</div>
            <span class="mob-logo-text" style="font-size:1.15rem;">Cognitio Tecnologia</span>
          </div>
          <p class="product-card-p" style="color:rgba(255,255,255,0.5);max-width:260px;margin-bottom:1.25rem;">Sistemas inteligentes para negócios que buscam crescer with eficiência, clareza e tecnologia de verdade.</p>
          <div class="flex gap-sm">
            <a v-for="(s,i) in [{i:'fab fa-linkedin',h:'#0a66c2'},{i:'fab fa-instagram',h:'#e1306c'},{i:'fab fa-github',h:'rgba(255,255,255,.2)'}]" :key="i" href="#"
              class="footer-social-link"
              @mouseover="$event.currentTarget.style.background=s.h;$event.currentTarget.style.color='#fff'"
              @mouseout="$event.currentTarget.style.background='rgba(255,255,255,.07)';$event.currentTarget.style.color='rgba(255,255,255,.5)'">
              <i :class="s.i"></i>
            </a>
          </div>
        </div>
        <div>
          <h5 class="footer-label">Navegação</h5>
          <div class="flex flex-column" style="gap:.55rem;">
            <a href="#" @click.prevent="nav(l.id)" v-for="l in [{id:'home',label:'Início'},{id:'products',label:'Produtos'},{id:'about',label:'Sobre Nós'},{id:'contact',label:'Contato'}]" :key="l.id"
              class="footer-nav-link"
              onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">{{ l.label }}</a>
          </div>
        </div>
        <div>
          <h5 class="footer-label">Produtos</h5>
          <div class="flex flex-column" style="gap:.55rem;">
            <a href="#" @click.prevent="nav('products')" v-for="p in products" :key="p.id"
              class="footer-nav-link"
              onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">{{ p.name }}</a>
          </div>
        </div>
        <div>
          <h5 class="footer-label">Legal</h5>
          <div class="flex flex-column" style="gap:.55rem;">
            <a href="#" v-for="l in ['Termos de Uso','Privacidade','LGPD','Cookies']" :key="l"
              class="footer-nav-link"
              onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">{{ l }}</a>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2026 Cognitio Tecnologia LTDA. Todos os direitos reservados.</p>
        <p>CNPJ: 00.000.000/0001-00 &nbsp;·&nbsp; Belo Horizonte, MG</p>
      </div>
    </div>
  </footer>

  <!-- MODAL -->
  <div v-if="modal" class="modal-ov" @click.self="modal=null">
    <div class="modal-box">
      <div class="modal-header"
        :style="{'--modal-light': getDetail(modal.id).light, '--modal-icon-bg': getDetail(modal.id).iconBg, '--modal-color': getDetail(modal.id).color}">
        <div class="modal-iconbox">
          <i :class="modal.iconClass.replace(/ text-.*/,'')"></i>
        </div>
        <div>
          <h3 class="product-card-h3" style="font-size:1.5rem;margin-bottom:.15rem;">{{ modal.name }}</h3>
          <span class="prod-card-sector" style="color:var(--modal-color)">{{ getDetail(modal.id).sector }}</span>
        </div>
        <button @click="modal=null" class="mob-btn" style="margin-left:auto;display:block;color:var(--gray);"><i class="fas fa-times"></i></button>
      </div>
      <div style="padding:1.75rem 2rem;">
        <p class="prod-info-p" style="font-size:.92rem;margin-bottom:1.5rem;">{{ getDetail(modal.id).description }}</p>
        <h4 class="contact-label" style="color:var(--navy);margin-bottom:.85rem;">Principais funcionalidades</h4>
        <ul class="prod-list" style="display:grid;grid-template-columns:1fr 1fr;gap:.55rem;margin-bottom:1.75rem;">
          <li v-for="f in getDetail(modal.id).feats" :key="f" class="prod-list-item" style="font-size:.85rem;">
            <i class="fas fa-check-circle" :style="{'color': getDetail(modal.id).color}"></i>{{ f }}
          </li>
        </ul>
        <div class="flex gap-md">
          <button class="btn btn-p" :style="{'background': getDetail(modal.id).color}" style="justify-content:center;flex:1;" @click="nav('contact');modal=null">
            <i class="fas fa-calendar-check btn-icon-sm"></i> Solicitar demo
          </button>
          <button class="btn btn-o" :style="{'border-color': getDetail(modal.id).color, 'color': getDetail(modal.id).color}" @click="modal=null">Fechar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast -->
  <div v-if="toast" class="toast-bar"><i class="fas fa-check-circle"></i> Mensagem enviada! Retornaremos em até 1 dia útil.</div>

</div>

<script src="cognitio.js" defer></script>
</body>
</html>
