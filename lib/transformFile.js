/**
 *****************************************
 * Created by lifx
 * Created on 2018-08-17 11:02:09
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
const
    fs = require('@arted/utils/fs'),
    readFile = require('./readFile');


/**
 *****************************************
 * 转化文件
 *****************************************
 */
module.exports = async function transformFile(src, dist, options) {
    let output = dist || src.replase(/\.scss$/, '') + '.min.css',
        result = await readFile(src, { ...options, output });

    // 写入文件
    await fs.writeFile(output, result.css);
    return result;
};
