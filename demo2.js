// ==UserScript==
// @name         自动点击去学习按钮
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  自动点击所有“去学习”按钮
// @author       你的名字
// @match        https://www.teachersedu.cn/project/projectcourselist?projectid=588614481471341829
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 设置延迟时间（毫秒）
    var delay = 3000; // 3秒

    // 创建 MutationObserver 观察 DOM 变化
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // 检查是否有新的节点被添加
            if (mutation.addedNodes.length) {
                var buttons = document.querySelectorAll('#teacher > section > div > div > div.study-center-content > div > div.article-list-body.row > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > div > a');

                buttons.forEach(function(button) {
                    if (button.textContent.trim() === '去学习') {
                        // 自动点击按钮
                        button.click();
                        console.log('找到并点击了一个“去学习”按钮');
                    }
                });
            }
        });
    });

    // 启动观察
    observer.observe(document.body, { childList: true, subtree: true });

    // 初次加载时的延迟点击
    setTimeout(function() {
        var buttons = document.querySelectorAll('#teacher > section > div > div > div.study-center-content > div > div.article-list-body.row > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > div > a');

        buttons.forEach(function(button) {
            if (button.textContent.trim() === '去学习') {
                button.click();
                console.log('找到并点击了一个“去学习”按钮');
            }
        });
    }, delay);

})();
