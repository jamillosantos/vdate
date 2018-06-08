# vdate-duration
A lightweight library for JavaScript for dealing with durations.

## Installation

    $ npm isntall vdate-duration

## Usage

```javascript
import {duration} from "vdate-duration";

const dtA = new Date(2018, 5, 1, 1);
const dtB = new Date(2018, 5, 1, 4);

const d = duration(dtB - dtA);

console.log(d.hours); // 3 
```