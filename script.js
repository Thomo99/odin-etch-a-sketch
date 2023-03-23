document.addEventListener('DOMContentLoaded', function(){
    const sizeBtnDiv = document.querySelector('#sizeBtnDiv');
    const sizePrompt = document.createElement('p');
    sizePrompt.classList.add('sizePrompt');
    sizePrompt.textContent = 'Enter grid size (max 1000): ';
    sizeBtnDiv.appendChild(sizePrompt);

    const sizeInput = document.createElement('input');
    sizeInput.type = 'number';
    sizeInput.min = '1';
    sizeInput.max = '1000';
    sizeInput.value = '16';
    sizeBtnDiv.appendChild(sizeInput);

    const sizeBtn = document.createElement('button');
    sizeBtn.classList.add("sizeBtn")
    sizeBtn.textContent = 'confirm';
    sizeBtnDiv.appendChild(sizeBtn);

    sizeBtn.addEventListener('click', function() {
        const newSize = parseInt(sizeInput.value);
        if (newSize > 0 && newSize <= 1000) {
            // clear existing grid
            gridContainer.innerHTML = '';
            // create new grid
            for(let r = 0; r < newSize; r++){
                const row = document.createElement('div');
                row.classList.add('row');
                for(let c = 0; c < newSize; c++){
                    const col = document.createElement('div');
                    col.classList.add('column');
                    col.addEventListener('mouseover', function() {
                        col.classList.add('hovered');
                    });
                    row.appendChild(col);
                }
                gridContainer.appendChild(row);
            }
        } else {
            alert('Invalid size! Please enter a value between 1 and 1000.');
        }
    });

    //Grid rows and columns
    const gridContainer = document.querySelector('#gridContainer');

    for(let r = 0; r < 16; r++){
        const row = document.createElement('div');
        row.classList.add('row');
        //console.log(r);//r - check

        for(let c = 0; c < 16; c++){
            const col = document.createElement('div');
            col.classList.add('column');
            col.addEventListener('mouseover', function() {
                col.classList.add('hovered');
            });
            row.appendChild(col);
            //console.log(c);//c - check

        }
        gridContainer.appendChild(row);
    }
    
});

