self.addEventListener('push', (e) => {
    const config = {
        body: e.data.text() || 'Mesaj içeriği',
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        icon: 'images/logo.png',
        vibrate: [100, 50, 100],
        actions: [
            {
                action: 'explore',
                title: 'Action 1'
            },
            {
                action: "close",
                title: "Bildirimi Kapat"
            }
        ]
    };

    e.waitUntil(
        self.registration.showNotification('Makale başlık', config));
});