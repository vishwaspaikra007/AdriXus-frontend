import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Signup, { validForm } from './Signup'

describe('login', () => {
    test('validate function should pass on correct input', () => {
        const text = 'text@test.com'
        expect(validForm(text)).toBe(true)
    })
})