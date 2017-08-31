export default {
    Model(
      data = {
        id: 0,
        url: '',
        content: '',
        title: "",
      }
    ) {
      return Object.assign(Object.create({ data }), {}, this.methods);
    },
  
    methods: {
      getData() {
        return {
           article: {
              id: this.data.id,
              url: this.data.url,
              title: this.data.title,
              content: this.data.content
           }
        };
      }
    }
  };