
function $(s, root=document){return root.querySelector(s)}
function $all(s, root=document){return [...root.querySelectorAll(s)]}
function imgTag(src, alt='', cls=''){
  return `<img ${cls ? `class="${cls}"` : ''} src="${src}" alt="${alt}" onerror="this.onerror=null;this.src='${imgFallback}'">`;
}
function renderTabbar(){
  const tab = $('.tabbar');
  if(!tab) return;
  const page = document.body.dataset.page;
  const tabs = [
    ['home','index.html','🏠','首页'],['category','category.html','▦','分类'],['cart','cart.html','🛒','购物车'],['user','user.html','👤','我的']
  ];
  tab.innerHTML = tabs.map(t=>`<a class="${page===t[0]?'active':''}" href="${t[1]}"><i>${t[2]}</i><span>${t[3]}</span></a>`).join('');
}
function productCard(p){
  return `<a class="product-card" href="detail.html?id=${p.id}">${imgTag(p.img,p.name)}<div class="product-info"><div class="product-title">${p.name}</div><div><span class="badge">${p.tag}</span><span class="product-meta">已售 ${p.sales}</span></div><div style="margin-top:7px"><span class="price">${money(p.price)}</span><span class="old-price">${money(p.old)}</span></div></div></a>`;
}
function listCard(p){
  return `<a class="list-card" href="detail.html?id=${p.id}">${imgTag(p.img,p.name)}<div style="flex:1"><div class="product-title">${p.name}</div><p class="desc">${p.desc}</p><div><span class="badge">${p.tag}</span><span class="badge">包邮</span></div><div style="margin-top:8px"><span class="price">${money(p.price)}</span><span class="old-price">${money(p.old)}</span></div><div class="sale">${p.cat} · 已售 ${p.sales} 件</div></div></a>`;
}
function initHome(){
  const banner = $('.banner');
  if(banner){
    let i=0;
    function draw(){
      const b = banners[i % banners.length];
      banner.innerHTML = `<img src="${b.img}" alt="${b.title}" onerror="this.onerror=null;this.src='${bannerFallback}'"><div class="banner-text"><h2>${b.title}</h2><p>${b.sub}</p></div><div class="dots">${banners.map((_,idx)=>`<span class="dot ${idx===i?'active':''}"></span>`).join('')}</div>`;
    }
    draw(); setInterval(()=>{i=(i+1)%banners.length; draw()}, 3000);
  }
  const flash = $('#flashProducts');
  if(flash) flash.innerHTML = products.slice(2,8).map(p=>`<a class="flash-card" href="detail.html?id=${p.id}">${imgTag(p.img,p.name)}<b>${p.name}</b><span class="price">${money(p.price)}</span></a>`).join('');
  const grid = $('#homeProducts');
  if(grid) grid.innerHTML = products.map(productCard).join('');
  const search = $('#homeSearch');
  if(search) search.addEventListener('keydown',e=>{ if(e.key==='Enter') location.href='list.html?q='+encodeURIComponent(search.value.trim()) });
}
function initCategory(){
  const side = $('#categorySide'), main = $('#categoryMain');
  if(!side||!main) return;
  side.innerHTML = categories.map((c,i)=>`<button class="cat-btn ${i===0?'active':''}" data-i="${i}"><span class="cat-btn-icon">${c.icon}</span><span>${c.name}</span></button>`).join('');
  main.innerHTML = categories.map((c,i)=>`
    <section class="cat-panel ${i===0?'active':''}">
      <div class="cat-hero">
        <img src="${c.img}" alt="${c.name}" onerror="this.onerror=null;this.src='${bannerFallback}'">
        <div><b>${c.name}</b><span>精选分类 · 热门好物</span></div>
      </div>
      <h3>热门分类</h3>
      <div class="cat-grid">
        ${c.items.map(it=>`<a class="cat-item" href="list.html?cat=${encodeURIComponent(c.name)}"><img src="${it.img}" alt="${it.name}" onerror="this.onerror=null;this.src='${imgFallback}'"><span>${it.name}</span></a>`).join('')}
      </div>
    </section>`).join('');
  side.addEventListener('click',e=>{ const btn=e.target.closest('.cat-btn'); if(!btn)return; const idx=+btn.dataset.i; $all('.cat-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); $all('.cat-panel').forEach((p,i)=>p.classList.toggle('active',i===idx)); });
}
function initList(){
  const wrap=$('#listProducts'), filters=$('#filterBar'); if(!wrap) return;
  const cats=['全部',...new Set(products.map(p=>p.cat))];
  if(filters) filters.innerHTML=cats.map((c,i)=>`<button class="${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
  function render(cat='全部'){
    const arr=cat==='全部'?products:products.filter(p=>p.cat===cat);
    wrap.innerHTML=arr.map(listCard).join('') || '<p class="empty-note">暂无相关商品</p>';
  }
  render();
  filters?.addEventListener('click',e=>{const b=e.target.closest('button'); if(!b)return; $all('#filterBar button').forEach(x=>x.classList.remove('active')); b.classList.add('active'); render(b.dataset.cat)});
}
function getProduct(){const id=new URLSearchParams(location.search).get('id')||'5'; return products.find(p=>p.id==id)||products[4];}
function initDetail(){
  const box=$('#detailPage'); if(!box)return; const p=getProduct();
  box.innerHTML=`<div class="detail-hero"><img src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='${imgFallback}'"></div><section class="detail-card"><div class="row"><div><span class="price" style="font-size:26px">${money(p.price)}</span><span class="old-price">${money(p.old)}</span></div><span class="badge">${p.tag}</span></div><div class="detail-title">${p.name}</div><p class="detail-sub">${p.desc}</p><div class="thumbs"><img src="${p.img}" onerror="this.onerror=null;this.src='${imgFallback}'"><img src="${products[(p.id)%products.length].img}" onerror="this.onerror=null;this.src='${imgFallback}'"><img src="${products[(p.id+1)%products.length].img}" onerror="this.onerror=null;this.src='${imgFallback}'"></div></section><section class="detail-card"><div class="spec-row"><span>发货</span><b>48 小时内发货</b></div><div class="spec-row"><span>服务</span><b>7 天无理由 · 退货包运费</b></div><div class="spec-row"><span>规格</span><b>默认规格 / 颜色随机</b></div><div class="spec-row"><span>销量</span><b>${p.sales} 件</b></div></section>`;
  $('#addCart')?.addEventListener('click',()=>alert('已加入购物车：'+p.name));
  $('#buyNow')?.addEventListener('click',()=>location.href='order.html?id='+p.id);
}
const cartState = products.slice(2,5).map((p,i)=>({...p,qty:i+1}));
function initCart(){
  const wrap=$('#cartList'), total=$('#cartTotal'); if(!wrap)return;
  function draw(){
    wrap.innerHTML=cartState.map((p,i)=>`<div class="cart-item"><div class="check">✓</div>${imgTag(p.img,p.name)}<div class="cart-info"><div class="product-title">${p.name}</div><div><span class="price">${money(p.price)}</span></div><div class="qty"><button data-i="${i}" data-op="-">-</button><span>${p.qty}</span><button data-i="${i}" data-op="+">+</button></div></div></div>`).join('');
    const sum=cartState.reduce((s,p)=>s+p.price*p.qty,0); if(total) total.textContent=money(sum);
  }
  draw();
  wrap.addEventListener('click',e=>{const b=e.target.closest('button'); if(!b)return; const i=+b.dataset.i; cartState[i].qty += b.dataset.op==='+'?1:-1; if(cartState[i].qty<1) cartState[i].qty=1; draw();});
}
function initOrder(){
  const p=getProduct(); const item=$('#orderItem');
  if(item) item.innerHTML=`
    <div class="order-address order-card">
      <div class="row">
        <div>
          <b>云南大学软件学院</b>
          <p class="muted">云南省昆明市呈贡区大学城示例地址</p>
        </div>
        <a class="chip" href="address.html">修改</a>
      </div>
    </div>
    <div class="order-card">
      <div class="order-shop-title">云购优选旗舰店</div>
      <div class="order-product">
        <img class="order-img" src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='${imgFallback}'">
        <div class="order-product-info">
          <b>${p.name}</b>
          <p class="muted">默认规格 · 数量 × 1</p>
          <div class="order-price-row"><span class="price">${money(p.price)}</span><span class="muted">7天无理由退换</span></div>
        </div>
      </div>
    </div>
    <div class="order-card order-summary">
      <div class="row"><span>商品金额</span><b>${money(p.price)}</b></div>
      <div class="row"><span>运费</span><b>¥0</b></div>
      <div class="row"><span>优惠</span><b class="price">-¥0</b></div>
      <div class="row final-pay"><span>应付金额</span><span class="total">${money(p.price)}</span></div>
    </div>`;
}
function initAddress(){
  const list=$('#addressList'); if(list) list.innerHTML=`<div class="address-card"><div class="row"><b>张同学 138****2026</b><span class="badge">默认</span></div><p class="muted">云南省昆明市呈贡区云南大学软件学院</p></div><div class="address-card"><div class="row"><b>李同学 139****0717</b><span class="muted">编辑</span></div><p class="muted">云南省昆明市五华区学府路示例小区</p></div>`;
}
function initAuth(){
  $all('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault(); alert('表单校验通过，跳转到个人中心'); location.href='user.html'}));
}
function initUser(){
  const rec=$('#userRec'); if(rec) rec.innerHTML=products.slice(0,4).map(productCard).join('');
}
function init(){renderTabbar(); initHome(); initCategory(); initList(); initDetail(); initCart(); initOrder(); initAddress(); initAuth(); initUser();}
document.addEventListener('DOMContentLoaded', init);
