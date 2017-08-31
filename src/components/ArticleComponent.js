import styles from './ArticleComponent.scss';
export default {
    render(data){
        const className = 'ArticleComponent'
        const template = `
            <div class="${styles[className]}">
                <a href="${data.url}">${data.url}</a>
                <div>${data.content}</div>
            </div>
        `
        const el = document.createElement('div');
        el.className = styles[className];
        el.innerHTML = template;
        return el;
    }

}