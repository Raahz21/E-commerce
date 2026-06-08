import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  Plus,
  Minus,
  X,
  ArrowRight,
  Heart,
  User,
  ChevronDown,
  Settings,
  Package,
  CreditCard,
  LogOut,
  Bell,
  MapPin
} from 'lucide-react';
import { api } from './api';
import './styles.css';

const products = [
  {
    id: 1,
    name: 'Ridge Runner Jacket',
    category: 'Outerwear',
    price: 148,
    rating: 4.8,
    color: '#8d9b6a',
    image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Canvas Weekender',
    category: 'Bags',
    price: 112,
    rating: 4.7,
    color: '#c2623f',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Milled Leather Wallet',
    category: 'Accessories',
    price: 54,
    rating: 4.9,
    color: '#222222',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Daily Knit Overshirt',
    category: 'Shirts',
    price: 86,
    rating: 4.6,
    color: '#577a92',
    image: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    name: 'Trail Utility Cap',
    category: 'Accessories',
    price: 38,
    rating: 4.5,
    color: '#d0a54d',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Stone Taper Denim',
    category: 'Pants',
    price: 96,
    rating: 4.7,
    color: '#314b6b',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 7,
    name: 'Market Sling Bag',
    category: 'Bags',
    price: 72,
    rating: 4.6,
    color: '#6c584c',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 8,
    name: 'Compact Day Pack',
    category: 'Bags',
    price: 118,
    rating: 4.8,
    color: '#2f3d32',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 9,
    name: 'Field Bomber Jacket',
    category: 'Outerwear',
    price: 164,
    rating: 4.7,
    color: '#3d4a3f',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 10,
    name: 'Rain Shell Parka',
    category: 'Outerwear',
    price: 188,
    rating: 4.9,
    color: '#b8c0a8',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 11,
    name: 'Oxford Work Shirt',
    category: 'Shirts',
    price: 78,
    rating: 4.5,
    color: '#cfd7df',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 12,
    name: 'Ribbed Pocket Tee',
    category: 'Shirts',
    price: 42,
    rating: 4.4,
    color: '#e6dfd3',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 13,
    name: 'Everyday Chino',
    category: 'Pants',
    price: 88,
    rating: 4.6,
    color: '#9b8d77',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 14,
    name: 'Utility Cargo Pant',
    category: 'Pants',
    price: 108,
    rating: 4.7,
    color: '#59604b',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 15,
    name: 'Woven Card Holder',
    category: 'Accessories',
    price: 46,
    rating: 4.6,
    color: '#8f3427',
    image: 'https://images.unsplash.com/photo-1601592996763-f05c9c80a7f8?auto=format&fit=crop&w=900&q=80'
  }
];

const categories = ['All', ...new Set(products.map((product) => product.category))];

const heroHeadlines = [
  'Clean essentials for everyday movement.',
  'Curated goods for sharper daily routines.',
  'Functional pieces built for modern shopping.'
];

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Model posing while holding a shopping bag'
  },
  {
    src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Model posing in a jacket for an apparel store'
  },
  {
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Shopper posing with fashion items in a retail store'
  }
];

const profileLinks = [
  { label: 'My Profile', icon: User, page: 'profile' },
  { label: 'Wishlist', icon: Heart, page: 'wishlist' },
  { label: 'Cart', icon: ShoppingBag, action: 'cart' },
  { label: 'Orders', icon: Package, page: 'orders' },
  { label: 'Saved Addresses', icon: MapPin, page: 'addresses' },
  { label: 'Payment Methods', icon: CreditCard, page: 'payments' },
  { label: 'Notifications', icon: Bell, page: 'notifications' },
  { label: 'Settings', icon: Settings, page: 'settings' },
  { label: 'Profile Settings', icon: User, page: 'profile-settings' }
];

const accountPages = {
  profile: {
    eyebrow: 'Account overview',
    title: 'My Profile',
    description: 'Manage your member details, recent activity, and shopping preferences.',
    stats: [
      ['Member since', 'June 2026'],
      ['Saved items', '3'],
      ['Reward points', '1,240']
    ],
    items: [
      ['Full name', 'Raahz Angeles'],
      ['Email', 'raahz@example.com'],
      ['Phone', '+63 900 123 4567']
    ]
  },
  wishlist: {
    eyebrow: 'Saved products',
    title: 'Wishlist',
    description: 'Items you saved for later are kept here for faster checkout.',
    products: products.slice(0, 3)
  },
  orders: {
    eyebrow: 'Purchase history',
    title: 'Orders',
    description: 'Track deliveries, returns, receipts, and past purchases.',
    items: [
      ['FS-24018', 'Processing - 2 items - $244'],
      ['FS-23892', 'Delivered - 1 item - $86'],
      ['FS-23541', 'Returned - 1 item - $54']
    ]
  },
  addresses: {
    eyebrow: 'Delivery',
    title: 'Saved Addresses',
    description: 'Keep shipping locations ready for quicker checkout.',
    items: [
      ['Home', 'Quezon City, Metro Manila'],
      ['Office', 'Makati City, Metro Manila']
    ]
  },
  payments: {
    eyebrow: 'Checkout',
    title: 'Payment Methods',
    description: 'Manage saved cards and preferred payment options.',
    items: [
      ['Visa ending 4821', 'Default payment method'],
      ['GCash', 'Connected wallet']
    ]
  },
  notifications: {
    eyebrow: 'Updates',
    title: 'Notifications',
    description: 'Choose which order, promo, and account alerts you receive.',
    items: [
      ['Order updates', 'Email and SMS enabled'],
      ['Price drops', 'Email enabled'],
      ['New arrivals', 'App alerts enabled']
    ]
  },
  settings: {
    eyebrow: 'Preferences',
    title: 'Settings',
    description: 'Adjust storefront preferences and privacy controls.',
    items: [
      ['Currency', 'USD'],
      ['Language', 'English'],
      ['Privacy', 'Personalized recommendations on']
    ]
  },
  'profile-settings': {
    eyebrow: 'Account details',
    title: 'Profile Settings',
    description: 'Update your sign-in details, display name, and security preferences.',
    items: [
      ['Display name', 'Raahz'],
      ['Password', 'Updated recently'],
      ['Two-step verification', 'Ready to enable']
    ]
  }
};

const sensitivePatterns = [
  'password',
  'cvv',
  'cvc',
  'card number',
  'credit card',
  'debit card',
  'bank account',
  'otp',
  'one-time password',
  'pin',
  'full address',
  'billing address',
  'phone number',
  'email address'
];

const productKeywords = {
  jacket: ['jacket', 'outerwear', 'coat', 'layer'],
  bag: ['bag', 'weekender', 'carry', 'travel'],
  wallet: ['wallet', 'leather wallet'],
  shirt: ['shirt', 'overshirt', 'knit'],
  cap: ['cap', 'hat'],
  denim: ['denim', 'pants', 'jeans']
};

const findRequestedProducts = (message, catalog = products) => {
  const text = message.toLowerCase();
  const wantsDisplay = ['show', 'display', 'find', 'recommend', 'suggest', 'looking for', 'want', 'need', 'item', 'product']
    .some((keyword) => text.includes(keyword));

  if (!wantsDisplay) {
    return [];
  }

  return catalog.filter((product) => {
    const searchable = `${product.name} ${product.category}`.toLowerCase();
    const directMatch = searchable.split(/\s+/).some((word) => text.includes(word));
    const keywordMatch = Object.values(productKeywords).some((keywords) => (
      keywords.some((keyword) => text.includes(keyword) && searchable.includes(keyword.split(' ')[0]))
    ));

    return directMatch || keywordMatch;
  });
};

const getAssistantReply = (message, catalog = products) => {
  const text = message.toLowerCase();
  const requestedProducts = findRequestedProducts(message, catalog);

  if (sensitivePatterns.some((pattern) => text.includes(pattern))) {
    return {
      text: 'For your security, I cannot collect or discuss sensitive payment details, passwords, OTPs, full addresses, or private account information. Please use the secure checkout or account settings page for those.'
    };
  }

  if (requestedProducts.length) {
    return {
      text: `I found ${requestedProducts.length} matching item${requestedProducts.length > 1 ? 's' : ''} for you.`,
      products: requestedProducts
    };
  }

  if (text.includes('return') || text.includes('refund')) {
    return { text: 'Returns are usually handled from your Orders page. Pick the order, choose the item, and start a return request. Keep the item unused and in good condition for the smoothest review.' };
  }

  if (text.includes('shipping') || text.includes('delivery')) {
    return { text: 'Shipping options appear during checkout after you choose a delivery area. You can also manage saved delivery locations from Saved Addresses.' };
  }

  if (text.includes('size') || text.includes('fit')) {
    return { text: 'For apparel, start with your usual size. Jackets and overshirts are designed with a relaxed fit, while denim is tapered. If you are between sizes, sizing up is usually more comfortable.' };
  }

  if (text.includes('order') || text.includes('track')) {
    return { text: 'You can track order status from the Orders page in your profile menu. I can explain order states, but I cannot access private order details here.' };
  }

  if (text.includes('wishlist')) {
    return { text: 'Tap the heart icon on a product to save it. Your saved items are available under Wishlist in the profile dropdown.' };
  }

  if (text.includes('cart') || text.includes('checkout')) {
    return { text: 'Add products to your cart, adjust quantities in the cart drawer, then use Checkout. Sensitive payment information should only be entered on a secure payment form.' };
  }

  return { text: 'I can help with products, sizing, shipping, returns, wishlist, cart, and checkout flow. Ask me to show a jacket, bag, wallet, cap, shirt, or denim and I will display matching items.' };
};

function Chatbot({ onAddToCart, catalog = products }) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([
    {
      role: 'assistant',
      text: 'Hi, ask me to show a jacket, bag, wallet, cap, shirt, or denim and I will display matching items instantly.'
    }
  ]);

  const sendMessage = (event) => {
    event.preventDefault();
    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    const reply = getAssistantReply(trimmed, catalog);

    setMessages((items) => [
      ...items,
      { role: 'user', text: trimmed },
      { role: 'assistant', ...reply }
    ]);
    setInput('');
  };

  return (
    <div className={`chatbot ${open ? 'open' : ''}`}>
      <button className="chat-toggle" type="button" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <MessageCircleIcon />}
        <span>{open ? 'Close' : 'Help'}</span>
      </button>
      <section className="chat-window" aria-label="Customer support chatbot">
        <div className="chat-head">
          <div>
            <strong>Raahz Assistant</strong>
            <p>Shopping support only</p>
          </div>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
              <p>{message.text}</p>
              {message.products && (
                <div className="chat-products">
                  {message.products.map((product) => (
                    <article className="chat-product" key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <strong>{product.name}</strong>
                        <span>{product.category} - ${product.price}</span>
                      </div>
                      <button type="button" onClick={() => onAddToCart(product)}>Add</button>
                    </article>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <form className="chat-form" onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Show me a jacket..."
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

function MessageCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-3.7-.8L3 21l1.8-5A8.3 8.3 0 0 1 3.7 12 8.4 8.4 0 0 1 12 3.6a8.4 8.4 0 0 1 9 7.9Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function AccountPage({ page, onShop, onAddToCart }) {
  const pageData = accountPages[page];

  if (!pageData) {
    return null;
  }

  return (
    <section className="account-page">
      <div className="account-hero">
        <div>
          <p className="eyebrow">{pageData.eyebrow}</p>
          <h1>{pageData.title}</h1>
          <p className="hero-text">{pageData.description}</p>
        </div>
        <button type="button" onClick={onShop}>Continue shopping <ArrowRight size={17} /></button>
      </div>

      {pageData.stats && (
        <div className="account-stats">
          {pageData.stats.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      )}

      {pageData.products ? (
        <div className="account-products">
          {pageData.products.map((product) => (
            <article className="mini-product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <strong>${product.price}</strong>
              </div>
              <button type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
            </article>
          ))}
        </div>
      ) : (
        <div className="account-list-page">
          {pageData.items.map(([label, value]) => (
            <article key={label}>
              <div>
                <h3>{label}</h3>
                <p>{value}</p>
              </div>
              <button type="button">Manage</button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ProductCard({ product, isSaved, isAdded, isFresh, onWishlist, onAddToCart }) {
  return (
    <article className={`product-card ${isAdded ? 'added' : ''} ${isFresh ? 'fresh' : ''}`}>
      <button
        className={`wish ${isSaved ? 'saved' : ''}`}
        type="button"
        onClick={() => onWishlist(product)}
        aria-label={`${isSaved ? 'Remove' : 'Save'} ${product.name}`}
      >
        <Heart size={18} fill={isSaved ? 'currentColor' : 'none'} />
      </button>
      {isFresh && <span className="fresh-badge">New</span>}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <div>
          <p>{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <span className="swatch" style={{ background: product.color }} aria-label="Product color" />
      </div>
      <div className="product-foot">
        <div>
          <strong>${product.price}</strong>
          <span><Star size={15} fill="currentColor" /> {product.rating}</span>
        </div>
        <button className={isAdded ? 'added' : ''} type="button" onClick={() => onAddToCart(product)}>
          {isAdded ? 'Added' : 'Add'}
        </button>
      </div>
    </article>
  );
}

function App() {
  const [catalog, setCatalog] = React.useState(products);
  const [role, setRole] = React.useState('buyer');
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [query, setQuery] = React.useState('');
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('shop');
  const [selectedCategoryPage, setSelectedCategoryPage] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [wishlist, setWishlist] = React.useState([1, 2, 3]);
  const [statusMessage, setStatusMessage] = React.useState('');
  const [isSaving, setIsSaving] = React.useState(false);
  const [recentlyAddedProduct, setRecentlyAddedProduct] = React.useState(null);
  const [freshProduct, setFreshProduct] = React.useState(null);
  const [heroHeadlineIndex, setHeroHeadlineIndex] = React.useState(0);
  const [heroImageIndex, setHeroImageIndex] = React.useState(0);

  React.useEffect(() => {
    const headlineTimer = window.setInterval(() => {
      setHeroHeadlineIndex((index) => (index + 1) % heroHeadlines.length);
    }, 3600);

    return () => window.clearInterval(headlineTimer);
  }, []);

  React.useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setHeroImageIndex((index) => (index + 1) % heroImages.length);
    }, 4300);

    return () => window.clearInterval(imageTimer);
  }, []);

  const sellerStats = React.useMemo(() => {
    const soldByMonth = [
      { month: 'Jan', sold: 28, profit: 1840 },
      { month: 'Feb', sold: 34, profit: 2310 },
      { month: 'Mar', sold: 31, profit: 2040 },
      { month: 'Apr', sold: 46, profit: 3180 },
      { month: 'May', sold: 52, profit: 3740 },
      { month: 'Jun', sold: 48, profit: 3460 }
    ];
    const totalSold = soldByMonth.reduce((sum, item) => sum + item.sold, 0);
    const totalProfit = soldByMonth.reduce((sum, item) => sum + item.profit, 0);
    return { soldByMonth, totalSold, totalProfit };
  }, []);

  const catalogCategories = ['All', ...new Set(catalog.map((product) => product.category))];
  const categorySections = catalogCategories
    .filter((category) => category !== 'All')
    .map((category) => ({
      category,
      products: catalog.filter((product) => product.category === category)
    }));
  const filteredProducts = catalog.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const syncCart = async (items) => {
    await api.updateCart(items.map(({ id, quantity }) => ({ productId: id, quantity })));
  };

  const addToCart = async (product) => {
    const existing = cart.find((item) => item.id === product.id);
    const nextCart = existing
      ? cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...cart, { ...product, quantity: 1 }];
    setCart(nextCart);
    setRecentlyAddedProduct(product.id);
    setCartOpen(true);
    window.setTimeout(() => setRecentlyAddedProduct(null), 1200);
    await syncCart(nextCart);
  };

  const updateQuantity = async (id, delta) => {
    const nextCart = cart
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
      .filter((item) => item.quantity > 0);
    setCart(nextCart);
    await syncCart(nextCart);
  };

  const showShop = () => {
    setCurrentPage('shop');
    setSelectedCategoryPage('');
    setProfileOpen(false);
  };

  const showCategoryPage = (category) => {
    setCurrentPage('category');
    setSelectedCategoryPage(category);
    setProfileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showLogin = () => {
    setCurrentPage('login');
    setProfileOpen(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIsSaving(true);
    const result = await api.login({
      email: formData.get('email'),
      password: formData.get('password')
    });
    setUser(result.user);
    setIsLoggedIn(true);
    setCurrentPage('shop');
    setStatusMessage('Account signed in and ready for transactions.');
    setIsSaving(false);
  };

  const handleProfileAction = (action, page) => {
    if (action === 'cart') {
      setCartOpen(true);
    } else if (page) {
      setCurrentPage(page);
    }
    setProfileOpen(false);
  };

  const toggleWishlist = async (product) => {
    const alreadySaved = wishlist.includes(product.id);
    setWishlist((items) => alreadySaved ? items.filter((id) => id !== product.id) : [...items, product.id]);

    if (!alreadySaved) {
      await api.saveWishlist(product.id);
    }

    setStatusMessage(`${product.name} ${alreadySaved ? 'removed from' : 'saved to'} wishlist.`);
  };

  const handleCheckout = async () => {
    if (!cart.length) {
      return;
    }

    setIsSaving(true);
    const order = await api.createOrder({
      userId: user?.id || 'guest',
      items: cart.map(({ id, quantity, price }) => ({ productId: id, quantity, price })),
      totals: {
        subtotal: cartTotal,
        shipping: 0,
        tax: 0,
        total: cartTotal
      },
      paymentMethod: 'pending',
      shippingAddress: 'pending'
    });
    setStatusMessage(`Order ${order.orderId} created. Status: ${order.status}.`);
    setCart([]);
    await syncCart([]);
    setCartOpen(false);
    setIsSaving(false);
    setCurrentPage('orders');
  };

  const handleAccountSave = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setIsSaving(true);

    if (currentPage === 'profile' || currentPage === 'profile-settings') {
      await api.updateProfile(payload);
    } else if (currentPage === 'addresses') {
      await api.updateAddress(payload);
    } else if (currentPage === 'payments') {
      await api.updatePaymentMethod(payload);
    } else if (currentPage === 'notifications') {
      await api.updateNotificationSettings(payload);
    } else if (currentPage === 'settings') {
      await api.updatePreferences(payload);
    }

    setStatusMessage(`${accountPages[currentPage]?.title || 'Account'} saved.`);
    setIsSaving(false);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const product = {
      id: Date.now(),
      name: formData.get('name'),
      category: formData.get('category'),
      price: Number(formData.get('price')),
      rating: 4.5,
      color: formData.get('color'),
      image: formData.get('image') || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80'
    };
    setCatalog((items) => [product, ...items]);
    setFreshProduct(product.id);
    window.setTimeout(() => setFreshProduct(null), 1500);
    event.currentTarget.reset();
    setStatusMessage(`${product.name} added to seller catalog.`);
  };

  const removeProduct = (id) => {
    setCatalog((items) => items.filter((product) => product.id !== id));
    setCart((items) => items.filter((item) => item.id !== id));
    setStatusMessage('Product removed from catalog.');
  };

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#" onClick={showShop}>
          <span className="brand-mark">F</span>
          Raahz Supply
        </a>
        <nav className="nav">
          <a href="#shop" onClick={showShop}>Shop</a>
          <a href="#new">New</a>
          <a href="#journal">Journal</a>
          <button type="button" onClick={showLogin}>Login</button>
          <button type="button" onClick={() => setRole(role === 'buyer' ? 'seller' : 'buyer')}>
            {role === 'buyer' ? 'Seller' : 'Buyer'}
          </button>
        </nav>
        <div className="header-actions">
          <button className="cart-button" type="button" onClick={() => setCartOpen(true)} aria-label="Open cart">
            <ShoppingBag size={20} />
            <span>{cartCount}</span>
          </button>
          <div className="profile-menu">
            <button
              className="profile-trigger"
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              aria-expanded={profileOpen}
              aria-label="Open account menu"
            >
              <span className="avatar">{isLoggedIn ? (user?.displayName?.[0] || 'R') : <User size={17} />}</span>
              <span className="profile-name">{isLoggedIn ? (user?.displayName || 'Account') : 'Account'}</span>
              <ChevronDown size={16} />
            </button>
            <div className={`profile-dropdown ${profileOpen ? 'open' : ''}`}>
              <div className="profile-card">
                <span className="avatar large">{isLoggedIn ? (user?.displayName?.[0] || 'R') : <User size={20} />}</span>
                <div>
                  <strong>{isLoggedIn ? (user?.name || 'Account member') : 'Guest account'}</strong>
                  <p>{isLoggedIn ? user?.email : 'Sign in to manage orders'}</p>
                </div>
              </div>
              {!isLoggedIn && (
                <button className="sign-in-row" type="button" onClick={showLogin}>
                  Login or create account
                  <ArrowRight size={16} />
                </button>
              )}
              <div className="profile-list">
                {profileLinks.map(({ label, icon: Icon, action, page }) => (
                  <button type="button" key={label} onClick={() => handleProfileAction(action, page)}>
                    <Icon size={17} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
              {isLoggedIn && (
                <button className="logout-row" type="button" onClick={async () => {
                  await api.logout();
                  setIsLoggedIn(false);
                  setUser(null);
                  setProfileOpen(false);
                }}>
                  <LogOut size={17} />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        {statusMessage && (
          <button className="status-toast" type="button" onClick={() => setStatusMessage('')}>
            {statusMessage}
          </button>
        )}
        {role === 'seller' ? (
          <SellerDashboard
            catalog={catalog}
            stats={sellerStats}
            onAddProduct={handleAddProduct}
            onRemoveProduct={removeProduct}
            onBuyerMode={() => setRole('buyer')}
          />
        ) : currentPage === 'login' ? (
          <section className="login-page">
            <div className="login-panel">
              <p className="eyebrow">Member access</p>
              <h1>Login to your account.</h1>
              <p className="hero-text">Track orders, save favorites, manage addresses, and move through checkout faster.</p>
              <form className="login-form" onSubmit={handleLogin}>
                <label>
                  Email address
                  <input name="email" type="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Password
                  <input name="password" type="password" placeholder="Enter password" required />
                </label>
                <div className="form-options">
                  <label className="check-row">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="#">Forgot password?</a>
                </div>
                <button type="submit" disabled={isSaving}>{isSaving ? 'Signing in...' : 'Login'}</button>
              </form>
              <p className="signup-copy">New to Forge Supply? <a href="#">Create an account</a></p>
            </div>
            <div className="login-visual">
              <img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80" alt="Clothing rack with curated apparel" />
            </div>
          </section>
        ) : accountPages[currentPage] ? (
          <>
            <AccountPage page={currentPage} onShop={showShop} onAddToCart={addToCart} />
            {['profile', 'addresses', 'payments', 'notifications', 'settings', 'profile-settings'].includes(currentPage) && (
              <form className="backend-form" onSubmit={handleAccountSave}>
                <input name="reference" value={currentPage} readOnly />
                <input name="value" placeholder="Enter new value or note" required />
                <button type="submit" disabled={isSaving}>{isSaving ? 'Saving...' : 'Save changes'}</button>
              </form>
            )}
          </>
        ) : currentPage === 'category' ? (
          <section className="category-page">
            <div className="category-hero">
              <div>
                <p className="eyebrow">Category</p>
                <h1>{selectedCategoryPage}</h1>
                <p className="hero-text">Browse all {selectedCategoryPage.toLowerCase()} available in the current catalog.</p>
              </div>
              <button type="button" onClick={showShop}>Back to shop</button>
            </div>
            <div className="product-grid">
              {catalog
                .filter((product) => product.category === selectedCategoryPage)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSaved={wishlist.includes(product.id)}
                    isAdded={recentlyAddedProduct === product.id}
                    isFresh={freshProduct === product.id}
                    onWishlist={toggleWishlist}
                    onAddToCart={addToCart}
                  />
                ))}
            </div>
          </section>
        ) : (
          <>
            <section className="hero">
              <div className="hero-copy">
                <p className="eyebrow">Functional goods, edited weekly</p>
                <h1 className="rotating-headline" key={heroHeadlines[heroHeadlineIndex]}>
                  {heroHeadlines[heroHeadlineIndex]}
                </h1>
                <p className="hero-text">Durable layers, compact carry, and small accessories built with quiet confidence.</p>
                <a className="hero-link" href="#shop">Shop collection <ArrowRight size={18} /></a>
              </div>
              <div className="hero-media" aria-label="Featured product photography">
                <img
                  className="rotating-hero-image"
                  key={heroImages[heroImageIndex].src}
                  src={heroImages[heroImageIndex].src}
                  alt={heroImages[heroImageIndex].alt}
                />
              </div>
            </section>

            <section className="shop-shell" id="shop">
              <div className="shop-head">
                <div>
                  <p className="eyebrow">Current edit</p>
                  <h2>Popular picks</h2>
                </div>
                <div className="search-box">
                  <Search size={18} />
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" />
                </div>
              </div>

              <div className="toolbar" aria-label="Product filters">
                <SlidersHorizontal size={18} />
                {catalogCategories.map((category) => (
                  <button
                    className={activeCategory === category ? 'active' : ''}
                    type="button"
                    key={category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="category-sections">
                {activeCategory === 'All' && !query ? categorySections.map(({ category, products: categoryProducts }) => (
                  <section className="category-section" key={category}>
                    <div className="category-section-head">
                      <div>
                        <p className="eyebrow">{category}</p>
                        <h3>{category}</h3>
                      </div>
                      <button type="button" onClick={() => showCategoryPage(category)}>Show more</button>
                    </div>
                    <div className="product-grid compact">
                      {categoryProducts.slice(0, 3).map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          isSaved={wishlist.includes(product.id)}
                          isAdded={recentlyAddedProduct === product.id}
                          isFresh={freshProduct === product.id}
                          onWishlist={toggleWishlist}
                          onAddToCart={addToCart}
                        />
                      ))}
                    </div>
                  </section>
                )) : (
                  <div className="product-grid">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        isSaved={wishlist.includes(product.id)}
                        isAdded={recentlyAddedProduct === product.id}
                        isFresh={freshProduct === product.id}
                        onWishlist={toggleWishlist}
                        onAddToCart={addToCart}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <aside className={`cart-panel ${cartOpen ? 'open' : ''}`} aria-hidden={!cartOpen}>
        <div className="cart-head">
          <div>
            <p className="eyebrow">Checkout</p>
            <h2>Your bag</h2>
          </div>
          <button type="button" onClick={() => setCartOpen(false)} aria-label="Close cart"><X size={20} /></button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty">Your bag is empty.</p>
          ) : cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="quantity">
                  <button type="button" onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.name}`}>
                    <Minus size={15} />
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name}`}>
                    <Plus size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-foot">
          <div>
            <span>Total</span>
            <strong>${cartTotal}</strong>
          </div>
          <button type="button" disabled={!cart.length || isSaving} onClick={handleCheckout}>
            {isSaving ? 'Creating order...' : 'Checkout'}
          </button>
        </div>
      </aside>
      <button className={`scrim ${cartOpen ? 'open' : ''}`} type="button" onClick={() => setCartOpen(false)} aria-label="Close cart overlay" />
      <Chatbot onAddToCart={addToCart} catalog={catalog} />
    </div>
  );
}

function SellerDashboard({ catalog, stats, onAddProduct, onRemoveProduct, onBuyerMode }) {
  const maxProfit = Math.max(...stats.soldByMonth.map((item) => item.profit));
  const maxSold = Math.max(...stats.soldByMonth.map((item) => item.sold));

  return (
    <section className="seller-page">
      <div className="seller-head">
        <div>
          <p className="eyebrow">Seller workspace</p>
          <h1>Manage products and sales.</h1>
          <p className="hero-text">Add inventory, remove listings, and monitor sold items and profit movement.</p>
        </div>
        <button type="button" onClick={onBuyerMode}>View buyer store <ArrowRight size={17} /></button>
      </div>

      <div className="seller-metrics">
        <article>
          <span>Total profit</span>
          <strong>${stats.totalProfit.toLocaleString()}</strong>
        </article>
        <article>
          <span>Items sold</span>
          <strong>{stats.totalSold}</strong>
        </article>
        <article>
          <span>Active listings</span>
          <strong>{catalog.length}</strong>
        </article>
      </div>

      <div className="seller-grid">
        <form className="seller-form" onSubmit={onAddProduct}>
          <h2>Add item</h2>
          <input name="name" placeholder="Product name" required />
          <input name="category" placeholder="Category" required />
          <input name="price" type="number" min="1" placeholder="Price" required />
          <input name="color" type="color" defaultValue="#191917" aria-label="Product color" />
          <input name="image" placeholder="Image URL optional" />
          <button type="submit">Add product</button>
        </form>

        <div className="seller-charts">
          <article>
            <h2>Profit graph</h2>
            <div className="bar-chart">
              {stats.soldByMonth.map((item) => (
                <div className="bar-item" key={item.month}>
                  <span style={{ height: `${(item.profit / maxProfit) * 100}%` }} />
                  <small>{item.month}</small>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h2>Sold graph</h2>
            <div className="line-chart">
              {stats.soldByMonth.map((item) => (
                <div className="line-point" key={item.month}>
                  <span style={{ height: `${(item.sold / maxSold) * 100}%` }} />
                  <small>{item.sold}</small>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

      <div className="seller-table">
        <div className="seller-row head">
          <span>Item</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {catalog.map((product) => (
          <div className="seller-row" key={product.id}>
            <span className="seller-item"><img src={product.image} alt={product.name} /> {product.name}</span>
            <span>{product.category}</span>
            <span>${product.price}</span>
            <button type="button" onClick={() => onRemoveProduct(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
