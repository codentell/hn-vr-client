export default {
    Model(
      data = {
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
              url: this.data.url,
              title: this.data.title,
              content: this.data.content
           }
        };
      }
    }
  };