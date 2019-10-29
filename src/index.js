// Alternate implementation
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 5; i++) {
        const btn = document.createElement('button');

        btn.appendChild(document.createTextNode('Button ' + i));

        btn.addEventListener('click', () => { 
            console.log(i); 
        });

        document.body.appendChild(btn);
    }
});


