export default {
    Model(
      data = {
        id: '',
        by: '',
        descendants: 0,
        kids: [],
        score: 0,
        time: 0,
        title: "",
        type: '',
        url: '',
        content: ''
      }
    ) {
      return Object.assign(Object.create({ data }), {}, this.methods);
    },


  
    methods: {
      getData() {
        return {
           top: [],
           story: {
               id: this.data.id,
               descendants: this.data.descendants,
               by: this.data.by,
               kids: this.data.kids,
               score: this.data.score,
               time: this.data.time,
               title: this.data.title,
               url: this.data.url,
               content: this.data.content
           }
        };
      }
    }
  };
  