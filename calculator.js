let counter = 0;
        function count() {
            counter++;
            document.querySelector('h1').innerHTML =counter;
        }
        document.querySelector('button').onclick = count;
        setInterval(count,1000);
        // document.querySelector('button').addEventListener('mouseover',count);

        