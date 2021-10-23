let counter = 0;
        function count() {
            counter++;
            document.querySelector('h1').innerHTML =counter;
            if (counter % 10=== 0) {                 // template literal
            alert(`count is now ${counter}`)
            } 
        }
        document.querySelector('button').onclick = count;
        document.querySelector('button').addEventListener('mouseover',count);

        