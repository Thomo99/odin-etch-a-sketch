
document.addEventListener('DOMContentLoaded', function(){
    const gridSizeBtn = document.querySelector('#gridSizeBtn');
    
    const gridContainer = document.querySelector('#gridContainer');

    for(let r = 0; r < 16; r++){
        const row = document.createElement('div');
        row.classList.add('row');
        //console.log(r);//r - check

        for(let c = 0; c < 16; c++){
            const col = document.createElement('div');
            col.classList.add('column');
            row.appendChild(col);
            //console.log(c);//c - check

        }
        gridContainer.appendChild(row);
    }
    
});

