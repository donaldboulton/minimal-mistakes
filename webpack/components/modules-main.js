let modulePromise = (() => {
    switch(module.toLowerCase()){
        case 'activate': return (System.import('./modules/activate/activate'));
        case 'authenticate': return (System.import('./modules/authenticate/authenticate'));
        case 'books': return (System.import('./modules/books/books'));
        case 'home': return (System.import('./modules/home/home'));
        case 'scan': return (System.import('./modules/scan/scan'));
        case 'subjects': return (System.import('./modules/subjects/subjects'));
    }
})();