
import styles from './CommentComponent.scss';
export default {
    
    content: [],
    renderParent(id, text){
        let parentLi = document.createElement('li')
        parentLi.innerHTML = text;
        return parentLi;
    },

    renderChildren(id, text){
        let childLi = document.createElement('li')
        childLi.innerHTML = text;
        return childLi;
    },

    render(data){
        //location.reload();
        const className = 'CommentComponent'
       
       
        let parentUl = document.createElement('ul')
        data.children.map(({id, text, children}) => {
            let parentLi = this.renderParent(id, text)
            parentUl.appendChild(parentLi);
            
            children.map(({id, text, children}) => {
                let childUl = document.createElement('ul');
                childUl.id = id;
                let childLi = this.renderChildren(id, text)
                childUl.appendChild(childLi)
                parentLi.appendChild(childUl);
                children.map(({id, text, children}) => {
                    let grandChildUl = document.createElement('ul');
                    grandChildUl.id = id;
                    let grandChildLi = document.createElement('li')
                    grandChildLi.innerHTML = text;
                    grandChildUl.appendChild(grandChildLi)
                    childLi.appendChild(grandChildUl);
                });
            })
        });
        
        this.content.push(parentUl);
        console.log(this.content[0]);
        if(this.content != undefined){
            
                const template = parentUl;
                const el = document.createElement('div');
                el.className = styles[className];
                el.innerHTML = '<ul>' + this.content[0].innerHTML + '</ul>';
                console.log(el.innerHTML);
                return el;
            
        }
    }

}