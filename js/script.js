document.addEventListener("DOMContentLoaded", function() {

    fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
    .then(response => response.json())
    .then(countrise => {
        console.log(countrise);
        createDOM(countrise);
    });

    function createDOM(countrise) {
        const body = document.querySelector('body');

        let list = document.createElement('ul');
        list.classList.add('articles');
        body.append(list);

        for(let i = 0; i < countrise.length; i++) {
            let item = document.createElement('li');
            item.classList.add('article');
            list.append(item);

            let title = document.createElement('h2');
            title.classList.add('article__title');
            title.textContent = `${countrise[i].title}`
            item.append(title);

            let text = document.createElement('p');
            text.classList.add('article__text');
            text.textContent = `${countrise[i].body}`
            item.append(text);


            let label = document.createElement('label');
            label.setAttribute('for', `checkbox${[i]}`);
            label.classList.add('article__label');

            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', `checkbox${[i]}`);
            checkbox.classList.add('article__checkbox');

            let done = document.createElement('span');
            done.classList.add('article__done');

            label.append(checkbox);
            label.append(done);
            item.append(label);

        }

        colorContent();
    }

    function colorContent() {
        let inputs = document.querySelectorAll('input');
        inputs.forEach((input) => {
            input.addEventListener('click', function() {
                let article = input.parentNode.parentNode;
                console.log(article);

                let title = article.querySelector('.article__title');
                let text = article.querySelector('.article__text');

                article.classList.toggle('article--grey');
                title.classList.toggle('article__title--white');
                text.classList.toggle('article__text--white');
            })
        })
    }
})