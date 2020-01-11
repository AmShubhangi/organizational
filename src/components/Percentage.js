import React from 'react';

class PercentageLoader extends React.Component {
    componentDidMount() {
        var obj = document.querySelector('.preloader')
         var inner = document.querySelector('.preloader_inner')
        var w = 0,
            t = setInterval(function () {
                w = w + 1;
                inner.textContent = w + '%';
                if (w === 100) {
                    clearInterval(t);
                    w = 0;
                }
            }, 50);
    }
    render() {
        return (
            <div>
                <div class="preloader">
                    <div class="preloader_inner">100%</div>
                </div>
            </div>
        )
    }
}

export default PercentageLoader;