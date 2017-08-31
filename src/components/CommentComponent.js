
import styles from './CommentComponent.scss';
export default {
    

    renderParent(data){

    },

    render(data){

        const className = 'CommentComponent'
        const template = `<ul>
            <li>Hello</li>
        </ul>`
        //console.log(data);
        //let parentUl = document.createElement('ul')
        //data.children.map(({id, text, children}) => {
        //    let parentLi = document.createElement('li')
        //    parentLi.innerHTML = text;
        //    parentUl.appendChild(parentLi);
        //});
        //const template = parentUl;
        
        const el = document.createElement('div');
        el.className = styles[className];
        //el.appendChild(template);
        el.innerHTML = template;
        return el;

        //let parentUl = document.createElement('ul')
        /*data.children.map(({id, text, children}) => {
           

            let parentLi = document.createElement('li')
            parentLi.innerHTML = text;
            parentUl.appendChild(parentLi);
            children.map(({id, text, children}) => {
                let childUl = document.createElement('ul');
                childUl.id = id;
                let childLi = document.createElement('li')
                childLi.innerHTML = text;
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
        })
        console.log(parentUl)
        */

        
        
        
        /*const template = `<div>
            <div>${data.by}</div>
            <div>${data.id}</div>
            <div>${data.parent}</div>
            <div>${data.time}</div>
            <div>${data.text}</div>
        </div>*/
    

      
      
        //const el = document.createElement('ul');
        //el.className = styles[className];
        //el.innerHTML = template;
        //return el;
    }

}