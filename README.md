# Calendar JSON API {...}

## Sumary

- [Introduction](#introduction)
- [Endpoints](#endpoints)
  - [Current month](#current-month)
  - [By month name](#by-month-name)
  - [By month name and year](#by-month-name-and-year)
  - [Current year](#current-year)
  - [By year](#by-year)
- [Technologies](#technologies)
- [Tests](#tests)
- [Deployment](#deployment)

--- 

# Introduction

The Caledar JSON API can be used to obtain the calendar in 2D array format, receiving as the parameter the desired date, which can be the current month, selected month, or even the information of a whole year.

--- 

# Endpoits

## Current month

Returns the calendar of the current date

```url
http://localhost:3500/month
```  

As the date is December 2021, the response when making a request for this endpoint would be:

```json
{
  "December":[
    [  0,  0,  0,  1,  2,  3,  4],
    [  5,  6,  7,  8,  9, 10, 11],
    [ 12, 13, 14, 15, 16, 17, 18],
    [ 19, 20, 21, 22, 23, 24, 25],
    [ 26, 27, 28, 29, 30, 31,  0]
  ],
  "year": 2021
}
```
**December 2021** 

| Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
| :-----:| :-----:| :------:| :--------:| :-------:| :-----:| :-------:|
|        |        |         | 1         | 2        | 3      | 4        |
| 5      | 6      | 7       | 8         | 9        | 10     | 11       |
| 12     | 13     | 14      | 15        | 16       | 17     | 18       |
| 19     | 20     | 21      | 22        | 23       | 24     | 25       |
| 26     | 27     | 28      | 29        | 30       | 31     |          |

---

## By month name

Returns the calendar of the month entered as a parameter in the current year

```url
http://localhost:3500/month/<monthName>
```  
Being the current year 2021, when making a request to the endpoint:
```url
http://localhost:3500/month/november
```
the response returned will be:

```json
{
  "November":[
    [  0,  1,  2,  3,  4,  5,  6],
    [  7,  8,  9, 10, 11, 12, 13],
    [ 14, 15, 16, 17, 18, 19, 20],
    [ 21, 22, 23, 24, 25, 26, 27],
    [ 28, 29, 30,  0,  0,  0,  0]
    ],
  "year": 2021
}
```
**November 2021** 

| Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
| :-----:| :-----:| :------:| :--------:| :-------:| :-----:| :-------:|
|        | 1      | 2       | 3         | 4        | 5      | 6        |
| 7      | 8      | 9       | 10        | 11       | 12     | 13       |
| 14     | 15     | 16      | 17        | 18       | 19     | 20       |
| 21     | 22     | 23      | 24        | 25       | 26     | 27       |
| 28     | 29     | 30      |           |          |        |          |

---

## By month name and year

Returns the month and year calendar entered as a parameter in the url

```url
http://localhost:3500/month/<monthName>?year=<yearValue>
```
Making a request for this end point, for the month of October, of the year 2012

```url
http://localhost:3500/month/october?year=2012
```

the response returned will be:

```json
{
  "October":[
    [  0,  1,  2,  3,  4,  5,  6],
    [  7,  8,  9, 10, 11, 12, 13],
    [ 14, 15, 16, 17, 18, 19, 20],
    [ 21, 22, 23, 24, 25, 26, 27],
    [ 28, 29, 30, 31,  0,  0,  0]
    ],
  "year": 2012
}
```
**October 2012** 

| Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
| :-----:| :-----:| :------:| :--------:| :-------:| :-----:| :-------:|
|        | 1      | 2       | 3         | 4        | 5      | 6        |
| 7      | 8      | 9       | 10        | 11       | 12     | 13       |
| 14     | 15     | 16      | 17        | 18       | 19     | 20       |
| 21     | 22     | 23      | 24        | 25       | 26     | 27       |
| 28     | 29     | 30      | 31        |          |        |          |

---

## Current year

Returns the complete calendar for the current year

```url
http://localhost:3500/fullyear
```

Being the current year 2021, when making a request to the endpoint, the response returned will be:

```json
{
  "year":2021,
  "January":[
    [  0,  0,  0,  0,  0,  1,  2],
    [  3,  4,  5,  6,  7,  8,  9],
    [ 10, 11, 12, 13, 14, 15, 16],
    [ 17, 18, 19, 20, 21, 22, 23],
    [ 24, 25, 26, 27, 28, 29, 30],
    [ 31,  0,  0,  0,  0,  0,  0]
    ],
  "February":[
    [  0,  1,  2,  3,  4,  5,  6],
    [  7,  8,  9, 10, 11, 12, 13],
    [ 14, 15, 16, 17, 18, 19, 20],
    [ 21, 22, 23, 24, 25, 26, 27],
    [ 28, 29, 30,  0,  0,  0,  0]
    ],
  "March":[
    [  0,  1,  2,  3,  4,  5,  6],
    [  7,  8,  9, 10, 11, 12, 13],
    [ 14, 15, 16, 17, 18, 19, 20],
    [ 21, 22, 23, 24, 25, 26, 27],
    [ 28, 29, 30, 31,  0,  0,  0]
    ],
  "April":[
    [  0,  0,  0,  0,  1, 2,  3],
    [  4,  5,  6,  7,  8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17], 
    [18, 19, 20, 21, 22, 23, 24], 
    [25, 26, 27, 28, 29, 30,  0]
    ],
  "May":[
    [  0,  0,  0,  0,  0,  0,  1],
    [  2,  3,  4,  5,  6,  7,  8],
    [  9, 10, 11, 12, 13, 14, 15], 
    [ 16, 17, 18, 19, 20, 21, 22], 
    [ 23, 24, 25, 26, 27, 28, 29], 
    [ 30, 31,  0,  0,  0,  0,  0]
  ],
  "June":[
    [  0,  0,  1,  2,  3,  4,  5],
    [  6,  7,  8,  9, 10, 11, 12], 
    [ 13, 14, 15, 16, 17, 18, 19], 
    [ 20, 21, 22, 23, 24, 25, 26], 
    [ 27, 28, 29, 30,  0,  0,  0]
  ],
  "July":[
    [  0,  0,  0,  0,  1,  2,  3],
    [  4,  5,  6,  7,  8,  9, 10],
    [ 11, 12, 13, 14, 15, 16, 17], 
    [ 18, 19, 20, 21, 22, 23, 24], 
    [ 25, 26, 27, 28, 29, 30, 31]
  ],
  "August":[
    [  1,  2,  3,  4,  5,  6,  7],
    [  8,  9, 10, 11, 12, 13, 14], 
    [ 15, 16, 17, 18, 19, 20, 21], 
    [ 22, 23, 24, 25, 26, 27, 28], 
    [ 29, 30, 31,  0,  0,  0,  0]
  ],
  "September":[
    [  0,  0,  0,  1,  2,  3,  4],
    [  5,  6,  7,  8,  9, 10 ,11],
    [ 12 ,13 ,14 ,15 ,16 ,17 ,18],
    [ 19 ,20 ,21 ,22 ,23 ,24 ,25],
    [ 26 ,27 ,28 ,29 ,30,  0,  0]
  ],
  "October":[
    [  0,  0,  0,  0,  0,  1,  2],
    [  3,  4,  5,  6,  7,  8,  9],
    [ 10, 11, 12, 13, 14, 15, 16], 
    [ 17, 18, 19, 20, 21, 22, 23], 
    [ 24, 25, 26, 27, 28, 29, 30],
    [ 31,  0,  0,  0,  0,  0,  0]
  ],
  "November":[
    [  0,  1,  2,  3,  4,  5,  6],
    [  7,  8,  9, 10, 11, 12, 13],
    [ 14, 15, 16, 17, 18, 19, 20],
    [ 21, 22, 23, 24, 25, 26, 27],
    [ 28, 29, 30,  0,  0,  0,  0]
  ],
  "December":[
    [  0,  0,  0,  1,  2,  3,  4],
    [  5,  6,  7,  8,  9, 10, 11],
    [ 12, 13, 14, 15, 16, 17, 18],
    [ 19, 20, 21, 22, 23, 24, 25],
    [ 26, 27, 28, 29, 30, 31,  0]
  ]
}
```
---

## By year

Return last year's complete calendar as parameter

```url
http://localhost:3500/fullyear/<year>
```
Entering the year 2031 as a parameter

```url
http://localhost:3500/fullyear/2031
```
the response returned will be:

```json
{
  "year": 2031,
  "January":[
    [  0,  0,  0,  1,  2,  3,  4],
    [  5,  6,  7,  8,  9, 10, 11],
    [ 12, 13, 14, 15, 16, 17, 18],
    [ 19, 20, 21, 22, 23, 24, 25],
    [ 26, 27, 28, 29, 30, 31,  0]
    ],
    "February":[
    [  0,  0,  0,  0,  0,  0,  1],
    [  2,  3,  4,  5,  6,  7,  8],
    [  9, 10, 11, 12, 13, 14, 15],
    [ 16, 17, 18, 19, 20, 21, 22],
    [ 23, 24, 25, 26, 27, 28, 29],
    [ 30,  0,  0,  0,  0,  0,  0]
    ],
    "March":[
    [  0,  0,  0,  0,  0,  0,  1],
    [  2,  3,  4,  5,  6,  7,  8],
    [  9, 10, 11, 12, 13, 14, 15],
    [ 16, 17, 18, 19, 20, 21, 22],
    [ 23, 24, 25, 26, 27, 28, 29],
    [ 30, 31,  0,  0,  0,  0,  0]
    ],
    "April":[
    [  0,  0,  1,  2,  3,  4,  5],
    [  6,  7,  8,  9, 10, 11, 12],
    [ 13, 14, 15, 16, 17, 18, 19],
    [ 20, 21, 22, 23, 24, 25, 26],
    [ 27, 28, 29, 30,  0,  0,  0]
    ],
    "May":[
    [  0,  0,  0,  0,  1,  2,  3],
    [  4,  5,  6,  7,  8,  9, 10],
    [ 11, 12, 13, 14, 15, 16, 17],
    [ 18, 19, 20, 21, 22, 23, 24],
    [ 25, 26, 27, 28, 29, 30, 31]
    ],
    "June":[
    [  1,  2,  3,  4,  5,  6,  7],
    [  8,  9, 10, 11, 12, 13, 14],
    [ 15, 16, 17, 18, 19, 20, 21],
    [ 22, 23, 24, 25, 26, 27, 28],
    [ 29, 30,  0,  0,  0,  0,  0]
    ],
    "July":[
    [  0,  0,  1,  2,  3,  4,  5],
    [  6,  7,  8,  9, 10, 11, 12],
    [ 13, 14, 15, 16, 17, 18, 19],
    [ 20, 21, 22, 23, 24, 25, 26],
    [ 27, 28, 29, 30 ,31,  0,  0]
    ],
    "August":[
    [  0,  0,  0,  0,  0,  1,  2],
    [  3,  4,  5,  6,  7,  8,  9],
    [ 10, 11, 12, 13, 14, 15, 16],
    [ 17, 18, 19, 20, 21, 22, 23],
    [ 24, 25, 26, 27, 28, 29, 30],
    [ 31,  0,  0,  0,  0,  0,  0]
    ],
    "September":[
    [  0,  1,  2,  3,  4,  5,  6],
    [  7,  8,  9, 10, 11, 12, 13],
    [ 14, 15, 16, 17, 18, 19, 20],
    [ 21, 22, 23, 24, 25, 26, 27],
    [ 28, 29, 30,  0,  0,  0,  0]
    ],
    "October":[
    [  0,  0,  0,  1,  2,  3,  4],
    [  5,  6,  7,  8,  9, 10, 11],
    [ 12, 13, 14, 15, 16, 17, 18],
    [ 19, 20, 21, 22, 23, 24, 25],
    [ 26, 27, 28, 29, 30, 31,  0]
    ],
    "November":[
    [  0,  0,  0,  0,  0,  0,  1],
    [  2,  3,  4,  5,  6,  7,  8],
    [  9, 10, 11, 12, 13, 14, 15],
    [ 16, 17, 18, 19, 20, 21, 22],
    [ 23, 24, 25, 26, 27, 28, 29],
    [ 30,  0,  0,  0,  0,  0,  0]
    ],
    "December":[
    [  0,  1,  2,  3,  4,  5,  6],
    [  7,  8,  9, 10, 11, 12, 13],
    [ 14, 15, 16, 17, 18, 19, 20],
    [ 21, 22, 23, 24, 25, 26, 27],
    [ 28, 29, 30, 31,  0,  0,  0]
  ]
}
```
---

# Technologies

- Typescript
- Express
- Jest
- Ts node dev
- Super test
- Dotenv
- Http status code
- Eslint

<div align="center">
  <img src="./assets/icons/typescript.svg" alt="typescript icon" height="70" width="70">
  &nbsp;&nbsp;&nbsp;
  <img src="./assets/icons/express.svg" alt="express icon" height="70" width="70">
  &nbsp;&nbsp;&nbsp;
  <img src="./assets/icons/jest.svg" alt="jest icon" height="70" width="70">
  &nbsp;&nbsp;&nbsp;
  <img src="./assets/icons/tsnode.svg" alt="tsnode icon" height="70" width="70">
  &nbsp;&nbsp;&nbsp;
  <img src="./assets/icons/eslint.svg" alt="eslint icon" height="70" width="70">
  &nbsp;&nbsp;&nbsp;
</div>

---

# Tests

Developed integration tests, using jest and supertest, for all endpoints

<img src="./assets/images/getCalendarNow.png" alt="tests results" width="100%">
<img src="./assets/images/getCalendarByMonth.png" alt="tests results" width="100%">
<img src="./assets/images/getCalendarFullYear.png" alt="tests results" width="100%">

--- 

# Deployment


