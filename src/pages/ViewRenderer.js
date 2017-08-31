const ViewRenderer = {
    initView(className) {
        const app = document.querySelector('.app');
        while(app.firstChild){
            app.removeChild(app.firstChild)
        }
        const el = document.createElement('div');
        el.className = className;
        app.appendChild(el);
        return el;
    }
}

export { ViewRenderer as default };