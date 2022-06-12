import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from './Dashboard'

jest.mock('./Dashboard', () => {
    return {
        _fetch: jest.fn().mockImplementation(async () => {
            return new Promise((resolve, reject) => {
                resolve({
                    status: 'successful',
                    list: [{firstName: 'vishwas', lastName: 'paikra', email: 'vishwaspaikra007@gmail.com'}]
                })
            })
    })
}})

test('render table after fetch', async () => {
    render(<Dashboard token="tokenvalue"/>)
    const element = await screen.getByText(/Hello vishwas paikra/i);
    expect(element).toBeInTheDocument();
})