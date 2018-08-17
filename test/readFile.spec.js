/**
 *****************************************
 * Created by lifx
 * Created on 2018-08-17 11:37:07
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载模块
 *****************************************
 */
import fs from '@arted/utils/fs';
import readFile from '../lib/readFile';


/**
 *****************************************
 * 测试模块
 *****************************************
 */
describe('测试【readFile】', () => {
    test('编译代码', async () => {
        let result = await readFile(__dirname + '/demo.scss'),
            code = await fs.readFile(__dirname + '/demo.css', 'utf-8');

        // 校验结果
        expect(result.css.indexOf('url("./bd.svg?stroke=%23ddd")')).not.toBe(-1);
        expect(result.css).toBe(code);
    });
});
