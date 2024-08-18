// ==UserScript==
// @name         手动触发点击去学习按钮
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  添加按钮，通过点击按钮来触发自动点击目标<span>按钮的功能
// @author       你的名字
// @match        https://www.teachersedu.cn/project/projectcourselist?projectid=588614481471341829
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建并添加一个按钮到页面
    var customButton = document.createElement('button');
    customButton.innerText = '开始自动点击';
    customButton.style.position = 'fixed';
    customButton.style.top = '10px';
    customButton.style.right = '10px';
    customButton.style.zIndex = 1000;
    customButton.style.padding = '10px';
    customButton.style.backgroundColor = '#4CAF50';
    customButton.style.color = '#000';
    customButton.style.border = 'none';
    customButton.style.borderRadius = '5px';
    customButton.style.cursor = 'pointer';

    document.body.appendChild(customButton);

    // 设置按钮点击事件
    customButton.addEventListener('click', function() {
        console.log('按钮被点击，开始自动点击目标元素');

        // 开始执行脚本
        startAutoClick();
    });

    // 自动点击的函数
    function startAutoClick() {
        var delay = 3000; // 3秒延迟

        // 创建 MutationObserver 观察 DOM 变化
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    var spans = document.querySelectorAll('span.mrl');

                    spans.forEach(function(span) {
                        if (span.textContent.trim() === '4') {
                            span.click();
                            console.log('找到并点击了一个<span>元素');
                        }
                    });
                }
            });
        });

        // 启动观察
        observer.observe(document.body, { childList: true, subtree: true });

        // 初次加载时的延迟点击
        setTimeout(function() {
            var spans = document.querySelectorAll('span.mrl');

            spans.forEach(function(span) {
                if (span.textContent.trim() === '4') {
                    span.click();
                    console.log('找到并点击了一个<span>元素');
                }
            });
        }, delay);
    }

})();
