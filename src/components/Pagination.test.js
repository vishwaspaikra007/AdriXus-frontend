import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { handlePage } from './Dashboard'

describe('page', () => {
  test('check for no of pages', () => {
    const list = [
      {
        firstName: 'Hannah',
        lastName: 'Ryan',
        email: 'Hannah_Ryan653@corti.com',
        password: '240117067.17',
      },
      {
        firstName: 'Carla',
        lastName: 'Dwyer',
        email: 'Carla_Dwyer7200@irrepsy.com',
        password: '457753367.50',
      },
      {
        firstName: 'Mayleen',
        lastName: 'Redden',
        email: 'Mayleen_Redden7530@corti.com',
        password: '874784469.07',
      },
      {
        firstName: 'Noah',
        lastName: 'Radcliffe',
        email: 'Noah_Radcliffe8497@joiniaa.com',
        password: '433284702.77',
      },
      {
        firstName: 'Angelica',
        lastName: 'Janes',
        email: 'Angelica_Janes2982@nickia.com',
        password: '177999109.78',
      },
      {
        firstName: 'Barry',
        lastName: 'Jarvis',
        email: 'Barry_Jarvis6326@sveldo.biz',
        password: '848224848.63',
      },
      {
        firstName: 'Anthony',
        lastName: 'Gallacher',
        email: 'Anthony_Gallacher2530@bauros.biz',
        password: '582922897.66',
      },
      {
        firstName: 'Chadwick',
        lastName: 'King',
        email: 'Chadwick_King5352@nickia.com',
        password: '106805573.88',
      },
      {
        firstName: 'Ron',
        lastName: 'Mullins',
        email: 'Ron_Mullins832@typill.biz',
        password: '394355617.65',
      },
      {
        firstName: 'Emerald',
        lastName: 'Woods',
        email: 'Emerald_Woods7854@jiman.org',
        password: '712741525.65',
      },
      {
        firstName: 'Tyler',
        lastName: 'Carpenter',
        email: 'Tyler_Carpenter3797@yahoo.com',
        password: '440588568.91',
      },
      {
        firstName: 'Gil',
        lastName: 'Evans',
        email: 'Gil_Evans6673@qater.org',
        password: '111169134.67',
      },
      {
        firstName: 'Wade',
        lastName: 'Moran',
        email: 'Wade_Moran40@dionrab.com',
        password: '898943243.98',
      },
    ]
    const obj = {
      0: [
        {
            firstName: 'Hannah',
            lastName: 'Ryan',
            email: 'Hannah_Ryan653@corti.com',
            password: '240117067.17',
          },
          {
            firstName: 'Carla',
            lastName: 'Dwyer',
            email: 'Carla_Dwyer7200@irrepsy.com',
            password: '457753367.50',
          },
          {
            firstName: 'Mayleen',
            lastName: 'Redden',
            email: 'Mayleen_Redden7530@corti.com',
            password: '874784469.07',
          },
          {
            firstName: 'Noah',
            lastName: 'Radcliffe',
            email: 'Noah_Radcliffe8497@joiniaa.com',
            password: '433284702.77',
          },
          {
            firstName: 'Angelica',
            lastName: 'Janes',
            email: 'Angelica_Janes2982@nickia.com',
            password: '177999109.78',
          },
          {
            firstName: 'Barry',
            lastName: 'Jarvis',
            email: 'Barry_Jarvis6326@sveldo.biz',
            password: '848224848.63',
          },
          {
            firstName: 'Anthony',
            lastName: 'Gallacher',
            email: 'Anthony_Gallacher2530@bauros.biz',
            password: '582922897.66',
          },
          {
            firstName: 'Chadwick',
            lastName: 'King',
            email: 'Chadwick_King5352@nickia.com',
            password: '106805573.88',
          },
          {
            firstName: 'Ron',
            lastName: 'Mullins',
            email: 'Ron_Mullins832@typill.biz',
            password: '394355617.65',
          },
          {
            firstName: 'Emerald',
            lastName: 'Woods',
            email: 'Emerald_Woods7854@jiman.org',
            password: '712741525.65',
          },
      ],
      1: [
        {
            firstName: 'Tyler',
            lastName: 'Carpenter',
            email: 'Tyler_Carpenter3797@yahoo.com',
            password: '440588568.91',
          },
          {
            firstName: 'Gil',
            lastName: 'Evans',
            email: 'Gil_Evans6673@qater.org',
            password: '111169134.67',
          },
          {
            firstName: 'Wade',
            lastName: 'Moran',
            email: 'Wade_Moran40@dionrab.com',
            password: '898943243.98',
          },
      ]
    }
    expect(handlePage(list)).toStrictEqual(obj)
  })
})
