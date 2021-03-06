window.addEventListener('load', async () => {
    const subscribeButton = document.querySelector('#subscribeButton');

    // Register service worker
    const sW = await navigator.serviceWorker.register('./sw.js');
    console.log('Service Worker => ', sW);

    subscribeButton.addEventListener('click', async () => {
        console.log('burda');
        const serviceWorker = await navigator.serviceWorker.ready;
        const clientId = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BBvtgfsznUadqpaIj3Yo4rWnzUgS8CWiy30BRokLiKewTRA_0i3DizTGgbv02O9BXZFAMm2o1mGpfJVeM9Pk1Zo'
        });
        console.log('-----');
        console.log(clientId);
        console.log(JSON.stringify(clientId));
        console.log(serviceWorker);
    });
});