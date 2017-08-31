import HomePage from "./pages/HomePage";
import StoryCollection from "./models/StoryCollection";



export default {
    Create(){
        return Object.assign(Object.create(null), this.methods);

    },

    methods: {
        init() {
           
            let route = route || location.hash.slice(1) || "/#";
            
            StoryCollection.Create().getAllTopStories().then((models) => {
                models.map((id,index) => {
                StoryCollection.Create().search(id).then((story) => {
                    this.showHomePage(story);
                    })       
                })
                if(route.substring(Number.isInteger(route.lastIndexOf('/')+1))){
                    if(route.indexOf('article') > 0){
                        let id = route.substring(route.lastIndexOf('/')+1)
                        StoryCollection.Create().getArticle(id).then((article) => {
                        
                            let url = article[article.length - 1].getData().article.url;
                            let title = article[article.length - 1].getData()
                            StoryCollection.Create().getArticleContent(url).then((content) => {
                                this.showArticlePage(content, title);
                            });
                        })
                    }
                    if(route.indexOf('comments') > 0){
                        let id = route.substring(route.lastIndexOf('/')+1)

                        StoryCollection.Create().getComment(id).then((comment) => {
                            let title = comment[comment.length - 1].getData()
                            StoryCollection.Create().getCommentContent(id).then((content) => {
                                this.showCommentPage(content);
                            })
                        })

                        /*StoryCollection.Create().getCommentContent(id).then((content) => {
                            this.showCommentPage(content);
                        })*/
                    }
                    
                 }
                
            })

           
            //this.showArticlePage();


            
           

            



          
            //window.onpopstate = () => {
            //    this.showHomePage(models);
            //};
            /*StoryCollection.Create().getAllTopStories().then((models) => {
                models.map((id,index) => {
                    StoryCollection.Create().search(id).then((story) => {
                       console.log(story[index].getData());
                    })       
                })
            })*/
            /*fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                json.map((id) => {
                    StoryCollection.Create().search(id).then((models) => {
                        console.log(models.getData())
                    })
                })
                //return this.models;
            })
            .catch((err) => {
                throw err;
            });*/
            //StoryCollection.Create().search('15112518').then((models) => {
            //    console.log(models)
            //})
        },

        showArticlePage(models = [], title = ""){
            const homePage = HomePage.View();
            homePage.renderArticles(models, title);
        },

        showCommentPage(models){
            const homePage = HomePage.View();
            homePage.renderComments(models);
        },

        showHomePage(models = []){
            const homePage = HomePage.View();
            homePage.renderStories(models);

        },

        route(route){
            history.pushState(null, null, `/#/${route}`)
        }
    }
}