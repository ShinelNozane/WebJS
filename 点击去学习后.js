// ==UserScript==
// @name         手动触发点击多个链接
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  添加按钮，通过点击按钮来触发自动点击所有匹配的<a>链接的功能
// @author       你的名字
// @match        https://www.teachersedu.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建并添加一个按钮到页面
    var customButton = document.createElement('button');
    customButton.innerText = '点击所有链接';
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
        console.log('按钮被点击，开始自动点击所有目标链接');

        // 开始执行点击多个目标链接的功能
        clickAllTargetLinks();
    });

    // 自动点击多个目标链接的函数
    function clickAllTargetLinks() {
        // 使用选择器定位所有目标<a>元素
        var targetLinks = document.querySelectorAll('#teacher > div:nth-child(3) > div > div.col-lg-9.col-md-8.course-detail-content > section > div:nth-child(2) > div.panel-body > div > div > div:nth-child(1) > div.el-tree-node__content > ul > li > a');

        // 检查是否找到了目标链接
        if (targetLinks.length > 0) {
            targetLinks.forEach(function(link, index) {
                setTimeout(function() {
                    link.click();
                    console.log('点击了第 ' + (index + 1) + ' 个链接');
                }, index * 1000); // 每次点击之间添加1秒的延迟
            });
        } else {
            console.log('未找到任何目标<a>元素');
        }
    }

})();
