/* ============================================================================
   Monthly-posts template engine (vanilla, no deps).
   renderCalendar(cfg) builds the page; handles editable autosave + video slots.
   Single month: pass cfg.head / cfg.stripe / cfg.posts / cfg.foot.
   Multi month:  pass cfg.sections = [ {head,stripe,posts,foot}, ... ].
   ============================================================================ */
(function () {
  const LIKE = '<svg viewBox="0 0 24 24"><path d="M7 10v10M7 10l4-7a2 2 0 013 2l-1 5h5a2 2 0 012 2l-1 6a2 2 0 01-2 2H7"/></svg>';
  const COMMENT = '<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z"/></svg>';
  const SHARE = '<svg viewBox="0 0 24 24"><path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v13"/></svg>';

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // resolve an asset path through an optional inlined data-URI map (for bundles)
  const mediaSrc = (s) => (window.__MEDIA && window.__MEDIA[s]) ? window.__MEDIA[s] : s;

  function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

  window.renderCalendar = function (cfg) {
    const PAGE = cfg.pageId || 'page';
    const MULTI = !!(cfg.sections && cfg.sections.length);
    const store = {
      key: (i, f) => `mp:${PAGE}:${i}:${f}`,
      get: (i, f) => { try { return localStorage.getItem(store.key(i, f)); } catch (e) { return null; } },
      set: (i, f, v) => { try { localStorage.setItem(store.key(i, f), v); } catch (e) {} },
      clear: () => { try { Object.keys(localStorage).filter(k => k.startsWith('mp:' + PAGE + ':')).forEach(k => localStorage.removeItem(k)); } catch (e) {} }
    };

    const root = document.getElementById('app');

    /* make a node editable + autosaving. ns/field namespaces it; html=persist innerHTML */
    function editable(node, ns, field, html) {
      if (!node) return;
      const saved = store.get(ns, field);
      if (saved != null) { if (html) node.innerHTML = saved; else node.textContent = saved; }
      node.setAttribute('contenteditable', 'true');
      node.setAttribute('spellcheck', 'false');
      node.addEventListener('input', () => { store.set(ns, field, html ? node.innerHTML : node.textContent); });
      node.addEventListener('paste', (e) => {
        e.preventDefault();
        const txt = (e.clipboardData || window.clipboardData).getData('text');
        document.execCommand('insertText', false, txt);
      });
    }

    /* ---- top bar (once) ---- */
    root.appendChild(el(`
      <div class="top">
        <div class="logo">${esc(cfg.brandName)}<span class="dot">.</span></div>
        <div class="meta">${esc(cfg.topMeta || '')}</div>
      </div>`));

    /* ---- one or more month sections ---- */
    const sections = MULTI ? cfg.sections : [{ head: cfg.head, stripe: cfg.stripe, posts: cfg.posts, foot: cfg.foot }];
    sections.forEach((sec, si) => renderSection(sec, si));

    function renderSection(sec, si) {
      const NS = MULTI ? ('s' + si + '-') : '';
      const cardKey = (i) => MULTI ? (si + '-' + i) : i;

      const h = sec.head || {};
      const calhead = el(`
        <div class="calhead">
          <div>
            <div class="lbl">${esc(h.label || '')}</div>
            <h1>${h.h1 || ''}</h1>
          </div>
          <div class="r"><b>${esc(h.count || '')}</b><span class="rsub">${h.sub ? esc(h.sub) : ''}</span><div class="note2">${esc(h.note2 || '')}</div></div>
        </div>`);
      root.appendChild(calhead);
      editable(calhead.querySelector('.lbl'), NS + 'head', 'label');
      editable(calhead.querySelector('h1'), NS + 'head', 'h1', true);
      editable(calhead.querySelector('.r b'), NS + 'head', 'count');
      editable(calhead.querySelector('.rsub'), NS + 'head', 'sub');
      editable(calhead.querySelector('.note2'), NS + 'head', 'note2');

      if (sec.stripe && sec.stripe.length) {
        const st = el('<div class="stripe"></div>');
        sec.stripe.forEach((s, i) => {
          const span = el(`<span class="${s.cls || 'a'}">${esc(s.text)}</span>`);
          st.appendChild(span);
          editable(span, NS + 'stripe', String(i));
        });
        root.appendChild(st);
      }

      const grid = el('<div class="fgrid"></div>');
      (sec.posts || []).forEach((p, i) => grid.appendChild(buildCard(p, cardKey(i))));
      root.appendChild(grid);

      const f = sec.foot || {};
      const foot = el(`<div class="foot"><span>${esc(f.left || '')}</span><span><b>${esc(f.tag || '')}</b></span></div>`);
      root.appendChild(foot);
      editable(foot.querySelector('span'), NS + 'foot', 'left');
      editable(foot.querySelector('b'), NS + 'foot', 'tag');
    }

    /* ---- toolbar (once per page) ---- */
    if (!document.querySelector('.bar')) {
      const bar = el(`
        <div class="bar">
          <span class="hint">Click a tile to play · drag a photo or .mp4 onto it to swap · text is editable</span>
          <button data-act="save">Save copy</button>
          <button class="ghost" data-act="print">PDF</button>
          <button class="ghost" data-act="reset">Reset</button>
        </div>`);
      bar.querySelector('[data-act="print"]').onclick = () => window.print();
      bar.querySelector('[data-act="reset"]').onclick = () => {
        if (confirm('Reset all edits on this page to the original copy?')) { store.clear(); location.reload(); }
      };
      bar.querySelector('[data-act="save"]').onclick = exportCopy;
      document.body.appendChild(bar);
    }

    /* build a config object reflecting the CURRENT edits (from localStorage) */
    function currentCfg() {
      const c = JSON.parse(JSON.stringify(cfg));
      const pick = (ns, f, fb) => { const v = store.get(ns, f); return v != null ? v : fb; };
      function rebuild(sec, NS, cardPrefix) {
        sec.head = sec.head || {};
        sec.head.label = pick(NS + 'head', 'label', sec.head.label);
        sec.head.h1 = pick(NS + 'head', 'h1', sec.head.h1);
        sec.head.count = pick(NS + 'head', 'count', sec.head.count);
        sec.head.sub = pick(NS + 'head', 'sub', sec.head.sub);
        sec.head.note2 = pick(NS + 'head', 'note2', sec.head.note2);
        (sec.stripe || []).forEach((s, i) => { s.text = pick(NS + 'stripe', String(i), s.text); });
        sec.foot = sec.foot || {};
        sec.foot.left = pick(NS + 'foot', 'left', sec.foot.left);
        sec.foot.tag = pick(NS + 'foot', 'tag', sec.foot.tag);
        (sec.posts || []).forEach((p, i) => {
          const key = cardPrefix == null ? i : (cardPrefix + i);
          p.budget = pick(key, 'bud', p.budget);
          p.date = pick(key, 'dt', p.date);
          p.platforms = pick(key, 'pl', p.platforms);
          p.beat = pick(key, 'beat', p.beat);
          p.script = pick(key, 'script', p.script);
        });
      }
      if (c.sections && c.sections.length) { c.sections.forEach((sec, si) => rebuild(sec, 's' + si + '-', si + '-')); }
      else { rebuild(c, '', null); }
      return c;
    }

    /* export a fresh self-contained HTML with the current edits as the new defaults */
    function exportCopy() {
      const d = new DOMParser().parseFromString('<!DOCTYPE html>' + document.documentElement.outerHTML, 'text/html');
      d.querySelectorAll('.bar').forEach(n => n.remove());            // drop toolbar (re-added on load)
      const app = d.getElementById('app'); if (app) app.innerHTML = ''; // clear rendered DOM; engine re-renders
      const cfgScript = [...d.querySelectorAll('script')].find(s => !s.src && /renderCalendar\s*\(/.test(s.textContent));
      if (cfgScript) cfgScript.textContent = 'renderCalendar(' + JSON.stringify(currentCfg()) + ');';
      const html = '<!DOCTYPE html>\n' + d.documentElement.outerHTML;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
      a.download = (cfg.brandName || 'Posts') + ' Monthly Posts (edited).html';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    }

    /* ============================ card builder ============================ */
    function buildCard(p, key) {
      const card = el('<div class="fcard"></div>');

      // header
      const initial = (cfg.avatarChar || cfg.brandName[0] || '•');
      card.appendChild(el(`
        <div class="chead">
          <div class="av">${esc(initial)}</div>
          <div class="who"><div class="nm">${esc(cfg.brandName)}</div><div class="sb">${esc(p.sub || '')}</div></div>
          <span class="bud" contenteditable="true" data-key="bud" spellcheck="false">${esc(store.get(key, 'bud') || p.budget || '')}</span>
        </div>`));

      // media / video slot
      const media = el('<div class="media"></div>');
      if (p.product) media.classList.add('product');
      if (p.beat) { const b = el(`<span class="beat ${p.beatAlt ? 'alt' : ''}">${esc(p.beat)}</span>`); media.appendChild(b); editable(b, key, 'beat'); }
      media.appendChild(el(`<div class="dur"><span class="rec"></span>${esc(p.dur || '0:07')}</div>`));
      media.appendChild(el(`<div class="slot"><div class="scene">${esc(p.scene || '')}</div><div class="add">+ add clip or photo</div></div>`));
      const play = el('<div class="play empty"></div>');
      media.appendChild(play);
      if (p.poster) { media.classList.add('has-poster'); media.appendChild(el(`<img src="${esc(mediaSrc(p.poster))}" alt="">`)); }

      // video element — only auto-attached when a real clip exists (p.hasClip).
      let video = null;
      if (p.hasClip && p.video) {
        video = el(`<video preload="metadata" muted loop playsinline ${p.poster ? `poster="${esc(p.poster)}"` : ''}></video>`);
        const src = document.createElement('source'); src.src = p.video; video.appendChild(src);
        video.addEventListener('loadeddata', () => { media.classList.add('has-video'); });
        media.appendChild(video);
        video.load();
      }

      const hiddenInput = el('<input type="file" accept="video/*,image/*" style="display:none">');
      media.appendChild(hiddenInput);

      function attachClip(url) {
        if (!video) {
          video = el(`<video preload="metadata" muted loop playsinline ${p.poster ? `poster="${esc(p.poster)}"` : ''}></video>`);
          media.appendChild(video);
        }
        video.innerHTML = '';
        const s = document.createElement('source'); s.src = url; video.appendChild(s);
        video.load();
        video.addEventListener('loadeddata', () => { media.classList.add('has-video'); video.play().then(playUI).catch(() => {}); }, { once: true });
      }
      function attachImage(url) {
        let img2 = media.querySelector('img.user-img');
        if (!img2) { img2 = document.createElement('img'); img2.className='user-img'; img2.alt=''; media.appendChild(img2); }
        img2.src = url;
        media.classList.add('has-poster');
        media.classList.remove('has-video');
        if (video) { video.pause(); media.classList.remove('playing'); }
      }
      function playUI() { media.classList.add('playing'); }
      function pauseUI() { media.classList.remove('playing'); }

      media.addEventListener('click', (e) => {
        if (e.target === hiddenInput) return;
        if (e.target.isContentEditable || e.target.closest('[contenteditable]')) return;
        if (media.classList.contains('has-video') && video) {
          if (video.paused) { video.play().then(playUI).catch(() => {}); } else { video.pause(); pauseUI(); }
        } else { hiddenInput.click(); }
      });
      hiddenInput.addEventListener('change', () => {
        const file = hiddenInput.files && hiddenInput.files[0];
        if (!file) return;
        if (file.type.startsWith('image/')) attachImage(URL.createObjectURL(file));
        else attachClip(URL.createObjectURL(file));
      });

      media.addEventListener('dragover', (e) => { e.preventDefault(); media.classList.add('drop'); });
      media.addEventListener('dragleave', () => media.classList.remove('drop'));
      media.addEventListener('drop', (e) => {
        e.preventDefault(); media.classList.remove('drop');
        const files = [...(e.dataTransfer.files || [])];
        const imgFile = files.find(f => f.type.startsWith('image/'));
        const vidFile = files.find(f => f.type.startsWith('video/'));
        if (imgFile) attachImage(URL.createObjectURL(imgFile));
        else if (vidFile) attachClip(URL.createObjectURL(vidFile));
      });

      card.appendChild(media);

      // action row + save flag
      const acts = el(`<div class="acts">${LIKE}${COMMENT}${SHARE}<span class="spacer"></span><span class="save">saved</span></div>`);
      card.appendChild(acts);
      const saveFlag = acts.querySelector('.save');
      let t;
      function flagSaved() { saveFlag.classList.add('on'); clearTimeout(t); t = setTimeout(() => saveFlag.classList.remove('on'), 1200); }

      // body: meta (date · platforms) + editable script
      const body = el(`
        <div class="cbody">
          <div class="cmeta">
            <span class="dt" contenteditable="true" data-key="dt" spellcheck="false">${esc(store.get(key, 'dt') || p.date || '')}</span>
            <span class="sep">·</span>
            <span class="pl" contenteditable="true" data-key="pl" spellcheck="false">${esc(store.get(key, 'pl') || p.platforms || '')}</span>
          </div>
          <div class="cscript" contenteditable="true" data-key="script" data-ph="${esc(p.ph || 'Write the post copy…')}"></div>
        </div>`);
      const script = body.querySelector('.cscript');
      const savedScript = store.get(key, 'script');
      script.textContent = (savedScript != null) ? savedScript : (p.script || '');
      card.appendChild(body);

      // autosave wiring for every editable field in this card
      card.querySelectorAll('[contenteditable][data-key]').forEach(node => {
        node.addEventListener('input', () => { store.set(key, node.dataset.key, node.textContent); flagSaved(); });
        node.addEventListener('paste', (e) => {
          e.preventDefault();
          const txt = (e.clipboardData || window.clipboardData).getData('text');
          document.execCommand('insertText', false, txt);
        });
      });

      return card;
    }
  };
})();
