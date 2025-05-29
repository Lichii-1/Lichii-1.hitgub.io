const products = [
  {
    id: 1,
    name: "Malla de Ballet Clásica",
    price: 14000,
    category: "ballet",
    type: "malla",
    image: "images/Ballet1.webp",
    description: "Malla de ballet en algodón elástico con tirantes ajustables.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Rosa", "Blanco"],
  },
  {
    id: 2,
    name: "Zapatillas de Punta Profesional",
    price: 20000,
    category: "ballet",
    type: "calzado",
    image: "images/Ballet2.jpg",
    description: "Zapatillas de punta con refuerzo en la suela y cintas incluidas.",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"],
    colors: ["Rosa", "Beige"],
  },
  {
    id: 3,
    name: "Zapatillas de Ballet Media Punta",
    price: 16000,
    category: "ballet",
    type: "calzado",
    image: "images/Ballet3.jpg",
    description: "Zapatillas de lona con suela dividida para mayor flexibilidad.",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"],
    colors: ["Rosa", "Negro", "Beige"],
  },
  {
    id: 4,
    name: "Falda de Ballet Gasa",
    price: 11000,
    category: "ballet",
    type: "falda",
    image: "images/Ballet4.avif",
    description: "Falda de gasa transparente con elástico en la cintura.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Rosa", "Blanco", "Celeste"],
  },
  {
    id: 5,
    name: "Tutú Clásico",
    price: 15000,
    category: "ballet",
    type: "tutu",
    image: "images/Ballet5.jpg",
    description: "Tutú profesional con corpino bordado y falda de tul.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blanco", "Rosa", "Azul", "Rojo"],
  },
  {
    id: 6,
    name: "Calentadores de Piernas",
    price: 10000,
    category: "ballet",
    type: "accesorio",
    image: "images/Ballet 6.jpg",
    description: "Calentadores de lana para mantener músculos calientes.",
    sizes: ["Único"],
    colors: ["Negro", "Gris", "Rosa", "Blanco"],
  },
  {
    id: 7,
    name: "Top Jazz Deportivo",
    price: 8000,
    category: "jazz",
    type: "top",
    image: "images/Jazz1.jpg",
    description: "Top deportivo con soporte y diseño moderno.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Azul", "Rojo", "Verde"],
  },
  {
    id: 8,
    name: "Pantalón Jazz Ajustado",
    price: 12000,
    category: "jazz",
    type: "pantalon",
    image: "images/Jazz2.jpg",
    description: "Pantalón elástico de lycra para máxima movilidad.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Azul Marino", "Gris"],
  },
  {
    id: 9,
    name: "Zapatillas Jazz Split Sole",
    price: 25000,
    category: "jazz",
    type: "calzado",
    image: "images/Jazz3.webp",
    description: "Zapatillas de jazz con suela dividida y cordones.",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"],
    colors: ["Negro", "Marrón", "Beige"],
  },
  {
    id: 10,
    name: "Shorts Jazz Alto",
    price: 10000,
    category: "jazz",
    type: "short",
    image: "images/Jazz4.jpg",
    description: "Shorts de lycra con cintura alta y ajuste perfecto.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Azul", "Rojo", "Verde"],
  },
  {
    id: 11,
    name: "Conjunto Jazz Completo",
    price: 15000,
    category: "jazz",
    type: "conjunto",
    image: "images/Jazz5.jpg",
    description: "Set de top y short coordinados para jazz.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Azul", "Negro", "Gris/Rosa", "Azul/Blanco"],
  },
  {
    id: 12,
    name: "Vestido Contemporáneo Fluido",
    price: 10000,
    category: "contemporaneo",
    type: "vestido",
    image: "images/Contempo1.jpg",
    description: "Vestido de tela suave que se mueve con la danza.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Blanco", "Gris", "Azul"],
  },
  {
    id: 13,
    name: "Top Contemporáneo Asimétrico",
    price: 12000,
    category: "contemporaneo",
    type: "top",
    image: "images/Contempo2.jpg",
    description: "Top con diseño asimétrico y tela elástica.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Gris", "Beige", "Azul"],
  },
  {
    id: 14,
    name: "Pantalón Contemporáneo Palazzo",
    price: 14000,
    category: "contemporaneo",
    type: "pantalon",
    image: "images/Contempo3.jpg",
    description: "Pantalón palazzo amplio para movimientos expresivos.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Gris", "Azul Marino", "Beige"],
  },
  {
    id: 15,
    name: "Metatarsianas Contemporáneo",
    price: 15000,
    category: "contemporaneo",
    type: "calzado",
    image: "images/Contempo4.jpg",
    description: "Protectores de pies para danza descalza.",
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
    colors: ["Beige", "Negro"],
  },
  {
    id: 16,
    name: "Conjunto Hip Hop Urbano",
    price: 28000,
    category: "hip-hop",
    type: "conjunto",
    image: "images/Urbano1.jpg",
    description: "Set urbano con remera oversized y joggers.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Negro/Gris", "Azul/Negro", "Rojo/Negro"],
  },
  {
    id: 17,
    name: "Zapatillas Hip Hop",
    price: 42000,
    category: "hip-hop",
    type: "calzado",
    image: "images/Urbano2.webp",
    description: "Zapatillas con suela antideslizante.",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
    colors: ["Gris", "Negro", "Blanco", "Rojo", "Azul"],
  },
  {
    id: 18,
    name: "Gorra Hip Hop Snapback",
    price: 10500,
    category: "hip-hop",
    type: "accesorio",
    image: "images/Urbano3.jpeg",
    description: "Gorra ajustable para completar el look urbano.",
    sizes: ["Único"],
    colors: ["Negro", "Azul", "Rojo", "Gris"],
  },
  {
    id: 19,
    name: "Joggers Hip Hop",
    price: 18000,
    category: "hip-hop",
    type: "pantalon",
    image: "images/Urbano4.jpg",
    description: "Pantalón jogger cómodo con puños elásticos.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Gris", "Azul Marino", "Verde"],
  },
  {
    id: 20,
    name: "Zapatillas de Tap Profesional",
    price: 30000,
    category: "tap",
    type: "calzado",
    image: "images/Tap1.jpeg",
    description: "Zapatillas de tap con placas de metal de calidad.",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"],
    colors: ["Negro", "Marrón"],
  },
  {
    id: 21,
    name: "Falda Tap Asimetrica",
    price: 14000,
    category: "tap",
    type: "falda",
    image: "images/Tap2.jpg",
    description: "Falda asimetrica que se mueve con los pasos de tap.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Rojo", "Azul", "Verde"],
  },
  {
    id: 22,
    name: "Shorts Tap Clásico",
    price: 12000,
    category: "tap",
    type: "short",
    image: "images/Tap3.webp",
    description: "Shorts cómodos para clases de tap.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Azul Marino", "Gris"],
  },
  {
    id: 23,
    name: "Buzo Deportivo NB",
    price: 3200,
    category: "uniformes",
    type: "buzo",
    image: "/placeholder.svg?height=200&width=280",
    description: "Buzo cómodo con capucha y logo bordado NB.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Azul Marino", "Negro", "Gris", "Celeste"],
  },
  {
    id: 24,
    name: "Calza Deportiva Básica",
    price: 1800,
    category: "uniformes",
    type: "calza",
    image: "/placeholder.svg?height=200&width=280",
    description: "Calza de lycra con cintura alta y logo lateral.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Azul Marino", "Gris", "Celeste"],
  },
  {
    id: 25,
    name: "Pantalón Deportivo Recto",
    price: 2500,
    category: "uniformes",
    type: "pantalon",
    image: "/placeholder.svg?height=200&width=280",
    description: "Pantalón deportivo con cordón ajustable y bolsillos.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Azul Marino", "Negro", "Gris"],
  },
  {
    id: 26,
    name: "Remera Deportiva NB",
    price: 1500,
    category: "uniformes",
    type: "remera",
    image: "/placeholder.svg?height=200&width=280",
    description: "Remera de algodón con logo NB estampado.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blanco", "Azul Marino", "Negro", "Celeste", "Gris"],
  },
  {
    id: 27,
    name: "Campera Deportiva",
    price: 4200,
    category: "uniformes",
    type: "campera",
    image: "/placeholder.svg?height=200&width=280",
    description: "Campera deportiva con cierre y capucha desmontable.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Azul Marino", "Negro", "Gris"],
  },
  {
    id: 28,
    name: "Short Deportivo",
    price: 1200,
    category: "uniformes",
    type: "short",
    image: "/placeholder.svg?height=200&width=280",
    description: "Short deportivo con cordón y bolsillos laterales.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Azul Marino", "Negro", "Gris", "Celeste"],
  },
  {
    id: 29,
    name: "Bolso de Danza Grande",
    price: 25000,
    category: "accesorios",
    type: "bolso",
    image: "images/Accesorios1.jpg",
    description: "Bolso espacioso con compartimentos para zapatillas.",
    sizes: ["Único"],
    colors: ["Negro", "Azul", "Rosa", "Gris"],
  },
  {
    id: 30,
    name: "Toalla de Microfibra",
    price: 8000,
    category: "accesorios",
    type: "toalla",
    image: "images/Accesorios2.webp",
    description: "Toalla absorbente y de secado rápido.",
    sizes: ["Único"],
    colors: ["Azul", "Rosa", "Gris", "Blanco"],
  },
  {
    id: 31,
    name: "Botella de Agua Deportiva",
    price: 12000,
    category: "accesorios",
    type: "botella",
    image: "images/Accesorios3.webp",
    description: "Botella con pico deportivo y diseño ergonómico.",
    sizes: ["750ml"],
    colors: ["Azul", "Rosa", "Negro", "Transparente"],
  },
  {
    id: 32,
    name: "Vincha Deportiva",
    price: 5000,
    category: "accesorios",
    type: "vincha",
    image: "images/Accesorios4.jpg",
    description: "Vincha elástica que mantiene el cabello en su lugar.",
    sizes: ["Único"],
    colors: ["Negro", "Azul", "Rosa", "Blanco", "Gris"],
  },
]

let cart = JSON.parse(localStorage.getItem("cart")) || []

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }
  if (document.getElementById("products-container")) {
    loadProducts()
    setupFilters()
  }
  if (document.getElementById("cart-items")) {
    loadCart()
  }
})

function loadProducts(filter = "all") {
  const container = document.getElementById("products-container")
  if (!container) return

  const filteredProducts = filter === "all" ? products : products.filter((product) => product.category === filter)

  container.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-details">
                    <div class="product-price">$${product.price}</div>
                    <div class="product-options">
                        <div class="size-selector">
                            <label>Talle:</label>
                            <select id="size-${product.id}">
                                ${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join("")}
                            </select>
                        </div>
                        <div class="color-selector">
                            <label>Color:</label>
                            <select id="color-${product.id}">
                                ${product.colors.map((color) => `<option value="${color}">${color}</option>`).join("")}
                            </select>
                        </div>
                    </div>
                </div>
                <div class="product-actions">
                    <input type="number" class="quantity-input" value="1" min="1" max="10" id="qty-${product.id}">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function setupFilters() {
  const filter = document.getElementById("category-filter")
  if (filter) {
    filter.addEventListener("change", function () {
      loadProducts(this.value)
    })
  }
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  const quantity = Number.parseInt(document.getElementById(`qty-${productId}`).value)
  const selectedSize = document.getElementById(`size-${productId}`).value
  const selectedColor = document.getElementById(`color-${productId}`).value

  const cartItemId = `${productId}-${selectedSize}-${selectedColor}`
  const existingItem = cart.find((item) => item.cartItemId === cartItemId)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      ...product,
      cartItemId: cartItemId,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
      quantity: quantity,
    })
  }

  saveCart()
  updateCartCount()

  showToast(`${product.name} agregado al carrito`, "success")

  const btn = event.target
  const originalText = btn.textContent
  btn.textContent = "¡Agregado!"
  btn.style.backgroundColor = "#10b981"

  setTimeout(() => {
    btn.textContent = originalText
    btn.style.backgroundColor = ""
  }, 1000)
}

function loadCart() {
  const container = document.getElementById("cart-items")
  if (!container) return

  if (cart.length === 0) {
    container.innerHTML = `
            <div class="empty-cart">
                <h3>Tu carrito está vacío</h3>
                <p>¡Agrega algunos productos para comenzar!</p>
                <a href="productos.html" class="btn-primary">Ver Productos</a>
            </div>
        `
    updateCartSummary()
    return
  }

  container.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Talle: ${item.selectedSize} | Color: ${item.selectedColor}</p>
                <p class="item-price">$${item.price} c/u</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity('${item.cartItemId}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.cartItemId}', 1)">+</button>
            </div>
            <div class="cart-item-total">
                <p><strong>$${item.price * item.quantity}</strong></p>
                <button class="remove-btn" onclick="removeFromCart('${item.cartItemId}')">Eliminar</button>
            </div>
        </div>
    `,
    )
    .join("")

  updateCartSummary()
  setupCheckout()
}

function updateQuantity(cartItemId, change) {
  const item = cart.find((item) => item.cartItemId === cartItemId)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(cartItemId)
    } else {
      saveCart()
      loadCart()
      updateCartCount()
    }
  }
}

function removeFromCart(cartItemId) {
  cart = cart.filter((item) => item.cartItemId !== cartItemId)
  saveCart()
  loadCart()
  updateCartCount()
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 500 : 0
  const total = subtotal + shipping

  const subtotalEl = document.getElementById("subtotal")
  const shippingEl = document.getElementById("shipping")
  const totalEl = document.getElementById("total")

  if (subtotalEl) subtotalEl.textContent = `$${subtotal}`
  if (shippingEl) shippingEl.textContent = `$${shipping}`
  if (totalEl) totalEl.textContent = `$${total}`
}

function setupCheckout() {
  const checkoutBtn = document.getElementById("checkout-btn")
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showModal({
          type: "warning",
          title: "Carrito Vacío",
          message: "Tu carrito está vacío. ¡Agrega algunos productos para comenzar!",
          actions: [
            {
              text: "Ver Productos",
              class: "modal-btn-primary",
              action: () => {
                window.location.href = "productos.html"
              },
            },
            {
              text: "Cerrar",
              class: "modal-btn-secondary",
              action: () => closeModal(),
            },
          ],
        })
        return
      }

      const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const shipping = 500
      const total = subtotal + shipping

      let orderSummary = ""
      cart.forEach((item) => {
        orderSummary += `<div class="order-item">
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-details">
            <div>Talle: ${item.selectedSize} | Color: ${item.selectedColor}</div>
            <div>Cantidad: ${item.quantity} x $${item.price} = $${item.price * item.quantity}</div>
          </div>
        </div>`
      })

      orderSummary += `<div class="order-summary-totals">
        <div>Subtotal: $${subtotal}</div>
        <div>Envío: $${shipping}</div>
        <div class="order-summary-total">TOTAL: $${total}</div>
      </div>`

      showModal({
        type: "info",
        title: "Confirmar Pedido",
        message: "Revisa tu pedido antes de confirmar:",
        orderSummary: orderSummary,
        showLogo: true,
        actions: [
          {
            text: "Confirmar Compra",
            class: "modal-btn-success",
            action: () => {
              closeModal()
              setTimeout(() => {
                showModal({
                  type: "success",
                  title: "¡Compra Exitosa!",
                  message: `¡Gracias por tu compra! Tu pedido por $${total} ha sido procesado correctamente. Te contactaremos pronto para coordinar el pago y envío.`,
                  showLogo: true,
                  showCheckmark: true,
                  actions: [
                    {
                      text: "Continuar Comprando",
                      class: "modal-btn-primary",
                      action: () => {
                        cart = []
                        saveCart()
                        loadCart()
                        updateCartCount()
                        closeModal()
                        window.location.href = "productos.html"
                      },
                    },
                    {
                      text: "Ir al Inicio",
                      class: "modal-btn-secondary",
                      action: () => {
                        cart = []
                        saveCart()
                        loadCart()
                        updateCartCount()
                        closeModal()
                        window.location.href = "index.html"
                      },
                    },
                  ],
                })
              }, 300)
            },
          },
          {
            text: "Cancelar",
            class: "modal-btn-secondary",
            action: () => closeModal(),
          },
        ],
      })
    })
  }
}

function showModal(config) {
  const overlay = document.createElement("div")
  overlay.className = "modal-overlay"
  overlay.id = "modal-overlay"

  const iconMap = {
    success: "🎉",
    warning: "⚠️",
    info: "ℹ️",
  }

  const modal = document.createElement("div")
  modal.className = "modal"
  if (config.type === "success") {
    modal.classList.add("success-animation")
  }

  const logoHtml = config.showLogo ? '<div class="modal-logo">NB</div>' : ""
  const checkmarkHtml = config.showCheckmark ? '<div class="success-checkmark"></div>' : ""
  const iconHtml = config.showCheckmark ? "" : `<div class="modal-icon ${config.type}">${iconMap[config.type]}</div>`

  modal.innerHTML = `
    <div class="modal-header ${config.showLogo ? "with-logo" : ""}">
      ${logoHtml}
      ${checkmarkHtml}
      ${iconHtml}
      <h3>${config.title}</h3>
    </div>
    <div class="modal-body">
      <p>${config.message}</p>
      ${config.orderSummary ? `<div class="modal-order-summary">${config.orderSummary}</div>` : ""}
    </div>
    <div class="modal-actions">
      ${config.actions.map((action) => `<button class="modal-btn ${action.class}">${action.text}</button>`).join("")}
    </div>
  `

  overlay.appendChild(modal)
  document.body.appendChild(overlay)

  setTimeout(() => {
    overlay.classList.add("active")
  }, 10)

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal()
    }
  })

  config.actions.forEach((action, index) => {
    const btn = modal.querySelectorAll(".modal-btn")[index]
    btn.onclick = action.action
  })
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay")
  if (overlay) {
    overlay.classList.remove("active")
    setTimeout(() => {
      overlay.remove()
    }, 300)
  }
}

function showToast(message, type = "info") {
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.textContent = message

  document.body.appendChild(toast)

  setTimeout(() => {
    toast.classList.add("show")
  }, 10)

  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => {
      toast.remove()
    }, 300)
  }, 3000)
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const countElements = document.querySelectorAll("#cart-count")
  countElements.forEach((el) => (el.textContent = count))
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}
