export default {
    Model(
        data = {
            author: "",
            children: [],
            created_at_i : 0,
            id : 0,
            parent_id : 0,
            points : 0,
            story_id : 0,
            text : "",
            created_at_i: 0,
            type : ""
          
        }
      ) {
        return Object.assign(Object.create({ data }), {}, this.methods);
      },
    
      methods: {
        getData() {
          return {
             comment: {
                author: this.data.author,
                id: this.data.story_id,
                parent_id: this.data.parent_id,
                text: this.data.text,
                points : this.data.points,
                children: this.data.children,
                created_at_i: this.data.created_at_i,
                type: this.data.type
             }
          };
        }
      }


}