/**
 *****************************************
 * Created by lifx
 * Created on 2017-08-13 14:37:04
 *****************************************
 */
'use strict';



/*
 *************************************
 * 设置【CSS】预处理参数
 *************************************
 */
const
    autoprefixerOptions = {
        browsers: [
            'ie >= 9',
            'Chrome >= 20',
            'ff >= 15',
            'iOS >= 6',
            'Android >= 4.0'
        ]
    };


/*
 *************************************
 * 输出【CSS】预处理配置
 *************************************
 */
module.exports = {
    plugins: [
        require('autoprefixer')(autoprefixerOptions)
    ]
};
