const {createTables} = require('../js/makeTable');
const {getKids} = require('../js/kidModule');
const {assert: {equal,property,isTrue,hasAnyKeys,isFunction,isObject,isArray,containsAllKeys,notExists}} = require('chai');

describe('kids module', () => {
    describe('getKids', () => {
        it('should get a list of all kids', () => {
            isArray(getKids());
            isObject(getKids()[0]);
        });
    });
});