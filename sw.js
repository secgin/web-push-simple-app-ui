self.addEventListener('push', (e) => {
    const config = {
        body: e.data.text() | 'Yeni Makale',
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        icon: 'images/logo.jpeg',
        vibrate: [100, 50, 100]
    };

    e.waitUntil(
        self.registration.showNotification('Makale başlık', config));
});