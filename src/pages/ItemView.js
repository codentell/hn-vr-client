import StoryComponent from "../components/StoryComponent";
import ArticleComponent from "../components/ArticleComponent"; 
import CommentComponent from "../components/CommentComponent";
export default {
  Create(data) {
    return Object.assign(
      Object.create({
        data
      }),
      {
        StoryComponent,
        ArticleComponent,
        CommentComponent
      },
      this.methods
    );
  },
  methods: {
     
      renderComment(){
        return this.CommentComponent.render(this.data.comment);
      },

   

      renderArticle(){
        return this.ArticleComponent.render(this.data.article);
      },

      renderStory(index){
          return this.StoryComponent.render(this.data.story, index);
      }

  }
};
