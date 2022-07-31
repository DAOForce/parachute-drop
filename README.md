# Parachute Drop Servie for HackAtom Seoul 2022
## Purpose
* **`Parachute Drop`** is an *airdrop in platform **`running on Evmos`** purposed to enhance economic sustainability for DAOs and projects.
* Launch your own DAO and airdrop tokens in serveral pre-scheduled batch rounds run dividedly / fully on-chain, only with some initial settings.

## Problem
* More and more projects are using airdrop to distribute their tokens and initiate their token economy.
* However, airdrops are not working very ideally on many projects as people tend to sell airdropped tokens right after they got them, without contributing or participating on the DAO governance.
* However, you cannot perfectly identify and exclude people from airdrop who are willing to sell their tokens. 
* Selling airdropped tokens in a short term could damage the sustainability of projects and distort the token economy. 
* Also, many DAOs and projects make token receivers delegate their voting powers during the airdrop process. But receivers won’t change their delegation and neglect it.

## Solution
* We suggest 4 main features to solve the problems:
1. Divide airdrop into 10 ~ 15 rounds with intervals for 3 or 6 months b/w each rounds. (1 week for each round)
  1.1. Divided airdrops are executed as scheduled at the initial contract deployment, without additional off-chain operations.
2. You must delegate your token before receiving airdrops. (in case of governance token)
3. DAO/projects would check whether airdrop receivers have sold their tokens or not when the next round has begun. 
4. Receivers would get token proportionate to amounts of tokens they have been holding during the interval, and delegate its token to another one. (in case of governance token)

## How to keep track of users' balance of token 
Please follow this link
https://docs.google.com/document/d/11R5V5q38uc41Iu0GLragcQbfb6uuSFj7wGrOTU9E6ZM/edit?usp=sharing

## Demonstration Video
https://drive.google.com/file/d/1bwGjGstn-IYZNQftPZEfoDuDP6-OtB9f/view?usp=sharing

## Dependencies 
```
"dependencies": {
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@metamask/providers": "^9.0.0",
    "@tanstack/react-query": "^4.0.10",
    "axios": "^0.27.2",
    "daisyui": "^2.20.0",
    "dayjs": "^1.11.4",
    "emotion-reset": "^3.0.1",
    "evmosjs": "^0.2.8",
    "ipfs-http-client": "^57.0.3",
    "next": "12.1.6",
    "papaparse": "^5.3.2",
    "react": "18.1.0",
    "react-dom": "18.1.0",
    "react-spinners": "^0.13.4"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@emotion/babel-plugin": "^11.9.2",
    "@keplr-wallet/types": "^0.10.13",
    "@stylelint/postcss-css-in-js": "^0.38.0",
    "@types/node": "17.0.38",
    "@types/papaparse": "^5.3.3",
    "@types/react": "18.0.10",
    "@types/react-dom": "18.0.5",
    "@typescript-eslint/eslint-plugin": "^5.27.0",
    "@typescript-eslint/parser": "^5.27.0",
    "autoprefixer": "^10.4.8",
    "babel-plugin-inline-react-svg": "^2.0.1",
    "babel-plugin-module-resolver": "^4.1.0",
    "eslint": "^8.16.0",
    "eslint-config-next": "12.1.6",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.30.0",
    "eslint-plugin-react-hooks": "^4.5.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.1",
    "postcss": "^8.4.14",
    "postcss-html": "^1.4.1",
    "postcss-syntax": "^0.36.2",
    "prettier": "^2.6.2",
    "stylelint": "^14.8.5",
    "stylelint-config-prettier": "^9.0.3",
    "stylelint-config-standard": "^25.0.0",
    "stylelint-config-styled-components": "^0.1.1",
    "tailwindcss": "^3.1.6",
    "typescript": "4.7.2"
  }
```
