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
import transformFile from '../lib/transformFile';


/**
 *****************************************
 * 测试模块
 *****************************************
 */
describe('测试【transformFile】', () => {
    test('编译代码', async () => {
        let dist = __dirname + '/dist',
            result = await transformFile(__dirname + '/demo.scss', dist),
            output = await fs.readFile(dist, 'utf-8'),
            code = await fs.readFile(__dirname + '/demo.css', 'utf-8');

        // 校验结果
        expect(output.indexOf('url("./bd.svg?stroke=%23ddd")')).not.toBe(-1);
        expect(output).toBe(result.css);
        expect(output).toBe(code);

        // 移除临时文件
        await fs.unlink(dist);
    });
});
