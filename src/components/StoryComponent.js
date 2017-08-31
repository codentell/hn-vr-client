//import ViewRenderer from "./ViewRenderer"
import styles from './StoryComponent.scss';
export default {

    timeDifference(current, previous) {
        
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        
        var elapsed = current - previous;
        
        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' secs ago';   
        }
        
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' mins ago';   
        }
        
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hrs ago';   
        }
    
        else if (elapsed < msPerMonth) {
             return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
        }
        
        else if (elapsed < msPerYear) {
             return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
        }
        
        else {
             return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
        }
    },
   



    render(data, index) {
        const className = 'StoryComponent'
        var current= new Date();
        var previous = new Date(data.time*1000)
        let url;
        if(data.url === undefined ){
            url = 'N/A'
        }
        else{
            url = data.url;
            url = url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/ig)    
        }
       
       

        const template = `
        <a class="${styles[className + '-hn-story']}" href="#/article/${data.id}">
            <h3><span class="${styles[className + '-hn-rank']}">${index}.</span> ${data.title}</h3>
            <div style="display:flex; align-items: center;
            justify-content: flex-start;">
                <span style="height:15px; width:15px; padding-right:5px;"><img style="height:15px; width:15px;" src="//s3.amazonaws.com/hacker-news/assets/social_user_icon.svg"/></span>
                <span class="${styles[className + '-hn-author']}">${data.by}</span>
                <span style="height:15px; width:15px; padding-right:5px;"><img style="height:15px; width:15px;" src="//s3.amazonaws.com/hacker-news/assets/text_editing_office_clock.svg"/></span>
                <span class="${styles[className + '-hn-time']}">${this.timeDifference(current,previous)}</span>
            </div>
            <span class="${styles[className + '-hn-url']}">(${url})</span>
        </a>
        <a class="${styles[className + '-hn-comment']}" href="#/comments/${data.id}">
            <span class="${styles[className + '-hn-descendants']}">
                ${data.descendants}
            </span>
            <span class="${styles[className + '-hn-points']}">
                ${data.score} pts
            </span>
        </a>`;
        const el = document.createElement('li');
        el.className = styles[className];
        el.innerHTML = template;
        return el;
    }

    /*render(data){
        const className = 'hnStories';
        const template = 
        `<div>
            <div>${data.by}</div>
        </div>`
        const el = document.createElement('div');
        el.innerHTML = template;
        return el;
    }*/
}