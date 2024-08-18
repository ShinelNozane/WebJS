// ==UserScript==
// @name         手动触发点击链接
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  添加按钮，通过点击按钮来触发自动点击目标<a>链接的功能
// @author       你的名字
// @match        https://www.teachersedu.cn/project/projectcourselist?projectid=588614481471341829
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建并添加一个按钮到页面
    var customButton = document.createElement('button');
    customButton.innerText = '点击链接';
    customButton.style.position = 'fixed';
    customButton.style.top = '10px';
    customButton.style.right = '10px';
    customButton.style.zIndex = 1000;
    customButton.style.padding = '10px';
    customButton.style.backgroundColor = '#4CAF50';
    customButton.style.color = 'white';
    customButton.style.border = 'none';
    customButton.style.borderRadius = '5px';
    customButton.style.cursor = 'pointer';

    document.body.appendChild(customButton);

    // 设置按钮点击事件
    customButton.addEventListener('click', function() {
        console.log('按钮被点击，开始自动点击目标链接');

        // 开始执行点击目标链接的功能
        clickTargetLink();
    });

    // 自动点击目标链接的函数
    function clickTargetLink() {
        // 使用你提供的选择器定位到目标<a>元素
        var targetLink = document.querySelector('#teacher > div:nth-child(3) > div > div.col-lg-9.col-md-8.course-detail-content > section > div:nth-child(2) > div.panel-body > div > div > div:nth-child(1) > div.el-tree-node__content > ul > li > a');

        // 检查是否找到了目标链接
        if (targetLink) {
            targetLink.click();
            console.log('找到并点击了目标<a>元素');
        } else {
            console.log('未找到目标<a>元素');
        }
    }

})();
