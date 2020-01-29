//'use strict';

import React from 'react';
import App from '../client';
import renderer from 'react-test-renderer';

const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3005/';


let page;
let browser;
const width = 800;
const height = 600;

beforeAll (async () => {
  browser = await puppeteer.launch({
    headless:false,
    slowMo:80,
    args: [`--window-size=$(width), $(height)`]
  });
  page = await browser.newPage();
  await page.setViewport({width, height});
});

describe('TESTS', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  })

  test('first test', async () => {
    var div = 'h1'
    const title = await page.$eval(div, e => e.textContent);
    expect(title).toEqual('React Works!')
  });

  test('renderds something', async ()=> {
    const tree = renderer
      .create( <App /> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});

afterAll (() => {
  browser.close();
})