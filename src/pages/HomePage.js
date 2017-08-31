import ViewRenderer from "./ViewRenderer";
import styles from "./HomePage.scss";
import StoryComponent from '../components/StoryComponent';
import ItemView from './ItemView'
export default {

    View(data){
        return Object.assign(Object.create({data}), ViewRenderer, this.methods);
    },
    methods : {
        append(parent, element){
            return parent.appendChild(element)
        },
        more: 30,
        className: 'HomePage',

        template(){
           
            return `<div class="${styles[this.className + '-hn-container']}">
                <div class="${styles[this.className + '-hn-stories']}">
                     <div class="${styles[this.className + '-hn-navbar']}">
                        <a style="display: flex;
                        justify-content: start;
                        align-items: center; text-decoration:none; font-family: Hack, monospace;" class="" href="/#">
                            <img style="width: 45px;
                            padding-left: 5px;
                            padding-right: 5px; opacity:0.85;" src="https://s3.amazonaws.com/hacker-news/assets/HN.svg"/>
                            <span style="color:white; text-decoration: none;">Hacker News</span>
                        </a>
                     </div>
                     <ul class="${styles[this.className + '-hn-stories__list']}">
                        
                     </ul>
                     <div class="${styles[this.className + '-hn-more__container']}">
                        <div class="${styles[this.className + '-hn-load-more']}">Load More</div>
                    </div>
                    <div class="${styles[this.className + '-hn-loading']}">
                        <div class="${styles[this.className + '-hn-circle']}"></div>
                        <br>
                        Loading ...
                    </div> 
                </div>
                <div class="${styles[this.className + '-hn-content']}" >
                    <div class="${styles[this.className + '-hn-header']}"></div>
                    <section style="background:#FF900D; max-height:300px;">
                    <a-scene>

                    <a-entity>
                  
                    <a-box color="white" opacity="0.25" width="18" depth="28" height="6">
                      <a-animation attribute="position" from="-280 240 180" to="-280 240 340" delay="0"
                                   dur="36000" easing="linear" repeat="indefinite"
                                   fill="both"></a-animation>
                    </a-box>
          
                    <a-box color="white" opacity="0.65" width="8" depth="12" height="4">
                      <a-animation attribute="position" from="5 32 -80" to="5 32 120" delay="12000"
                                   dur="48000" easing="linear" repeat="indefinite"
                                   fill="both"></a-animation>
                    </a-box>
          
                    <a-box color="white" opacity="0.75" width="6" depth="9" height="4" visible="false">
                      <a-animation attribute="position" from="10 12 -10" to="10 12 100" delay="1000"
                                   dur="36000" easing="linear" repeat="indefinite"
                                   fill="both"></a-animation>
                      <a-animation attribute="visible" to="true" delay="1000" dur="1"></a-animation>
                    </a-box>
          
                    <a-box color="white" opacity="0.5" width="8" depth="12" height="3">
                      <a-animation attribute="position" from="20 16 -80" to="20 16 120" delay="200"
                                   dur="52000" easing="linear" repeat="indefinite"
                                   fill="both"></a-animation>
                    </a-box>
          
                    <a-box color="white" opacity="0.8" width="8" depth="12" height="3">
                      <a-animation attribute="position" from="-20 18 -50" to="-20 18 120" delay="200"
                                   dur="50000" easing="linear" repeat="indefinite"
                                   fill="both"></a-animation>
                    </a-box>
          
                    <a-box color="white" opacity="0.75" width="5" depth="7" height="3">
                      <a-animation attribute="position" from="26 20 -80" to="26 20 120" delay="20000"
                                   dur="48000" easing="linear" repeat="indefinite"
                                   fill="both"></a-animation>
                    </a-box>
                  </a-entity>
                    
                    <a-entity>
                    <a-plane width="30" height="30" color="#FF900D" rotation="-90 0 0">
                      <a-animation attribute="position" from="0 -40 0" to="0 0 0" dur="1600"
                                   easing="ease-out"></a-animation>
                    </a-plane>
                   </a-entity>
                   <a-text position="-3.5 2.5 4" color="#FFF"  value="Welcome to VR Hacker News">
                   </a-text>
               
                    
               
                     <a-sky color="#FF900D" radius="1000"></a-sky>
                     <a-light type="directional" color="#FFF" intensity="0.45" position="4 2 1"></a-light>
                     <a-light type="ambient" color="#A8A8A8"></a-light>
               
                     <a-entity position="-1 2 7">
                       <a-entity camera look-controls wasd-controls></a-entity>
                     </a-entity>
                       </a-scene>
                    </section>
                    <div class="${styles[this.className + '-hn-article-loading']}">
                        <div class="${styles[this.className + '-hn-article-circle']}"></div>
                        <br>
                        Sorry Loading HN VR...
                    </div> 
                </div>
            </div>`
        },
        loadMore(models){
            document.querySelector('.' + styles[this.className + '-hn-load-more']).addEventListener('click', (evt) => {
               
                const stories = document.querySelector('.' + styles[this.className + '-hn-stories__list'])
                models.slice(this.more, this.more+30).map((model, index) => {
                    const itemView = ItemView.Create(model.getData());
                    const itemViewEl = itemView.renderStory(index+this.more+1)
                    this.append(stories,itemViewEl)
                })
                this.more += 30
            });
        },
        renderTitle(title){
            if(title != undefined){
                let route = route || location.hash.slice(1) || "/#";
                let aframe = document.querySelector("a-scene")
                let entityEl = document.createElement('a-text');
                entityEl.setAttribute('position','-3.5 2 4');
                entityEl.setAttribute('color', '#FFF');
                entityEl.setAttribute('value', title);
                aframe.appendChild(entityEl);
            }
        },

        renderArticles(models, title){
            if(models.length > 0 ){
                this.loadingArticle();
                const articles = document.querySelector('.' + styles[this.className + '-hn-content'])
                const itemView = ItemView.Create(models[0].getData());
                const itemViewEl = itemView.renderArticle();
                this.append(articles,itemViewEl)
                this.renderTitle(title.article.title)
                this.unloadingArticle();
            }
        },

        loadingArticle(){
            setTimeout(() => {
                document.querySelector('.' + styles[this.className + '-hn-article-loading']).style.display = 'block'
            }, 1000);
        },

        unloadingArticle(){
            setTimeout(() => {
                document.querySelector('.' + styles[this.className + '-hn-article-loading']).style.display = 'none'
            }, 1000);
        },

        loadingStory(){
            setTimeout(() => {
                document.querySelector('.' + styles[this.className + '-hn-loading']).style.display = 'block'
                document.querySelector('.' + styles[this.className + '-hn-stories__list']).style.background = 'lightgray';
                document.querySelector('.' + styles[this.className + '-hn-stories__list']).style.opacity = 0.5;
            }, 1000);
            
        },

        unloadingStory(){
            setTimeout(() => {
                document.querySelector('.' + styles[this.className + '-hn-loading']).style.display = 'none'
                document.querySelector('.' + styles[this.className + '-hn-stories__list']).style.background = 'none';
                document.querySelector('.' + styles[this.className + '-hn-stories__list']).style.opacity = 1;
            }, 1000);
            
          
        },

        renderComments(models){

            if(models.length > 0 ){
                this.loadingArticle();
                const comment = document.querySelector('.' + styles[this.className + '-hn-content'])
                const itemView = ItemView.Create(models[0].getData());
                const itemViewEl = itemView.renderComment();
                this.append(comment,itemViewEl)
                this.renderTitle(models[0].getData().author);
                this.unloadingArticle()

            }
        },

        
        
        renderStories(models){
            
            const el = this.initView(styles[this.className]);
            el.innerHTML = this.template();
            const app = document.querySelector('.app')
            this.append(app, el);

            document.querySelector('.' + styles[this.className + '-hn-stories__list']).style.background = 'lightgray';
            document.querySelector('.' + styles[this.className + '-hn-stories__list']).style.opacity = 0.5;
            const stories = document.querySelector('.' + styles[this.className + '-hn-stories__list'])
            models.slice(0, 30).map((model, index) => {
                this.loadingStory()
                this.loadingArticle()
                const itemView = ItemView.Create(model.getData());
                const itemViewEl = itemView.renderStory(index+1)
                this.append(stories,itemViewEl)
               
            })
            this.unloadingArticle()
            this.unloadingStory()
            this.loadMore(models)


        }
    }

}