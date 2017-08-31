import PropertyStoryModel from './StoryModel';
import PropertyArticleModel from './ArticleModel';
import PropertyCommentModel from './CommentModel';

export default {
    
    Create(data = []) {
       return Object.assign(Object.create({data}), {}, this.methods);
    },

    methods: {
        top: [],
        article:[],
        comment:[],
        models: [],
        getAllTopStories() {
            return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                response.map((id) => {
                    this.top.push(id);
                })
                return this.top; 
            })
            .catch((err) => {
                throw err;
            });
        },

        getCommentContent(id){
            return fetch('http://hn.algolia.com/api/v1/items/' + id)
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                     
                     this.populateComment(response);
                     return this.comment;
                })
        },  


        getArticleContent(data, title){
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = data;
            return fetch(proxyurl + url)
            .then(response => {
                return response.text()
            })
            .then( (response) => {
                response = response.replace(/<button*(\w+).*?>/ig, '');
                response = response.replace(/<input*(\w+).*?>/ig, '');
                response = response.replace(/<header*(\w+).*?>/ig, '');
                response = response.replace(/<footer*(\w+).*?>/ig, '');
                response = response.replace(/<nav*(\w+).*?>/ig, '');
                response = response.replace(/<meta*(\w+).*?>/ig, '');
                response = response.replace(/<link*(\w+).*?>/ig, '');
                response = response.replace(/style="(.*)"/ig, '');
                response = response.replace(/<style([\S\s]*?)>([\S\s]*?)<\/style>/ig, '');
                response = response.replace(/<script([\S\s]*?)>([\S\s]*?)<\/script>/ig, '');
                this.populateArticle({url : url, content: response, title: title})
                return this.article;
            })
            .catch(console.log("Can’t access " + url + " response. Blocked by browser?"))
        },

        

        getComment(id){
            return fetch('http://hn.algolia.com/api/v1/items/' + id)
                .then((response) => {
                    return response.json();
                }).then((response) => {
                    this.populateComment(response);
                    return this.comment;
                }).catch((err) => {
                    throw err;
                })
        },

        getArticle(id){
            return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
            .then((response) => {
                return response.json();
            }).then((response) => {
                
                this.populateArticle(response);
                return this.article;
            })
            .catch((err) => {
                throw err;
            })
        },
        search(id) {
            return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                this.populateModel(response);
                return this.models;
            })
            .catch((err) => {
                throw err;
            });
        },

        populateArticle(data){
            this.article = []
            this.article.push(PropertyArticleModel.Model(data));
        },

        populateComment(data){
            this.comment = []
            this.comment.push(PropertyCommentModel.Model(data));
        },
        populateModel(data){
            this.models.push(PropertyStoryModel.Model(data));
        }

     
    }
    
};