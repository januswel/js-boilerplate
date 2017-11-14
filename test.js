// flow

import {
    describe,
    it,
} from 'kocha'
import assert from 'assert'

import { concat } from './index'

describe('concat', () => {
    it('returns concatenated string', () => {
        assert('1footrue' === concat(1, 'foo', true))
    })
})
