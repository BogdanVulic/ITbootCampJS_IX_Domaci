import service from './service.mjs';

function display(){ 
    let itemContainer = document.querySelector('#item-container');
    service.data.forEach(element => {
        let item = document.createElement('p');
            let spanDecription = document.createElement('span');
                let description = document.createElement('span');
            let spanCheckbox = document.createElement('span');
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
            let spanDelete = document.createElement('span');
                let btnDelete = document.createElement('button');

        spanDecription.className = 'span-description';
        spanCheckbox.className = 'span-checkbok';
        spanDelete.className = 'span-delete';
        item.className = 'item';
        
        description.className = 'description';
        checkbox.className = 'checkbox';
        btnDelete.className = 'delete';

        description.textContent = element.desc;
        checkbox.checked = element.done;
        btnDelete.textContent = 'delete';

        if(checkbox.checked) description.style.textDecoration = 'line-through';
            else  description.style.textDecoration = 'none';

        spanDecription.appendChild(description);
        spanCheckbox.appendChild(checkbox);
        spanDelete.appendChild(btnDelete);
        item.append(spanDecription, spanCheckbox, spanDelete);
        itemContainer.appendChild(item);

        checkbox.addEventListener('change', () => {
            if(checkbox.checked) description.style.textDecoration = 'line-through';
            else  description.style.textDecoration = 'none';
        })

        btnDelete.addEventListener('click', () => {
            item.remove();
            service.deleteById(service.count);
        })
    });
}
export default{
    display
}
