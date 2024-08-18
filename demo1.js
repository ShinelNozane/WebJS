// ==UserScript==
// @name         自动点击按钮
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动点击网页上的指定按钮
// @author       你的名字
// @match        https://www.teachersedu.cn/project/projectcourselist?projectid=588614481471341829
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 等待页面加载完成
    window.onload = function() {
        // 设置延迟时间（毫秒）
        var delay = 3000; // 3秒

        // 使用setTimeout来实现延迟点击
        setTimeout(function() {
            // 使用CSS选择器找到按钮元素
            var button = document.querySelector('#myButton'); // 替换为实际的选择器
            
            // 检查按钮是否存在
            if (button) {
                // 自动点击按钮
                button.click();
                console.log('按钮已被自动点击');
            } else {
                console.log('未找到按钮');
            }
        }, delay); // 延迟时间
    };

})();
