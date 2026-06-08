const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const wait = (ms = 220) => new Promise((resolve) => {
  window.setTimeout(resolve, ms);
});

const request = async (path, options = {}) => {
  if (!API_BASE_URL) {
    return mockRequest(path, options);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    credentials: 'include',
    ...options
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Request failed');
  }

  return response.json();
};

const mockRequest = async (path, options) => {
  await wait();
  const body = options.body ? JSON.parse(options.body) : {};

  if (path === '/auth/login') {
    return {
      user: {
        id: 'usr_1001',
        name: body.name || 'Raahz Angeles',
        displayName: 'Raahz',
        email: body.email,
        phone: '+63 900 123 4567'
      }
    };
  }

  if (path === '/orders' && options.method === 'POST') {
    return {
      orderId: `FS-${Math.floor(24000 + Math.random() * 900)}`,
      status: 'Processing',
      ...body
    };
  }

  return { ok: true, ...body };
};

export const api = {
  login(credentials) {
    return request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },
  logout() {
    return request('/auth/logout', { method: 'POST' });
  },
  updateProfile(profile) {
    return request('/account/profile', {
      method: 'PUT',
      body: JSON.stringify(profile)
    });
  },
  saveWishlist(productId) {
    return request('/wishlist', {
      method: 'POST',
      body: JSON.stringify({ productId })
    });
  },
  updateCart(items) {
    return request('/cart', {
      method: 'PUT',
      body: JSON.stringify({ items })
    });
  },
  createOrder(order) {
    return request('/orders', {
      method: 'POST',
      body: JSON.stringify(order)
    });
  },
  updateAddress(address) {
    return request('/account/addresses', {
      method: 'POST',
      body: JSON.stringify(address)
    });
  },
  updatePaymentMethod(paymentMethod) {
    return request('/account/payment-methods', {
      method: 'POST',
      body: JSON.stringify(paymentMethod)
    });
  },
  updateNotificationSettings(settings) {
    return request('/account/notifications', {
      method: 'PUT',
      body: JSON.stringify(settings)
    });
  },
  updatePreferences(settings) {
    return request('/account/settings', {
      method: 'PUT',
      body: JSON.stringify(settings)
    });
  }
};
