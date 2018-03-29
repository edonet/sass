#!/usr/bin/env node


/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-29 23:11:54
 *****************************************
 */
'use strict';



/**
 *****************************************
 * 加载依赖
 *****************************************
 */
const
    fs = require('fs'),
    sass = require('node-sass'),
    postcss = require('postcss'),
    stdout = require('ylan/stdout'),
    promisify = require('ylan/promisify'),
    postcssOptions = require('./postcss.conf');


/*
 *************************************************
 * 定义命令运行函数
 *************************************************
 */
async function start() {

    // 获取指定的输入文件
    let src = process.argv[2],
        dist,
        res;


    // 未指定文件时退出
    if (!src) {
        return stdout.warn('--> warn: the file need to compiled not found!');
    }

    // 获取输出文件路径
    dist = process.argv[3] || src.replace(/\.scss$/, '.css');

    // 打印信息
    stdout.info('-'.repeat(80));
    stdout.info('Sass and Autoprefixer');
    stdout.info('-'.repeat(80));
    stdout.info(`source: ${src}`);
    stdout.info(`output: ${dist}`);

    // 编译【sass】文件
    res = await promisify(sass.render)({ file: src, outputStyle: 'compressed' });

    // 添加兼容前缀
    res = await postcss(postcssOptions).process(res.css, { from: src, to: dist });

    // 写入文件
    await promisify(fs.writeFile)(dist, res.css);

    // 编译成功
    stdout.info(`size: ${res.css.length}`);
    stdout.info('sass compiled successfully!\n');
}


/*
 *************************************************
 * 抛出回调接口
 *************************************************
 */
module.exports = start().catch(stdout.error);
