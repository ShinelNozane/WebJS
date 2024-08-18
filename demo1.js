// ==UserScript==
// @name         自动点击按钮（带手动触发）
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  添加一个手动触发按钮来执行自动点击操作
// @author       你的名字
// @match        https://www.teachersedu.cn/project/projectcourselist?projectid=588614481471341829
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建一个按钮并添加到页面上
    function createTriggerButton() {
        var triggerButton = document.createElement('button');
        triggerButton.innerHTML = '执行自动点击';
        triggerButton.style.position = 'fixed';
        triggerButton.style.top = '10px';
        triggerButton.style.right = '10px';
        triggerButton.style.zIndex = '9999';
        triggerButton.style.padding = '10px';
        triggerButton.style.backgroundColor = '#28a745';
        triggerButton.style.color = '#000';
        triggerButton.style.border = 'none';
        triggerButton.style.borderRadius = '5px';
        triggerButton.style.cursor = 'pointer';

        // 将按钮添加到页面的body中
        document.body.appendChild(triggerButton);

        // 给按钮绑定点击事件
        triggerButton.addEventListener('click', function() {
            // 设置延迟时间（毫秒）
            var delay = 100;

            // 使用setTimeout来实现延迟点击
            setTimeout(function() {
                // 使用CSS选择器找到按钮元素
                var button = document.querySelector('#teacher > section > div > div > div.study-center-content > div > div.article-list-body.row > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > div'); // 替换为实际的选择器
                
                // 检查按钮是否存在
                if (button) {
                    // 自动点击按钮
                    button.click();
                    console.log('按钮已被自动点击');
                } else {
                    console.log('未找到按钮');
                }
            }, delay); // 延迟时间
        });
    }

    // 等待页面加载完成后创建触发按钮
    window.onload = function() {
        createTriggerButton();
    };

})();
