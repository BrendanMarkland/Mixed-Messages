//We will be randomly genereating horoscope quotes

//step one is to create a random number generator, this will allow us to pick one random element of all the arrays contained in the larger function that will hold all the different possibilities for the future.  

function generateRandomNumber(number){
    return Math.floor(Math.random()*number)
};

// create an object that holds other objects that will be the strings and data we need to iterate over and display cin a formatted way to the console. 


const horoscope = {
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
    day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,],
    
    years: [2022, 2023,2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045,
        2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071,
        2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100],
    
    action: ['collapse the universe into a black hole', 'open and crawl into a sewer', 'catch a football with your buttcheeks', 'buy ten thousand units of fish food', 
    'fall in love with a homeless man named Eugene', 'make googoo gaga baby noises', 'go to a baseball game dressed as Joe Biden', 'put your right foot in and take your left foot out',
    'go to the zoo and steal an exotic bird', 'cirticize the current socio-economic status of the far-left', 'buy a hat with a feather in it', 'become telekenetic and use the power to bend forks'],
    
    reasons: ['because of those dirty hippies.', 'due to disagreements with Flagnar, king of the sewer people.', 'because Kevin Hart was live at the Appollo.', 'because.... beep bap boop beep... reason unkown',
   'for the Vine', 'because a mind control worm is in your brain.', 'because of the 1994 womens gymnastics team.', 'because orange is the new black.', 'because a gypsy fortune teller said you would',
    'because you read Rich Dad Poor Dad.', 'so you could turn it into an NFT.', 'for no reason.' ]
};

//empty array that will hold the full prediction for the future

let theFuture = []


//iterates over the horoscope array and pushed the randomized elements of the arrays contained into the new empty array. 


for(let iterator in horoscope){
    let ID = generateRandomNumber(horoscope[iterator].length)

    switch(iterator){
       
        case 'month':
        theFuture.push(`On ${horoscope[iterator][ID]}`)
        break

        case 'day':
        theFuture.push(`${horoscope[iterator][ID]}`)
        break

        case 'years':
        theFuture.push(`${horoscope[iterator][ID]},`)
        break

        case 'action':
        theFuture.push(`you will ${horoscope[iterator][ID]}`)
        break

        case 'reasons':
        theFuture.push(`, ${horoscope[iterator][ID]}`)
        break

        default: 
        theFuture.push('Not enough information to predict your future.')
        break
    }
};
//joining together all the elements pushed into theFuture Array. 
function formatFuture(future) {

    const formatted = theFuture.join(' ')
    console.log(formatted)
  }


//function call to display the full sentence when the program is run through node. 
formatFuture(theFuture);