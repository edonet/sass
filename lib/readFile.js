/**
 *****************************************
 * Created by lifx
 * Created on 2018-08-17 11:12:49
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
const transform = require('./transform');


/**
 *****************************************
 * 转化文件
 *****************************************
 */
module.exports = async function readFile(src, options = {}) {
    return await transform({
        ...options,
        file: src,
        sourceOpation: {
            from: src,
            to: options.output || src.replace(/\.scss$/, '') + '.min.css'
        }
    });
};
