import styles from './ArticleComponent.scss';
export default {
    getId(){
        let route = location.hash.slice(1)
        route = route.substring(parseInt(route.lastIndexOf('/')) + 1)
        return route;
    },
    render(data){
        const className = 'ArticleComponent'
        const id = this.getId();
        const template = `
            <section style="background:orange; color: white; height: 100px;">
            <div style="display:flex;justify-content: flex-start; flex-direction:column">
                <span>
                    <span>
                        <a style="display: block;
                        margin-top: 5px;
                        white-space: pre;
                        font-size:80%;
                        text-overflow: ellipsis;
                        overflow: hidden;" href="${data.url}">${data.url}</a>
                    </span>
                </span>
                <span>
                    <span>
                        <a style="display: block;
                        margin-top: 5px;
                        font-size:80%;
                        white-space: pre;
                        text-overflow: ellipsis;
                        overflow: hidden;" href="https://news.ycombinator.com/item?id=${id}">https://news.ycombinator.com/item?id=${id}
                        </a>
                    </span>
                </span>
            </div>
            </section>
            <div class="${styles[className]}">
                <div>${data.content}</div>
            </div>
        `
        const el = document.createElement('div');
        el.className = styles[className];
        el.innerHTML = template;
        return el;
    }

}