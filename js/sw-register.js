if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log("service worker registered successfully!");
    }).catch((e) => {
      console.log(`couldn't register service worker to due ${e}`);
    });
}