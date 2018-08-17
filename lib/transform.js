/**
 *****************************************
 * Created by lifx
 * Created on 2018-08-17 10:43:21
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
const
    path = require('@arted/utils/path'),
    sass = require('node-sass'),
    postcss = require('postcss'),
    postcssOptions = require('./postcss.conf');


/**
 *****************************************
 * 转变代码
 *****************************************
 */
module.exports = function transform(code, options = {}) {

    // 重载函数
    if (arguments.length > 1) {
        return transform({ ...options, data: code });
    }

    // 返回【promise】
    return new Promise((resolve, reject) => {
        let { data, file } = typeof code === 'string' ? { data: code } : code,
            source = { from: file || path.cwd('source.scss'), to: 'source.css', ...options.sourceOptions },
            sassOptions = {
                outputStyle: 'compressed',
                includePaths: [path.dirname(source.from)],
                ...options.sassOptions,
                data,
                file
            };

        // 编译代码
        sass.render(sassOptions, async (err, res) => {
            if (!err) {
                try {
                    let processor = postcss({ ...postcssOptions, ...options.postcssOptions });

                    // 解析文件
                    return resolve(
                        await processor.process(res.css, source)
                    );
                } catch (error) {
                    err = error;
                }
            }

            // 返回错误
            reject(err);
        });
    });
};
