# Parachute Drop Contract for HackAtom Seoul 2022
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
