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
import transform from '../lib/transform';


/**
 *****************************************
 * 测试模块
 *****************************************
 */
describe('测试【transform】', () => {
    test('编译代码', async () => {
        let result;

        result = await transform('.class { $i: 3px; width: 1px + $i; }');
        expect(result.css.trim()).toBe('.class{width:4px}');
        result = await transform('.class { transform: translate(0) }');
        expect(result.css.indexOf('-webkit-transform:translate(0);')).not.toBe(-1);
    });
});
