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

`http://localhost:3500/month` - Returns the calendar of the current date

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
**December** 

| Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
| :-----:| :-----:| :------:| :--------:| :-------:| :-----:| :-------:|
|        |        |         | 1         | 2        | 3      | 4        |
| 5      | 6      | 7       | 8         | 9        | 10     | 11       |
| 12     | 13     | 14      | 15        | 16       | 17     | 18       |
| 19     | 20     | 21      | 22        | 23       | 24     | 25       |
| 26     | 27     | 28      | 29        | 30       | 31     |          |